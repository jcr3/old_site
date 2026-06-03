<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import projects from '@/projects.json'
import { marked, type Tokens } from "marked";

const renderer = new marked.Renderer();

renderer.link = ({ href, title, tokens }: Tokens.Link) => {
  const text = tokens?.map(t => t.raw).join("") ?? "";
  return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
};

marked.use({ renderer });

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

function scrollCategory(categoryId: number, direction: number) {
  const row = document.getElementById(`category-${categoryId}`)

  if (!row) return

  row.scrollBy({
    left: row.clientWidth * direction,
    behavior: 'smooth'
  })
}

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
                <div v-for="(resource, idx) in selectedProject.resources">
                    <iframe v-if="resource.startsWith('https://') && !resource.startsWith('https://img.youtube')"
                        :src="resource"
                        :title="`${selectedProject.title}-${idx}`"
                    ></iframe>
                    <div v-else-if="!resource.startsWith('https://img.youtube')">
                        <model-viewer v-if="resource.endsWith('.glb')"
                            :src="`/projects${resource}`"
                            :alt="`${selectedProject.title}-${idx}`"
                            auto-rotate
                            camera-controls
                        >
                        </model-viewer>
                        <a v-else
                            :href="resource.startsWith('https://') ? resource : `/projects${resource}`"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img
                                :src="`/projects${resource}`"
                                :alt="`${selectedProject.title}-${idx}`"
                            >
                        </a>
                    </div>
                </div>
            </div>

            <p v-html="marked.parse(selectedProject.description)"
                style="flex-grow: 1; text-align: end; padding: 2em; padding-top: 1em; padding-left: 5em;"
            ></p>
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

            <p
                @click="scrollCategory(category.id, -1)"
                :id="`prev-${category.id}`" class="prev"
            >❮</p>
            <div :id="`category-${category.id}`" class="row">
                <div v-for="project in category.projects"
                    :id="`project-${project.id}`"
                    class="project"
                    @click="openProject(project)"
                >   
                    <p :id="`title-${project.id}`" class="project-title overlay-section">
                        {{ project.title }}
                    </p>
                    <img v-if="project.resources[0].startsWith('https://')"
                        :id="`thumbnail-${project.id}`"
                        :src="project.resources[0]"
                        :title="project.title"
                        class="project-thumbnail"
                    >
                    <model-viewer v-else-if="project.resources[0].endsWith('.glb')"
                        :id="`thumbnail-${project.id}`"
                        :src="`/projects${project.resources[0]}`"
                        :alt="project.title"
                        auto-rotate
                        class="project-thumbnail"
                    >
                    </model-viewer>
                    <img v-else
                        :id="`thumbnail-${project.id}`"
                        :src="`/projects${project.resources[0]}`"
                        :alt="project.title"
                        class="project-thumbnail"
                    >
                </div>
            </div>
            <p 
                @click="scrollCategory(category.id, 1)"
                :id="`next-${category.id}`" class="next"
            >❯</p>
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
    padding-top: 0.2em;
    padding-bottom: 0.8em;
    margin-left: 2em;
    margin-right: 2em;
    
    overflow-x: auto;
    overflow-y: visible;
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

    animation: bob 1.75s ease-in-out infinite;
    transition: animation 1s;
}
.project:hover {
    animation: none;
}
.project:hover .project-title {
    opacity: 100%;
}
.project:hover .project-thumbnail {
    filter: brightness(50%);
    background-color: white;
}
.project:nth-child(3n) {
    animation-delay: -0.5s;
}
.project:nth-child(3n + 1) {
    animation-delay: -1.2s;
}
.project:nth-child(3n + 2) {
    animation-delay: -2.6s;
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
    transition: filter background-color 0.2s;
    display: block;
}

@keyframes bob {
    0%  { transform: translateY(-0.1em) scale3d(0.99, 1.01, 1); }
    50%  { transform: translateY(0.1em) scale3d(1.01, 0.99, 1); }
    100% { transform: translateY(-0.1em) scale3d(0.99, 1.01, 1); }
}

</style>