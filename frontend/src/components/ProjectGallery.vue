<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import projects from '@/projects.json'

interface Project {
    id: number
    title: string
    date: string
    description: string
    resources: Array<string>
}

const selectedProject = ref<Project | null>(null)

function openProject(project: Project) {
  selectedProject.value = project
}

window.addEventListener('popstate', function (event) {
    // close project if you press back button
    selectedProject.value = null
});

onMounted(() => {
    for (const category of projects) {
        const row = document.getElementById(`category-${category.id}`)
        const next = document.getElementById(`next-${category.id}`)
        const prev = document.getElementById(`prev-${category.id}`)
        
        if (next && prev&& row) {
            console.log('theyre here')
            next.onclick = () => {
                row.scrollBy({
                    left: row.clientWidth,
                    behavior: "smooth"
                });
            };

            prev.onclick = () => {
                row.scrollBy({
                    left: -row.clientWidth,
                    behavior: "smooth"
                });
            };
        } 
    }
})

</script>

<template>
  <div id="project-gallery">
    <div v-if="selectedProject !== null" class="project-page">
        <div style="overflow: auto; z-index: 1;">
            <p
                @click="selectedProject=null"
                class="x-button"
            >x</p>
            <div style="display: flex; padding-left: 1em; padding-top: 1em;">
            <p class="overlay-section" style="width: fit-content;">
                    {{ selectedProject.title }}
                </p>
                <p style="padding-top: 1.05em;">
                    {{ selectedProject.date }}
                </p>
            </div>
            
            <div class="resource-grid">
                <a v-for="(resource, idx) in selectedProject.resources"
                    :href="`/projects${resource}`" target="_blank" rel="noopener noreferrer"
                >
                    <img
                        :src="`/projects${resource}`"
                        :alt="`${selectedProject.title}-${idx}`"
                    >
                </a>
            </div>

            <p style="flex-grow: 1; text-align: end; padding: 1em;">
                {{ selectedProject.description }}
            </p>
        </div>
    </div>
    <div v-else>
        <div v-for="category in projects" class="category">
            <p class="overlay-section">
                {{ category.title }}
            </p>

            <p :id="`prev-${category.id}`" class="prev">❮</p>
            <div :id="`category-${category.id}`" class="row">
                <div v-for="project in category.projects"
                    :id="`project-${project.id}`"
                    class="project"
                    @click="openProject(project)"
                >   
                    <p :id="`title-${project.id}`" class="project-title overlay-section">
                        {{ project.title }}
                    </p>
                    <img
                        :id="`thumbnail-${project.id}`"
                        :src="`/projects${project.resources[0]}`"
                        :alt="project.title"
                        class="project-thumbnail"
                    >
                </div>
            </div>
            <p :id="`next-${category.id}`" class="next">❯</p>
        </div>
    </div>
    
  </div>
</template>

<style scoped>
#project-gallery {
    width: 100%;
}

.project-page {
    height: 55.7em;
    margin-left: 1em;
    margin-right: 1em;

    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}
.project-page::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 0.2em solid var(--accent-color);
    border-radius: 1em;
    filter: blur(0.1em);
}

.x-button {
    width: fit-content;
    height: fit-content;
    font-size: 2em;
    text-align: end;
    cursor: pointer;
    filter: blur(0.05em);
    position: absolute;
    right: 0.2em;
    z-index: 1;
    transition: color 0.2s;
}
.x-button:hover {
    color: var(--accent-color);
}

.resource-grid {
    columns: 4 15em;
    column-gap: 0.25em;
    row-gap: 0.5em;
    padding-left: 1em;
    padding-right: 1em;
}.resource-grid img {
    width: 100%;
    height: auto;
    display: block;
    break-inside: avoid;
}

.category {
    position: relative;
}

.row {
    padding-bottom: 1em;
    padding-left: 2em;
    padding-right: 2em;

    align-items: center;
    
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    display: flex;
    flex-direction: row;
    gap: 0.5em;
}

.prev, .next {
    position: absolute;
    font-size: 2em;
    top: 50%;
    z-index: 2;
    cursor: pointer;
    opacity: 50%;
    transition: opacity 0.2s;
}
.prev {
    left: 0.2em;
}
.next {
    right: 0.2em;
}
.prev:hover, .next:hover {
    opacity: 100%;
}

.project {
    height: 15em;
    max-width: 20em;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;

    flex: 0 0 auto;
    scroll-snap-align: center;

    display: grid;
}
.project:hover .project-title {
    opacity: 100%;
}
.project:hover .project-thumbnail {
    filter: brightness(50%);
}

.project-title {
    grid-area: 1 / 1;
    z-index: 1;
    width: 100%;
    text-align: center;
    color: white;
    -webkit-text-stroke: var(--accent-color) 0em;
    filter: blur(0.025em);
    opacity: 0%;
    transition: opacity 0.2s;
}
.project-thumbnail {
    grid-area: 1 / 1;
    height: 15em;
    transition: filter 0.2s;
}

</style>