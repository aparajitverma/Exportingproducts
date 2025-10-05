<script setup lang="ts">
interface Video {
  id: string
  title: string
  description?: string
  src: string
  poster?: string
  type: 'local' | 'youtube' | 'vimeo'
  thumbnail?: string
}

interface Props {
  videos: Video[]
  title?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Video Gallery',
  description: 'Explore our collection of videos'
})

function getEmbedUrl(video: Video): string {
  if (video.type === 'youtube') {
    return `https://www.youtube.com/embed/${video.src}`
  } else if (video.type === 'vimeo') {
    return `https://player.vimeo.com/video/${video.src}`
  }
  return video.src
}
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="mb-10 text-center">
        <h2>{{ title }}</h2>
        <p class="mt-2 text-white/70 max-w-2xl mx-auto">{{ description }}</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="video in videos" :key="video.id" class="card overflow-hidden">
          <!-- Local Video -->
          <div v-if="video.type === 'local'" class="aspect-video">
            <video 
              class="w-full h-full object-cover" 
              controls 
              playsinline 
              preload="metadata"
            >
              <source :src="video.src" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <!-- YouTube/Vimeo Embed -->
          <div v-else class="aspect-video">
            <iframe 
              class="w-full h-full"
              :src="getEmbedUrl(video)"
              frameborder="0"
              allowfullscreen
              :title="video.title"
            ></iframe>
          </div>

          <!-- Video Info -->
          <div class="p-4">
            <h3 class="text-white font-semibold">{{ video.title }}</h3>
            <p v-if="video.description" class="mt-2 text-white/70 text-sm">{{ video.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
