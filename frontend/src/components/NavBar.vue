<script setup lang="ts">
    import { Icon } from '@iconify/vue';

    const emit = defineEmits(['close']);

    function scrollToASection(id: string) {
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
        emit('close');
    }
</script>

<template>
    <div class="container">
        <div style="display: flex; height: 100%; background: var(--bg-color); transition: all var(--transition-time);">
            <div class="border"></div>
            <div style="display: flex; flex: 1 1 auto; flex-direction: column; gap: 2em; padding: 1em;">
                <p class="link" @click="() => scrollToASection('about')">
                    About
                </p>
                <p class="link" @click="() => scrollToASection('projects')">
                    Projects
                </p>
                <p class="link" @click="() => scrollToASection('contact')">
                    Contact
                </p>
                <a class="link"
                    target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jcredmond/"
                    style="text-decoration: none;"
                    @click="() => emit('close')"
                >
                    Resume
                </a>
            </div>
            <Icon
                icon="material-symbols:close"
                class="icon"
                width="2em"
                style="padding: 1em;"
                @click="emit('close')"
            />
        </div>
            
    </div>
</template>

<style scoped>
    .container {
        position: fixed;
        width: 15vw;
        height: 100vh;
        min-width: 15em;
        right: 0;
        top: 0;
        z-index: 2;
    }

    .border {
        filter: blur(0.1em);
        width: 0.2em;
        height: 100%;

        flex: 0 1 auto;

        background: var(--fg-color);
    }

</style>