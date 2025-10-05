<script setup lang="ts">
import { ref } from 'vue'
import VideoGallery from './VideoGallery.vue'
import VideoModal from './VideoModal.vue'

interface Video {
  id: string
  title: string
  description?: string
  src: string
  poster?: string
  type: 'local' | 'youtube' | 'vimeo'
  thumbnail?: string
}

const selectedVideo = ref<Video | null>(null)
const isModalOpen = ref(false)

// Your actual manufacturing and product videos
const videos: Video[] = [
  {
    id: '1',
    title: 'Manufacturing Plant',
    description: 'Take a tour of our state-of-the-art Shilajit manufacturing facility with modern equipment and quality controls.',
    src: '/videos/WhatsApp Video 2024-09-25 at 1.16.27 PM.mp4',
    type: 'local'
  },
  {
    id: '2',
    title: 'Product Packaging Process',
    description: 'See our professional packaging process ensuring product safety and quality preservation.',
    src: '/videos/WhatsApp Video 2024-09-25 at 1.16.29 PM.mp4',
    type: 'local'
  },
  {
    id: '3',
    title: 'Bulk Packaging Operations',
    description: 'Our bulk packaging facility for wholesale and export operations with industrial-grade equipment.',
    src: '/videos/WhatsApp Video 2024-09-25 at 1.16.32 PM.mp4',
    type: 'local'
  },
  {
    id: '4',
    title: 'Quality & Consistency - 3200kg Resin Production',
    description: 'Witness the quality and consistency of our large-scale Shilajit resin production by Mrida Greens.',
    src: '/videos/WhatsApp Video 2025-09-03 at 5.11.25 PM mrida greens 3200kg resin.mp4',
    type: 'local'
  }
]

function openVideoModal(video: Video) {
  selectedVideo.value = video
  isModalOpen.value = true
}

function closeVideoModal() {
  isModalOpen.value = false
  selectedVideo.value = null
}
</script>

<template>
  <div>
    <!-- Video Gallery -->
    <VideoGallery
      :videos="videos"
      title="Our Manufacturing Excellence"
      description="See our state-of-the-art facilities, quality processes, and large-scale production capabilities"
    />

    <!-- Video Thumbnails with Modal Trigger -->
    <section class="section">
      <div class="container">
        <h2 class="mb-8 text-center">Featured Videos</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="video in videos"
            :key="video.id"
            class="card overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            @click="openVideoModal(video)"
          >
            <div class="aspect-video relative bg-gray-800 flex items-center justify-center">
              <video 
                class="w-full h-full object-cover" 
                preload="metadata"
                muted
              >
                <source :src="video.src" type="video/mp4" />
              </video>
              <!-- Play Button Overlay -->
              <div class="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors">
                <div class="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full">
                  <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-white font-medium text-sm">{{ video.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Modal -->
    <VideoModal
      :is-open="isModalOpen"
      :video="selectedVideo"
      @close="closeVideoModal"
    />
  </div>
</template>
