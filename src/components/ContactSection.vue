<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  inquiryType: 'general'
})

const isSubmitting = ref(false)

function submitForm() {
  isSubmitting.value = true
  // Form submission logic would go here
  setTimeout(() => {
    isSubmitting.value = false
    // Reset form or show success message
  }, 2000)
}

const contactMethods = [
  {
    title: 'Email Us',
    description: 'Get detailed information about our products',
    icon: '📧',
    primary: 'theexportexpress@gmail.com',
    secondary: 'aparajitverma@gmail.com',
    action: 'mailto:theexportexpress@gmail.com'
  },
  {
    title: 'WhatsApp Chat',
    description: 'Quick responses and instant support',
    icon: '💬',
    primary: 'Chat with us instantly',
    secondary: 'Available 24/7',
    action: 'https://wa.link/bdip8f'
  },
  {
    title: 'Contact Form',
    description: 'Detailed inquiries and bulk orders',
    icon: '📝',
    primary: 'Fill the form below',
    secondary: 'We respond within 24 hours',
    action: '#contact-form'
  }
]

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'bulk', label: 'Bulk/Wholesale Orders' },
  { value: 'export', label: 'Export/International' },
  { value: 'quality', label: 'Quality & Certifications' },
  { value: 'partnership', label: 'Business Partnership' },
  { value: 'support', label: 'Product Support' }
]
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
          Get in <span class="gold-gradient">Touch</span>
        </h2>
        <p class="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
          Ready to experience authentic Himalayan Shilajit? Contact us for product information, bulk orders, or any questions about our premium quality supplements.
        </p>
      </div>

      <!-- Contact Methods -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div v-for="method in contactMethods" :key="method.title" class="card p-6 text-center hover:scale-105 transition-transform">
          <div class="text-4xl mb-4">{{ method.icon }}</div>
          <h3 class="text-xl font-semibold text-white mb-2">{{ method.title }}</h3>
          <p class="text-white/70 text-sm mb-4">{{ method.description }}</p>
          <div class="space-y-1 mb-6">
            <p class="text-white font-medium">{{ method.primary }}</p>
            <p class="text-white/60 text-sm">{{ method.secondary }}</p>
          </div>
          <a 
            :href="method.action" 
            class="btn-primary inline-block"
            :target="method.action.startsWith('http') ? '_blank' : '_self'"
          >
            Contact Now
          </a>
        </div>
      </div>

      <!-- Contact Form -->
      <div id="contact-form" class="max-w-4xl mx-auto">
        <div class="card p-8">
          <h3 class="text-2xl font-semibold text-white mb-8 text-center">Send Us a Message</h3>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Personal Information -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-white font-medium mb-2">Full Name *</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  required
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label class="block text-white font-medium mb-2">Email Address *</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  required
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <!-- Contact & Company -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-white font-medium mb-2">Phone Number</label>
                <input 
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label class="block text-white font-medium mb-2">Company/Organization</label>
                <input 
                  v-model="form.company"
                  type="text"
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                  placeholder="Enter company name (optional)"
                />
              </div>
            </div>

            <!-- Inquiry Type -->
            <div>
              <label class="block text-white font-medium mb-2">Inquiry Type</label>
              <select 
                v-model="form.inquiryType"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
              >
                <option v-for="type in inquiryTypes" :key="type.value" :value="type.value" class="bg-gray-800">
                  {{ type.label }}
                </option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label class="block text-white font-medium mb-2">Message *</label>
              <textarea 
                v-model="form.message"
                required
                rows="6"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 resize-none"
                placeholder="Tell us about your requirements, questions, or how we can help you..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="btn-primary px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="flex items-center gap-2">
                  <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Quick Contact Info -->
      <div class="mt-16 text-center">
        <div class="card p-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/20">
          <h3 class="text-xl font-semibold text-white mb-4">Quick Contact Information</h3>
          <div class="flex flex-wrap justify-center gap-8 text-white/80">
            <div class="flex items-center gap-2">
              <span>📧</span>
              <span>theexportexpress@gmail.com</span>
            </div>
            <div class="flex items-center gap-2">
              <span>📧</span>
              <span>aparajitverma@gmail.com</span>
            </div>
            <div class="flex items-center gap-2">
              <span>💬</span>
              <a href="https://wa.link/bdip8f" target="_blank" class="text-green-400 hover:text-green-300 transition-colors">
                WhatsApp Chat
              </a>
            </div>
          </div>
          <p class="mt-4 text-white/60 text-sm">
            We typically respond within 24 hours. For urgent inquiries, please use WhatsApp for fastest response.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
