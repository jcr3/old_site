<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue';

import NavBar from '../components/NavBar.vue';
import Spes3D from '../components/Spes3D.vue';
import MetaBalls from '../components/MetaBalls.vue';
import ProjectGallery from '../components/ProjectGallery.vue';

const route = useRoute()

const roleList = [
    'Designer',
    'Maker',
    'Software Developer',
    'Clothing Designer',
    'Painter',
    'Video Editor',
    'Actor/Director',
    'Toy Designer',
    'Engineer',
    'Hobbiest',
    'Graphic Designer',
    'Homelabber',
    'Musician'
]

// parallax layers
let bg2, bg1, bg0, fg0, fg1, fg2;

const pauseRole = ref(false);

const showNavBar = ref(false);
const showMetaBalls = ref(false);

const slideDuration = ref(500);

const currentWidth = ref(window.innerWidth);

function wiggleLogo() {
    // can't use ':hover' so doing it manually
    let logo = document.getElementById("logo");
    if (logo == null) { console.log("No logo"); return; }
    
    logo.style.transform = "rotate(15deg) translateY(-1em)";
}
function unWiggleLogo() {
    let logo = document.getElementById("logo");
    if (logo == null) { console.log("No logo"); return; }

    logo.style.transform = "rotate(0deg) translateY(-1em)";
}

function clampedParallaxFromScroll(startY: number, endY: number, startPos: Array<number>, endPos: Array<number>): Array<number> {
    // move an element between start and end scrollY position
    if (window.scrollY < startY) {
        return startPos;
    }
    else if (window.scrollY < endY) {
        const x = (window.scrollY - startY) / (endY - startY) * (endPos[0] - startPos[0]) + startPos[0];
        const y = (window.scrollY - startY) / (endY - startY) * (endPos[1] - startPos[1]) + startPos[1];
        return [x, y];
    }
    else {
        return endPos;
    }

}

onMounted(async () => {
    let role = document.getElementById("role");

    const landingPage = document.getElementById('landing-page');

    const noiseContainer = document.getElementById('noise-container');
    const metaballContainer = document.getElementById('metaball-container');

    const mascotContainer = document.getElementById('mascot-container');
    const arrowIcon = document.getElementById('arrow-icon');
    const aboutHeader = document.getElementById('about-header');
    const aboutText1 = document.getElementById('about-text-1');
    const aboutText2 = document.getElementById('about-text-2');

    window.addEventListener('scroll', onScroll, { passive: true })
    function onScroll() {
        currentWidth.value = window.innerWidth;

        // get all elements of overlay-header class
        // if element is in central band of screen unblur

        if (window.scrollY > document.body.scrollHeight / 2) {
            // projects
            if (metaballContainer) metaballContainer.style.opacity = "1";
            showMetaBalls.value = true;
            document.documentElement.style.setProperty('--fg-color', '#110707');
            document.documentElement.style.setProperty('--bg-color', '#fbf5f5');
            document.documentElement.style.setProperty('--accent-color', '#8cc77c');
        }
        else if (landingPage && window.scrollY < landingPage.getBoundingClientRect().height/2) {
            // landing page
            if (noiseContainer) noiseContainer.style.opacity = "0";
            if (metaballContainer) metaballContainer.style.opacity = "0";
            showMetaBalls.value = false;
            document.documentElement.style.setProperty('--fg-color', '#ffffff');
            document.documentElement.style.setProperty('--bg-color', '#842806');
            document.documentElement.style.setProperty('--accent-color', '#f5be09');
        }
        else {
            // about
            if (noiseContainer) noiseContainer.style.opacity = "1";
            if (metaballContainer) metaballContainer.style.opacity = "1";
            showMetaBalls.value = true;
            document.documentElement.style.setProperty('--fg-color', '#ffffff');
            document.documentElement.style.setProperty('--bg-color', '#020202');
            document.documentElement.style.setProperty('--accent-color', '#ff00ff');
        }

        // Parallax effects (fg faster than with nothing, bg slower than with nothing, higher number = more drastic change)
        
        bg2 = window.scrollY * 1/8;
        bg1 = window.scrollY * 1/4;
        bg0 = window.scrollY * 3/4;
        // nothing applied fits here
        fg0 = - window.scrollY * 3/4;
        fg1 = - window.scrollY * 1/4;
        fg2 = - window.scrollY * 1/8;

        if (mascotContainer) mascotContainer.style.transform = `translateY(${fg1}px)`;
        if (arrowIcon) arrowIcon.style.transform = `translateY(${fg0}px)`;

        // special case, want to scroll from 0% to 100% between start and end of page
        if (metaballContainer) {
            const metaballContainerRect = metaballContainer.getBoundingClientRect();
            metaballContainer.style.transform =`translateY(${clampedParallaxFromScroll(
                0,
                document.body.scrollHeight + window.innerHeight,
                [0, 0],
                [0, -metaballContainerRect.height]
            )[1]}px)`;
        }

        // horizontal scroll fx

        if (aboutHeader) {
            const aboutHeaderRect = aboutHeader.getBoundingClientRect();
            aboutHeader.style.transform =`translateX(${clampedParallaxFromScroll(
                aboutHeaderRect.top - window.innerHeight/2,
                aboutHeaderRect.top,
                [-aboutHeaderRect.width -36, 0],
                [0, 0]
            )[0]}px)`;
        }
        
        if (aboutText1) {
            const aboutTextRect1 = aboutText1.getBoundingClientRect();
            aboutText1.style.transform =`translateX(${clampedParallaxFromScroll(
                aboutTextRect1.top - window.innerHeight/2,
                aboutTextRect1.top,
                [aboutTextRect1.width, 0],
                [0, 0]
            )[0]}px)`;
        }

        if (aboutText2) {
            const aboutTextRect2 = aboutText2.getBoundingClientRect();
            aboutText2.style.transform =`translateX(${clampedParallaxFromScroll(
                aboutTextRect2.top - window.innerHeight/2,
                aboutTextRect2.top,
                [-aboutTextRect2.width, 0],
                [0, 0]
            )[0]}px)`;
        }
    }
        
    setInterval(() => {
        if (role && !pauseRole.value) role.textContent = roleList[Math.floor(Math.random()*roleList.length)];
    }, 1000/6); // 6 per seconds

    // scroll to project section if project selected
    await nextTick()
    if (route.path !== '/') {
        document.getElementById("projects")?.scrollIntoView({behavior: 'smooth'})
    }
});
</script>

