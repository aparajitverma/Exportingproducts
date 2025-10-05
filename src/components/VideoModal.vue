<script setup lang="ts">
import { ref, watch } from 'vue'

interface Video {
  id: string
  title: string
  src: string
  type: 'local' | 'youtube' | 'vimeo'
  poster?: string
}

interface Props {
  isOpen: boolean
  video: Video | null
}

interface Emits {
  (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const videoRef = ref<HTMLVideoElement>()

function closeModal() {
  // Pause video when closing
  if (videoRef.value) {
    videoRef.value.pause()
  }
  emit('close')
}

function getEmbedUrl(video: Video): string {
  if (video.type === 'youtube') {
    return `https://www.youtube.com/embed/${video.src}?autoplay=1`
  } else if (video.type === 'vimeo') {
    return `https://player.vimeo.com/video/${video.src}?autoplay=1`
  }
  return video.src
}

// Close modal on Escape key
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.addEventListener('keydown', handleEscape)
  } else {
    document.removeEventListener('keydown', handleEscape)
  }
})

function handleEscape(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    closeModal()
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen && video"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        @click="closeModal"
      >
        <div
          class="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden"
          @click.stop
        >
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Video Content -->
          <div class="aspect-video">
            <!-- Local Video -->
            <video
              v-if="video.type === 'local'"
              ref="videoRef"
              class="w-full h-full"
              controls
              autoplay
              playsinline
            >
              <source :src="video.src" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <!-- YouTube/Vimeo Embed -->
            <iframe
              v-else
              class="w-full h-full"
              :src="getEmbedUrl(video)"
              frameborder="0"
              allowfullscreen
              :title="video.title"
            ></iframe>
          </div>

          <!-- Video Title -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white">{{ video.title }}</h3>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
