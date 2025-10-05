<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
const open = ref(false)
const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 10 }
onMounted(() => window.addEventListener('scroll', onScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

function scrollToContact() {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
  // Close mobile menu if open
  open.value = false
}
</script>

<template>
  <nav :class="['sticky top-0 z-40 transition-all', scrolled ? 'backdrop-blur bg-coal/70 border-b border-white/10' : 'bg-transparent']">
    <div class="container flex items-center justify-between py-4">
      <a href="#top" class="flex items-center gap-2">
        <div class="h-9 w-9 rounded-full bg-brand-500"></div>
        <span class="font-display text-xl">Shilajit</span>
      </a>
      <button class="lg:hidden text-white/80" @click="open = !open" aria-label="Toggle Menu">☰</button>
      <ul :class="['lg:flex items-center gap-6 text-sm text-white/80', open ? 'block mt-4 space-y-3' : 'hidden lg:flex']">
        <li><a href="#variants" class="hover:text-white">Variants</a></li>
        <li><a href="#about" class="hover:text-white">About</a></li>
        <li><a href="#importers" class="hover:text-white">For Importers</a></li>
        <li><a href="#contact" class="hover:text-white">Contact</a></li>
        <li><button class="btn-primary ml-2" @click="scrollToContact">Contact us</button></li>
      </ul>
    </div>
  </nav>
</template>