<template>
    <div id="home-page">

        <!-- FIXED ELEMENTS -->

        <Icon
            id="navBarIcon"
            icon="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger"
            width="2em"
            class="icon"
            style="flex: 0 1 auto; display: flex; transform: rotate(45deg);"
            @click="showNavBar=true"
        />

        <Transition name="slide-in-from-left">
            <NavBar
                v-if="showNavBar"
                @close="showNavBar = false"
            />
        </Transition>

        <div id="noise-container">
            <div id="noise-texture"></div>
        </div>

        <div id="metaball-container">
            <MetaBalls v-motion-fade-visible :duration="slideDuration*2"/>
        </div>
        
        

        <!-- LANDING PAGE -->

        <div class="section" id="landing-page" style="height: 100vh;">
            <div style="width: calc(100% - 2em); display: flex; justify-content: end; padding: 1em;">
                <div style="display: flex; flex: 1 1 auto; justify-content: center;">
                    <img
                        id="logo"
                        src="/spes_logo.svg"
                        width="64px"
                        @mouseover="wiggleLogo"
                        @mouseout="unWiggleLogo"
                    >
                </img>
                </div>
            </div>
            
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-top: 30vh;">
                <p class="overlay-header">
                    Hello, my name is JC and I am a
                </p>
                <p
                    id="role"
                    class="overlay-header"
                    style="font-style: italic; text-align: right;"
                    @mouseover="() => {pauseRole = true}"
                    @mouseout="() => {pauseRole = false}"
                >
                    Designer
                </p>
            </div>

            <Icon v-motion-slide-visible-once-bottom
                :duration="slideDuration"
                icon="material-symbols:arrow-circle-down"
                id="arrow-icon"
                class="overlay-header"
                style="width: 1em; position: absolute; bottom: 1.5em; right: 20%;"
            />
            
            <div id="mascot-container">
                <Spes3D />
            </div>
        </div>


        <!-- ABOUT SECTION -->

        <div class="section" id="about" style="width: 100%; padding-bottom: 5em;">
            <div style=" width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding-top: 3em;">
                <div class="overlay-header" style="display: flex; justify-content: start;">
                    <p id="about-header">
                        About
                    </p>
                </div>
                
                <div class="overlay-section" style="display: flex; flex-direction: column; align-items: end; padding-top: 1em;">
                    <p id="about-text-1" style="text-align: right; max-width: 30em;">
                        JC Redmond III is a multidisciplinary artist and designer with a focus in <i>product design & prototyping</i>, <i>software develoment</i>, 
                        <i>painting & drawing</i>, <i>music</i>, and <i>film</i> - particullarly when they align with one of arguablly too many hobbies.
                        <br><br>
                        <i>He is currently based in Glasgow, Scotland but is originally from Atlanta, Ga.</i>
                    </p>
                </div>
                <br>
                <div class="overlay-section" style="display: flex; flex-direction: column; align-items: start;">
                    <p id="about-text-2" style="max-width: 25em;">
                        In 2024 he graduated from the University of Glasgow with a <i>First Class BEng Mechatronics</i> degree, along with awards from the
                        <i>Hammermen of Glasgow</i> and the <i>IMechE</i>, and is currently working as a <i>Sr. R&D Engineer</i> at Synopsys.
                    </p>
                </div>                
            </div>
        </div>

        <!-- PROJECTS SECTION -->

        <div class="section" id="projects" style="width: 100%; padding-bottom: 5em;">
            <div style=" width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding-top: 1em;">
                <div class="overlay-header" style="display: flex; justify-content: center; padding-bottom: 0.5em;">
                    <p id="projects-header">
                        Projects
                    </p>
                </div>

                <div style="width: 100%; max-width: 1168px;">
                    <ProjectGallery />
                </div>
            </div>
        </div>

        <div class="section" id="contact" style="width: calc(100% - 6em); background: var(--fg-color); color: var(--bg-color); padding: 3em;">
            <div class="overlay-header"
                style="max-width: 100%; display: flex; justify-content: center; align-items: center; font-size: 1.5em; gap: 1em; text-align: center;"
                :style="`flex-direction: ${currentWidth < 700 ? 'column' : 'row'}; `"
            >
                <img
                    src="/spes_logo.svg"
                    width="32px"
                ></img>
                <p>
                    email: sanctusspes@gmail.com
                </p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jcr3/portfolio_site" style="color: var(--bg-color);">Site Source Code</a>
                <p>
                    © 2026 JC Redmond III
                </p>
            </div>
            
        </div>
    </div>

    <!-- add a nav bar to see resume and contact -->
