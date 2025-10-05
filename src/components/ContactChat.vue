<script setup lang="ts">
import { reactive, ref, computed, onMounted, onBeforeUnmount } from 'vue'
import variants from '@/data/variants'

const open = ref(false)
const form = reactive({ name: '', email: '', phone: '', variant: '', message: '' })
const sent = ref(false)
const valid = computed(() => !!form.name && (!!form.email || !!form.phone) && form.message.length >= 10)

function reset() {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.variant = ''
  form.message = ''
  sent.value = false
}

function submit() {
  if (!valid.value) return
  sent.value = true
}

function openHandler() { open.value = true }

function openWithDetail(e: any) {
  const d = e?.detail || {}
  if (d.variant) form.variant = d.variant
  if (d.message) form.message = d.message
  open.value = true
}

onMounted(() => {
  window.addEventListener('open-chat', openHandler)
  window.addEventListener('open-chat-with', openWithDetail as EventListener)
})
onBeforeUnmount(() => {
  window.removeEventListener('open-chat', openHandler)
  window.removeEventListener('open-chat-with', openWithDetail as EventListener)
})
</script>

<template>
  <div>
    <button @click="open = true" class="fixed bottom-6 right-6 btn-primary shadow-glow" aria-haspopup="dialog">Chat with us</button>

    <div v-if="open" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50">
      <div class="w-full sm:max-w-md card border border-white/10 bg-coal p-0 overflow-hidden" role="dialog" aria-modal="true">
        <div class="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h3 class="text-white">Contact us</h3>
          <button class="text-white/60 hover:text-white" @click="open = false">✕</button>
        </div>

        <div class="p-5 space-y-4">
          <p class="text-sm text-white/70">Tell us a bit about yourself and what you’re looking for. We’ll get back to you shortly.</p>

          <div class="grid grid-cols-1 gap-3">
            <label class="block">
              <span class="text-sm text-white/80">Name</span>
              <input v-model="form.name" type="text" class="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus-visible:shadow-glow" placeholder="Your name" />
            </label>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label class="block">
                <span class="text-sm text-white/80">Email</span>
                <input v-model="form.email" type="email" class="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus-visible:shadow-glow" placeholder="you@example.com" />
              </label>
              <label class="block">
                <span class="text-sm text-white/80">Phone</span>
                <input v-model="form.phone" type="tel" class="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus-visible:shadow-glow" placeholder="+1 555 000 0000" />
              </label>
            </div>
            <label class="block">
              <span class="text-sm text-white/80">Interested in</span>
              <select v-model="form.variant" class="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white focus:outline-none focus-visible:shadow-glow">
                <option value="" class="bg-coal">Select a variant</option>
                <option v-for="v in variants" :key="v.slug" :value="v.name" class="bg-coal">{{ v.name }}</option>
              </select>
            </label>
            <label class="block">
              <span class="text-sm text-white/80">Message</span>
              <textarea v-model="form.message" rows="4" class="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus-visible:shadow-glow" placeholder="Share your requirements, quantity, destination, etc."></textarea>
            </label>
          </div>

          <div class="flex items-center justify-between">
            <p class="text-xs text-white/50">We typically reply within 24 hours.</p>
            <div class="flex gap-2">
              <button class="btn-outline" @click="reset()" type="button">Reset</button>
              <button class="btn-primary" :class="!valid && 'opacity-50 cursor-not-allowed'" @click="submit" :disabled="!valid">Send</button>
            </div>
          </div>

          <div v-if="sent" class="mt-3 rounded-xl border border-green-500/30 bg-green-500/10 px-3 py-2 text-sm text-green-300">
            Thank you! Your message has been recorded. We will contact you soon.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
