<script setup lang="ts">
    import { onMounted } from 'vue';
    
    import { makeNoise2D } from 'fast-simplex-noise';

    import * as THREE from 'three';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	  import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
	  import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
	  import { HalftonePass } from 'three/addons/postprocessing/HalftonePass.js';
    import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
    import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';


    // VARIABLES 
    
    var canvasWidth = window.innerWidth;
    var canvasHeight = window.innerHeight;

    var mousePosScreen = new THREE.Vector2();
    var mousePos3D = new THREE.Vector3(0, -1.25, 1);

    const halftoneParams = {
		shape: 1,
		radius: 9 * Math.min(canvasWidth, canvasHeight) / 1200,
		rotateR: Math.PI / 12,
		rotateB: Math.PI / 12 * 2,
		rotateG: Math.PI / 12 * 3,
		scatter: 0.5,
		blending: 1,
		blendingMode: 1,
		greyscale: false,
		disable: false
	};

    const rotationFactor = 0.1;
    const autoMoveSpeed = 2;
    
    const maxMascotRotation = 0.5;

    let delta = 0;
    let interval = 1/12; // restrict to 12 fps

    // THREE JS SETUP

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, canvasWidth / canvasHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const clock = new THREE.Clock();

    renderer.setSize( canvasWidth, canvasHeight );
    camera.position.z = 5;

    const raycaster = new THREE.Raycaster();
    const mouseNDC = new THREE.Vector2();
    const mouseWorld = new THREE.Vector3();

    const rotation = new THREE.Vector2(0, 0);
    const velocity = new THREE.Vector2(0, 0);
    const stiffness = 12;
    const damping = 8;

    // LOAD MODEL

    const loader = new GLTFLoader();
    var spesGeo = new THREE.Group;

    loader.load( '/spes3d.glb', function ( gltf ) {
        spesGeo = gltf.scene;
        resizeMascot(window.innerWidth);
	    scene.add( spesGeo );
        }, undefined, function ( error ) {
            console.error( error );
        }
    );
    

    // LIGHTING

    const light = new THREE.DirectionalLight(0xffeedd, 2); // main light
    const rimLight = new THREE.DirectionalLight(0xffddaa, 0.1); // rim light
    light.position.set(0, 0, 1);
    rimLight.position.set(0, 0, -1);
    scene.add( light );
    scene.add( rimLight );


    // POST PROCESSING
    
    const composer = new EffectComposer( renderer );

	  const renderPass = new RenderPass( scene, camera );

	  const halftonePass = new HalftonePass( canvasWidth, canvasHeight, halftoneParams );

    const unrealBloomPass = new UnrealBloomPass( new THREE.Vector2(canvasWidth, canvasHeight), 0.9, 1, 0.3);

    const outputPass = new OutputPass();
    
	  composer.addPass( renderPass );
    composer.addPass( unrealBloomPass );
	  composer.addPass( halftonePass );
    composer.addPass( outputPass );


    // FUNCTIONS
    
    function resizeMascot(width: number) {
        if (canvasWidth < 500) spesGeo.scale.set(width / 500, width / 500, width / 500);
        else spesGeo.scale.set(1, 1, 1);
    }

    function autoMoveMascot(t: number, positionNoise: (x: number, y: number) => number) {
        // use simplex noise to move mascot and show off 3d on touch devices

        let horizontalScale = 1;
        let verticalScale = 1;

        if (canvasWidth < 800) horizontalScale = 2;
        if (canvasHeight < 800) verticalScale = 2;

        mousePosScreen.set(
            horizontalScale * positionNoise(t * autoMoveSpeed, 0),
            verticalScale * positionNoise(0, t * autoMoveSpeed),
            // 0.5,
        );

        raycaster.setFromCamera(mousePosScreen, camera);

        mouseWorld
            .copy(raycaster.ray.origin)
            .add(raycaster.ray.direction.clone().multiplyScalar(5));

        mousePos3D.copy(mouseWorld);
    }
    

    // INPUT

    if ( matchMedia('(pointer:fine)').matches ) {
        // has a mouse
        document.addEventListener('mousemove', (e: MouseEvent) => {
            mouseNDC.set(
                (e.clientX / canvasWidth) * 2 - 1,
                -(e.clientY / canvasHeight) * 2 + 1
            );

            raycaster.setFromCamera(mouseNDC, camera);

            mouseWorld
                .copy(raycaster.ray.origin)
                .add(raycaster.ray.direction.clone().multiplyScalar(5));

            mousePos3D.copy(mouseWorld);
        }, false);
    }
    else {
        // touch screen
        let t = 0;
        const positionNoise = makeNoise2D();
        setInterval(() => {
            autoMoveMascot(t, positionNoise);
            t += 12/1000;
        }, 1000/12);
    }


    // LOGIC

    onMounted(() => {

        // can only do this once the div exists
        const container = document.getElementById("mascot-container");
        if (container == null) { console.log("No mascot-container"); return; }

        container.appendChild( renderer.domElement );

        THREE.DefaultLoadingManager.onLoad = function ( ) {
            // fade in the canvas once loaded
            container.style.filter = "opacity(100)";
        };
        
        window.addEventListener('resize', () => {
            // dynamically resize
            
            canvasWidth = container.getBoundingClientRect().width;
            canvasHeight = container.getBoundingClientRect().height;

            resizeMascot(window.innerWidth);

            halftonePass.uniforms.radius.value = 9 * Math.min(canvasWidth, canvasHeight) / 1200;
            unrealBloomPass.resolution.set(canvasWidth, canvasHeight);

            renderer.setSize( canvasWidth, canvasHeight );
            composer.setSize( canvasWidth, canvasHeight );
            camera.aspect = canvasWidth / canvasHeight;
            camera.updateProjectionMatrix();
        });

        clock.start();

        function animate() {
            const deltaTime = clock.getDelta();
            delta += deltaTime;

            const target = new THREE.Vector2(
                mousePos3D.x * rotationFactor,
                mousePos3D.y * rotationFactor
            );

            // spring physics
            const force = new THREE.Vector2(
                (target.x - rotation.x) * stiffness,
                (target.y - rotation.y) * stiffness
            );

            velocity.x += force.x * deltaTime;
            velocity.y += force.y * deltaTime;

            // damping
            velocity.multiplyScalar(Math.exp(-damping * deltaTime));

            // integrate
            rotation.x += velocity.x * deltaTime;
            rotation.y += velocity.y * deltaTime;

            // clamp
            rotation.x = THREE.MathUtils.clamp(rotation.x, -maxMascotRotation, maxMascotRotation);
            rotation.y = THREE.MathUtils.clamp(rotation.y, -maxMascotRotation, maxMascotRotation);

            // apply
            spesGeo.rotation.x = rotation.y;
            spesGeo.rotation.y = -rotation.x;
            spesGeo.rotation.z -= deltaTime * 1;

            light.position.set(
                mousePos3D.x,
                mousePos3D.y,
                mousePos3D.z + 1
            );

            if ( delta > interval ) { // restrict frame rate to 'interval'
                composer.render();
                // add some noise
                halftonePass.uniforms.scatter.value = Math.random() * 0.5 + 0.25;

                delta = delta % interval;
            }
        }

        renderer.setAnimationLoop( animate );
            
    });
</script>

<template>
    <div id="mascot-container">
        <!-- three canvas rendered here -->
    </div>
</template>

<style scoped>
    #mascot-container {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        mix-blend-mode: screen;

        pointer-events: none;

        transition: color background-color var(--transition-time);
        filter: opacity(0); /* bring to 100 once loaded */
    }
</style>
