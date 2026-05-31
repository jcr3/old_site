<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <div class="modal-backdrop" @click="emit('close')">
      <div class="modal" @click.stop>
        <button class="close-btn" @click="emit('close')">
          ✕
        </button>

        <h2>{{ project.title }}</h2>

        <p class="description">
          {{ project.description }}
        </p>

        <div class="gallery">
          <img
            v-for="image in project.images"
            :key="image"
            :src="image"
            :alt="project.title"
          />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  background: white;
  width: min(1000px, 90vw);
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  border-radius: 12px;
  position: relative;
}

.close-btn {
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.gallery img {
  width: 100%;
  border-radius: 8px;
}
</style>