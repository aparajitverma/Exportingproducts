<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  images: string[]
  alt: string
}

const props = defineProps<Props>()
const currentIndex = ref(0)

const currentImage = computed(() => props.images[currentIndex.value])

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

function prevImage() {
  currentIndex.value = currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1
}

function goToImage(index: number) {
  currentIndex.value = index
}
</script>

<template>
  <div class="relative aspect-square rounded-xl border border-white/10 bg-white/5 overflow-hidden group">
    <!-- Main Image -->
    <img 
      :src="currentImage" 
      :alt="alt" 
      class="w-full h-full object-cover transition-opacity duration-300"
    />
    
    <!-- Navigation Arrows (only show if multiple images) -->
    <template v-if="images.length > 1">
      <!-- Previous Button -->
      <button
        @click="prevImage"
        class="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <!-- Next Button -->
      <button
        @click="nextImage"
        class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <!-- Dots Indicator -->
      <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
        <button
          v-for="(_, index) in images"
          :key="index"
          @click="goToImage(index)"
          class="w-2 h-2 rounded-full transition-colors duration-200"
          :class="currentIndex === index ? 'bg-white' : 'bg-white/40 hover:bg-white/60'"
        />
      </div>
    </template>
  </div>
</template>