</template>

<style>

    i {
        font-style: italic;
    }

    #home-page {
        color: var(--fg-color);
        background: var(--bg-color);
        overflow: hidden;
        
        position: relative;
        transition: all var(--transition-time);
    }

    #mascot-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        mix-blend-mode: screen;
    }

    .section {
        width: 100%;
        position: relative;
    }

    .overlay-header {
        font-family: monospace;
        font-weight: bolder;
        font-size: 3em;
        letter-spacing: -0.05em;
        word-spacing: -0.2em;
        text-align: left;
        padding: 0.25em;
        width: calc(100% - 2 * 0.25em);
        max-width: 1168px;
        -webkit-text-stroke: var(--accent-color) 0.005em;
        filter: blur(0.025em);
    }
    .overlay-header:hover {
        filter: blur(0.015em);
    }
    .overlay-section {
        font-family: 'Trebuchet MS';
        font-size: 1.7em;
        padding: 0.25em;
        max-width: 1168px;
        width: calc(100% - 2 * 0.25em);
        -webkit-text-stroke: var(--accent-color) 0.007em;
        filter: blur(0.015em);
    }

    #navBarIcon {
        position: fixed;
        z-index: 2;
        right: 1em;
        top: 1em;
    }

    #noise-container {
        opacity: 0;
        transition: opacity var(--transition-time);
        
        mix-blend-mode: color-dodge;
    }

    #noise-texture:after {
        animation: grain 1s steps(2) infinite;
        background-image: url("/noise_texture.jpg");
        position: fixed;
        content: "";
        width: 200%;
        height: 200%;
        top: -50%;
        left: -50%;
    }

    #metaball-container {
        position: fixed;
        width: 100%;
        height: 200vh;
        top: 0;
        opacity: 0;
        transition: opacity calc(var(--transition-time)/2);
    }

    #logo {
        transition: transform 0.15s;
        z-index: 1;
        filter: blur(0.05em);
        transform: rotate(0deg) translateY(-1em);
    }

    @keyframes grain {
        0%, 100% { transform:translate(0, 0) }
        10% { transform:translate(-5%, -10%) }
        20% { transform:translate(-15%, 5%) }
        30% { transform:translate(-7%, -25%) }
        40% { transform:translate(12%, 25%) }
        50% { transform:translate(-15%, 10%) }
        60% { transform:translate(15%, 0%) }
        70% { transform:translate(0%, 15%) }
        80% { transform:translate(3%, 25%) }
        90% { transform:translate(-10%, 10%) }
    }
</style>