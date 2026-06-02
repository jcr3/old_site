<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import projects from '@/projects.json'

// TODO: when you exit a project the next prev buttons no longer work in gallery

const route = useRoute()
const router = useRouter()

interface Project {
    id: number
    title: string
    slug: string
    category: string
    date: string
    description: string
    resources: Array<string>
}

const allProjects = projects.flatMap(c => c.projects as Array<Project>)
const selectedProject = computed(() => {
  const slug = route.params.slug

  if (!slug) return null

  return allProjects.find(
    p => p.slug === slug
  ) ?? null
})

const highestProjectId = allProjects.length
  ? allProjects[allProjects.length - 1].id
  : 0;

function openProject(project: Project) {
    router.push(`/${project.slug}`)
    document.getElementById("projects")?.scrollIntoView({behavior: 'smooth'});
}

function closeProject() {
    router.push('/')
    document.getElementById("projects")?.scrollIntoView({behavior: 'smooth'});
}

function prevNextProject(prev: boolean = true) {
    if (selectedProject.value == null) return;
    const nextIndex = prev ? selectedProject.value.id - 1 : selectedProject.value.id + 1;
    if (nextIndex < 0) {
        openProject(allProjects[allProjects.length-1])
    }
    else if (nextIndex > allProjects.length-1) {
        openProject(allProjects[0])
    }
    else {
        openProject(allProjects[nextIndex])
    }
}

onMounted(() => {
    // gallery section
    for (const category of projects) {
        const row = document.getElementById(`category-${category.id}`)
        const next = document.getElementById(`next-${category.id}`)
        const prev = document.getElementById(`prev-${category.id}`)
        
        if (next && prev&& row) {
            next.onclick = () => {
                row.scrollBy({
                    left: row.clientWidth,
                    behavior: "smooth"
                })
            }

            prev.onclick = () => {
                row.scrollBy({
                    left: -row.clientWidth,
                    behavior: "smooth"
                })
            }
        } 
    }
})

</script>

<template>
  <div id="project-gallery">
    <div v-if="selectedProject !== null" class="project-page">
        <p @click="prevNextProject(true)" id="prev" class="prev">❮</p>
        <p @click="prevNextProject(false)" id="next" class="next">❯</p>
        <div style="overflow: auto; z-index: 1;">
            <p
                @click="closeProject"
                class="x-button"
            >x</p>
            <div style="display: flex; padding-left: 1em; padding-top: 1em;">
                <p class="overlay-section" style="width: fit-content;">
                    {{ selectedProject.title }}
                </p>
                <p style="padding-top: 1.1em;">
                    {{ selectedProject.category }}
                </p>
                <p style="padding-top: 1.1em; padding-right: 1em; flex-grow: 1; text-align: end;">
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

            <p style="flex-grow: 1; text-align: end; padding: 2em; padding-top: 1em;">
                {{ selectedProject.description }}
            </p>
        </div>
        <p id="page-number">
            {{ selectedProject.id + 1 }}/{{ highestProjectId + 1 }}
        </p>
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
                    <!--If its ever relevant, let resources link to 3d models and youtube videos-->
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
    padding: 0.2em;

    display: flex;
    flex-direction: column;
    position: relative;
    
    border-radius: 1em;
    
    overflow: hidden;
}
.project-page::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 0.2em solid var(--accent-color);
    border-radius: inherit;
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
    user-select: none;
}
.x-button:hover {
    color: var(--accent-color);
}

.resource-grid {
    columns: 4 15em;
    column-gap: 0.25em;
    row-gap: 0.5em;
    padding-left: 2em;
    padding-right: 2em;
}.resource-grid img {
    width: 100%;
    height: auto;
    display: block;
    break-inside: avoid;
}

.category {
    position: relative;
}

#page-number {
    position: absolute;
    left: 50%;
    bottom: 1em;
    z-index: 2;

    filter: blur(0.05em);
}

.row {
    margin-bottom: 1em;
    margin-left: 2em;
    margin-right: 2em;
    
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
    user-select: none;
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
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    width: fit-content;

    flex: 0 0 auto;
    scroll-snap-align: start;

    display: inline-block;
    position: relative;
}
.project:hover .project-title {
    opacity: 100%;
}
.project:hover .project-thumbnail {
    filter: brightness(50%);
}

.project-title {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;

    overflow-wrap: anywhere;
    hyphens: auto;

    max-height: calc(100% - 1em);
    width: calc(100% - 1em);
    padding: 0.5em;
    z-index: 1;
    
    color: white;
    -webkit-text-stroke: var(--accent-color) 0em;
    filter: blur(0.025em);
    opacity: 0%;
    transition: opacity 0.2s;
}
.project-thumbnail {
    height: 15em;
    transition: filter 0.2s;
    display: block;
}

</style>