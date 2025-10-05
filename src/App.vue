<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ShilajitVideos from '@/components/ShilajitVideos.vue'
import ImageSlider from '@/components/ImageSlider.vue'
import HowToUse from '@/components/HowToUse.vue'
import ContactSection from '@/components/ContactSection.vue'
import WhatsAppFloat from '@/components/WhatsAppFloat.vue'
import Benefits from '@/components/Benefits.vue'
import Importers from '@/components/Importers.vue'
import ContactChat from '@/components/ContactChat.vue'
import variants from '@/data/variants'

function scrollToContact() {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<template>
  <div class="min-h-screen bg-hero-gradient">
    <NavBar />

    <!-- Hero -->
    <header class="section">
      <div class="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div class="space-y-6">
          <p class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">Premium Himalayan • Lab-tested • Authentic</p>
          <h1>
            Himalayan <span class="gold-gradient">Shilajit</span>
          </h1>
          <p class="text-white/80 text-lg leading-relaxed max-w-xl">
            Discover the purest form of Shilajit resin from the high altitudes of the Himalayas. Rich in fulvic acid and trace minerals, crafted to support energy, vitality, and overall wellbeing.
          </p>
          <div class="flex flex-wrap gap-3">
            <button class="btn-primary" @click="scrollToContact">Contact us</button>
            <a href="#variants" class="btn-outline">Explore variants</a>
          </div>
          <ul class="mt-4 grid grid-cols-2 gap-3 text-sm text-white/70 max-w-md">
            <li class="flex items-center gap-2"><span class="i">✅</span> Authentic Himalayan sourcing</li>
            <li class="flex items-center gap-2"><span class="i">✅</span> Third‑party lab tested</li>
            <li class="flex items-center gap-2"><span class="i">✅</span> High fulvic acid content</li>
            <li class="flex items-center gap-2"><span class="i">✅</span> GMP compliant processing</li>
          </ul>
        </div>
        <div class="relative">
          <div class="card p-4">
            <img src="/src/assets/logo.svg" alt="Shilajit" class="hidden" />
            <div class="aspect-square rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-center">
              <img 
                class="max-w-full max-h-full object-contain" 
                src="/images/Screenshot 2025-10-05 183108.png" 
                alt="Pure Himalayan Shilajit - Boost Immunity, Improves Heart Health, Enhance Libido" 
              />
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Variants -->
    <section id="variants" class="section">
      <div class="container">
        <div class="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2>Our Shilajit Variants</h2>
            <p class="mt-2 text-white/70 max-w-2xl">Choose from premium resin, convenient capsules, or fine powder — each crafted for purity, potency, and efficacy.</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="v in variants" :key="v.slug" class="card p-6 flex flex-col">
            <ImageSlider 
              :images="v.images || [v.image]" 
              :alt="v.name" 
              class="mb-4"
            />
            <h3 class="text-white">{{ v.name }}</h3>
            <p class="mt-2 text-white/70 text-sm">{{ v.description }}</p>
            <ul class="mt-4 space-y-1 text-sm text-white/70">
              <li><span class="text-white">Form:</span> {{ v.form }}</li>
              <li v-if="v.potency"><span class="text-white">Potency:</span> {{ v.potency }}</li>
              <li v-if="v.fulvic"><span class="text-white">Fulvic acid:</span> {{ v.fulvic }}</li>
              <li v-if="v.origin"><span class="text-white">Origin:</span> {{ v.origin }}</li>
            </ul>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="b in v.benefits" :key="b" class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 border border-white/10">{{ b }}</span>
            </div>
            <div class="mt-6">
              <a href="#contact" class="btn-primary">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video / Story -->
    <ShilajitVideos />

    <!-- Benefits -->
    <Benefits />

    <!-- How to Use -->
    <HowToUse />

    <!-- About & Quality -->
    <section id="about" class="section">
      <div class="container">
        <div class="card p-8">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-white mb-4">What Makes Our Shilajit Different</h2>
            <p class="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
              We source from high-altitude rock formations and purify through traditional low‑heat processes to retain bioactive compounds. Each batch undergoes heavy metal screening and microbiological testing.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-4xl mb-4">🔬</div>
              <h3 class="text-xl font-semibold text-white mb-3">Lab Tested Purity</h3>
              <p class="text-white/80 text-sm">Third‑party lab tested for safety, purity, and heavy metal screening</p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-4">⛰️</div>
              <h3 class="text-xl font-semibold text-white mb-3">Himalayan Source</h3>
              <p class="text-white/80 text-sm">High fulvic acid content and 85+ trace minerals from pristine locations</p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-4">🏭</div>
              <h3 class="text-xl font-semibold text-white mb-3">GMP Certified</h3>
              <p class="text-white/80 text-sm">GMP compliant facility with standardized processing and quality control</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <ContactSection />

    <!-- Importers / B2B -->
    <Importers />

    <Footer />
    <ContactChat />
    <WhatsAppFloat />
  </div>
</template>

<style scoped>
.i{display:inline-block;}
</style>
