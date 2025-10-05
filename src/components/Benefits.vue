<script setup lang="ts">
interface Benefit {
  id: string
  title: string
  description: string
  details: string[]
  icon: string
  category: 'physical' | 'mental' | 'wellness'
}

const benefits: Benefit[] = [
  {
    id: 'energy',
    title: 'Enhanced Energy & Stamina',
    description: 'Natural energy boost without crashes, supporting sustained physical performance and reducing fatigue.',
    details: [
      'Increases ATP production at cellular level',
      'Supports mitochondrial function',
      'Reduces exercise-induced fatigue',
      'Improves physical endurance naturally'
    ],
    icon: '⚡',
    category: 'physical'
  },
  {
    id: 'cognition',
    title: 'Cognitive Enhancement',
    description: 'Improves mental clarity, focus, and memory through fulvic acid and trace minerals.',
    details: [
      'Enhances memory and learning capacity',
      'Improves focus and concentration',
      'Supports brain health and neuroprotection',
      'Reduces mental fatigue and brain fog'
    ],
    icon: '🧠',
    category: 'mental'
  },
  {
    id: 'immunity',
    title: 'Immune System Support',
    description: 'Strengthens natural immunity and promotes faster recovery from illness and stress.',
    details: [
      'Rich in antioxidants and minerals',
      'Supports immune cell function',
      'Helps fight oxidative stress',
      'Promotes faster recovery times'
    ],
    icon: '🛡️',
    category: 'wellness'
  },
  {
    id: 'minerals',
    title: 'Essential Mineral Replenishment',
    description: 'Contains 85+ trace minerals essential for optimal body function and cellular health.',
    details: [
      'Provides rare earth minerals',
      'Supports electrolyte balance',
      'Enhances nutrient absorption',
      'Fills dietary mineral gaps'
    ],
    icon: '💎',
    category: 'wellness'
  },
  {
    id: 'vitality',
    title: 'Hormonal Balance & Vitality',
    description: 'Supports healthy hormone levels, reproductive health, and overall vitality.',
    details: [
      'Supports testosterone levels naturally',
      'Enhances reproductive health',
      'Balances stress hormones',
      'Improves overall vitality and libido'
    ],
    icon: '🔥',
    category: 'physical'
  },
  {
    id: 'anti-aging',
    title: 'Anti-Aging & Longevity',
    description: 'Powerful antioxidant properties help slow aging process and promote cellular regeneration.',
    details: [
      'Fights free radical damage',
      'Supports cellular regeneration',
      'Promotes healthy aging',
      'Enhances skin health and appearance'
    ],
    icon: '🌟',
    category: 'wellness'
  }
]

const physicalBenefits = benefits.filter(b => b.category === 'physical')
const mentalBenefits = benefits.filter(b => b.category === 'mental')
const wellnessBenefits = benefits.filter(b => b.category === 'wellness')
</script>

<template>
  <section class="section bg-transparent">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
          Science-Backed Benefits of <span class="gold-gradient">Himalayan Shilajit</span>
        </h2>
        <p class="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
          Discover the powerful health benefits of authentic Himalayan Shilajit, backed by centuries of traditional use and modern scientific research. Each benefit is supported by the unique composition of fulvic acid, trace minerals, and bioactive compounds.
        </p>
      </div>

      <!-- Physical Benefits -->
      <div class="mb-16">
        <h3 class="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
          <span class="text-2xl">💪</span>
          Physical Performance & Energy
        </h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="benefit in physicalBenefits" :key="benefit.id" class="card p-6">
            <div class="flex items-start gap-4">
              <div class="text-3xl">{{ benefit.icon }}</div>
              <div class="flex-1">
                <h4 class="text-xl font-semibold text-white mb-2">{{ benefit.title }}</h4>
                <p class="text-white/80 mb-4 leading-relaxed">{{ benefit.description }}</p>
                <ul class="space-y-2">
                  <li v-for="detail in benefit.details" :key="detail" class="flex items-start gap-2 text-sm text-white/70">
                    <span class="text-green-400 mt-1">✓</span>
                    <span>{{ detail }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mental Benefits -->
      <div class="mb-16">
        <h3 class="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
          <span class="text-2xl">🧠</span>
          Cognitive & Mental Health
        </h3>
        <div class="grid md:grid-cols-1 gap-8">
          <div v-for="benefit in mentalBenefits" :key="benefit.id" class="card p-6">
            <div class="flex items-start gap-4">
              <div class="text-3xl">{{ benefit.icon }}</div>
              <div class="flex-1">
                <h4 class="text-xl font-semibold text-white mb-2">{{ benefit.title }}</h4>
                <p class="text-white/80 mb-4 leading-relaxed">{{ benefit.description }}</p>
                <ul class="grid sm:grid-cols-2 gap-2">
                  <li v-for="detail in benefit.details" :key="detail" class="flex items-start gap-2 text-sm text-white/70">
                    <span class="text-green-400 mt-1">✓</span>
                    <span>{{ detail }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Wellness Benefits -->
      <div class="mb-16">
        <h3 class="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
          <span class="text-2xl">🌿</span>
          Overall Wellness & Longevity
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="benefit in wellnessBenefits" :key="benefit.id" class="card p-6">
            <div class="text-center mb-4">
              <div class="text-4xl mb-3">{{ benefit.icon }}</div>
              <h4 class="text-lg font-semibold text-white mb-2">{{ benefit.title }}</h4>
              <p class="text-white/80 text-sm leading-relaxed">{{ benefit.description }}</p>
            </div>
            <ul class="space-y-2">
              <li v-for="detail in benefit.details" :key="detail" class="flex items-start gap-2 text-xs text-white/70">
                <span class="text-green-400 mt-1">✓</span>
                <span>{{ detail }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Scientific Note -->
      <div class="card p-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/20">
        <div class="text-center">
          <h3 class="text-xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
            <span>🔬</span>
            Scientific Foundation
          </h3>
          <p class="text-white/80 leading-relaxed max-w-4xl mx-auto">
            These benefits are supported by traditional Ayurvedic knowledge spanning over 3,000 years, combined with modern scientific research on fulvic acid, trace minerals, and adaptogenic compounds. Our Shilajit undergoes rigorous testing to ensure purity, potency, and bioavailability of these beneficial compounds.
          </p>
          <div class="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/70">
            <span class="flex items-center gap-1">
              <span class="text-green-400">✓</span>
              Third-party lab tested
            </span>
            <span class="flex items-center gap-1">
              <span class="text-green-400">✓</span>
              High fulvic acid content
            </span>
            <span class="flex items-center gap-1">
              <span class="text-green-400">✓</span>
              85+ trace minerals
            </span>
            <span class="flex items-center gap-1">
              <span class="text-green-400">✓</span>
              GMP certified facility
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
