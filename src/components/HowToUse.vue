<script setup lang="ts">
interface UsageGuide {
  variant: string
  form: string
  dosage: string
  preparation: string[]
  timing: string[]
  tips: string[]
  icon: string
}

const usageGuides: UsageGuide[] = [
  {
    variant: 'Pure Himalayan Shilajit Resin',
    form: 'Resin',
    dosage: '300-500 mg (pea-sized portion)',
    preparation: [
      'Take a pea-sized portion (300-500 mg) using the included spoon',
      'Dissolve in warm water, milk, or herbal tea',
      'Stir well until completely dissolved (2-3 minutes)',
      'Drink immediately for best absorption'
    ],
    timing: [
      'Best taken on empty stomach in the morning',
      'Wait 30 minutes before eating',
      'Can be taken with evening meal if preferred',
      'Consistent daily timing recommended'
    ],
    tips: [
      'Start with smaller dose (200mg) for first week',
      'Store in cool, dry place away from sunlight',
      'Use wooden or plastic spoon (avoid metal)',
      'Taste is naturally bitter - mix with honey if needed'
    ],
    icon: '🍯'
  },
  {
    variant: 'Shilajit Capsules',
    form: 'Capsules',
    dosage: '1-2 capsules (500 mg each)',
    preparation: [
      'Take 1-2 capsules with a full glass of water',
      'No mixing or preparation required',
      'Swallow whole - do not break or chew',
      'Can be taken with or without food'
    ],
    timing: [
      'Take with breakfast for sustained energy',
      'Or 30 minutes before workout',
      'Evening dose can be taken with dinner',
      'Maintain 8-12 hour gap between doses'
    ],
    tips: [
      'Most convenient for travel and busy lifestyles',
      'Standardized dosage ensures consistency',
      'Store in original container with desiccant',
      'Check expiry date before consumption'
    ],
    icon: '💊'
  },
  {
    variant: 'Shilajit Powder',
    form: 'Powder',
    dosage: '1/4 to 1/2 teaspoon (500-1000 mg)',
    preparation: [
      'Measure 1/4 to 1/2 teaspoon using provided scoop',
      'Mix into smoothies, protein shakes, or yogurt',
      'Can be stirred into warm water or milk',
      'Blend well to avoid clumping'
    ],
    timing: [
      'Perfect for morning smoothies',
      'Pre-workout shake 30 minutes before exercise',
      'Post-workout for recovery support',
      'Can be divided into 2 smaller doses daily'
    ],
    tips: [
      'Mixes easily with liquids and foods',
      'Great for customizing dosage',
      'Store in airtight container',
      'Sift powder if clumping occurs'
    ],
    icon: '🥤'
  },
  {
    variant: 'Shilajit Honey Sticks',
    form: 'Honey Sticks',
    dosage: '1-2 sticks (200 mg Shilajit each)',
    preparation: [
      'Tear open stick at perforated edge',
      'Consume directly or mix with warm water',
      'Can be added to tea or warm milk',
      'No additional preparation needed'
    ],
    timing: [
      'Perfect for on-the-go energy boost',
      'Take before important meetings or workouts',
      'Great as afternoon energy pick-me-up',
      'Can be taken anytime throughout the day'
    ],
    tips: [
      'Most convenient and portable option',
      'Pleasant honey taste masks bitterness',
      'Individual packaging ensures freshness',
      'Perfect for travel and outdoor activities'
    ],
    icon: '🍯'
  }
]

const generalGuidelines = [
  {
    title: 'Cycling Protocol',
    description: 'Take for 6-8 weeks, then break for 1-2 weeks',
    icon: '🔄'
  },
  {
    title: 'Hydration',
    description: 'Drink plenty of water throughout the day',
    icon: '💧'
  },
  {
    title: 'Consistency',
    description: 'Take at the same time daily for best results',
    icon: '⏰'
  },
  {
    title: 'Quality Check',
    description: 'Authentic Shilajit should dissolve completely in water',
    icon: '✅'
  }
]
</script>

<template>
  <section class="section">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
          How to Use <span class="gold-gradient">Himalayan Shilajit</span>
        </h2>
        <p class="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
          Comprehensive usage guide for all our Shilajit variants. Follow these detailed instructions to maximize the benefits and ensure safe, effective consumption.
        </p>
      </div>

      <!-- Usage Guides for Each Variant -->
      <div class="space-y-12 mb-16">
        <div v-for="guide in usageGuides" :key="guide.variant" class="card p-8">
          <div class="flex items-start gap-6 mb-6">
            <div class="text-4xl">{{ guide.icon }}</div>
            <div>
              <h3 class="text-2xl font-semibold text-white mb-2">{{ guide.variant }}</h3>
              <div class="flex items-center gap-4 text-white/70">
                <span class="bg-white/10 px-3 py-1 rounded-full text-sm">{{ guide.form }}</span>
                <span class="text-lg font-medium text-amber-400">{{ guide.dosage }}</span>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Preparation -->
            <div>
              <h4 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span class="text-blue-400">🧪</span>
                Preparation
              </h4>
              <ul class="space-y-2">
                <li v-for="step in guide.preparation" :key="step" class="flex items-start gap-2 text-sm text-white/80">
                  <span class="text-blue-400 mt-1">•</span>
                  <span>{{ step }}</span>
                </li>
              </ul>
            </div>

            <!-- Timing -->
            <div>
              <h4 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span class="text-green-400">⏰</span>
                Best Timing
              </h4>
              <ul class="space-y-2">
                <li v-for="time in guide.timing" :key="time" class="flex items-start gap-2 text-sm text-white/80">
                  <span class="text-green-400 mt-1">•</span>
                  <span>{{ time }}</span>
                </li>
              </ul>
            </div>

            <!-- Tips -->
            <div>
              <h4 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span class="text-amber-400">💡</span>
                Pro Tips
              </h4>
              <ul class="space-y-2">
                <li v-for="tip in guide.tips" :key="tip" class="flex items-start gap-2 text-sm text-white/80">
                  <span class="text-amber-400 mt-1">•</span>
                  <span>{{ tip }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- General Guidelines -->
      <div class="card p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/20 mb-12">
        <h3 class="text-2xl font-semibold text-white mb-8 text-center">General Guidelines for All Variants</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="guideline in generalGuidelines" :key="guideline.title" class="text-center">
            <div class="text-3xl mb-3">{{ guideline.icon }}</div>
            <h4 class="text-lg font-semibold text-white mb-2">{{ guideline.title }}</h4>
            <p class="text-white/80 text-sm">{{ guideline.description }}</p>
          </div>
        </div>
      </div>

      <!-- Safety & Precautions -->
      <div class="card p-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
        <h3 class="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <span>⚠️</span>
          Important Safety Information
        </h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-lg font-medium text-white mb-3">Precautions</h4>
            <ul class="space-y-2 text-white/80 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">•</span>
                <span>Consult healthcare provider if pregnant, nursing, or on medication</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">•</span>
                <span>Start with lower doses to assess tolerance</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">•</span>
                <span>Discontinue use if any adverse reactions occur</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">•</span>
                <span>Not recommended for children under 18</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-medium text-white mb-3">Storage Instructions</h4>
            <ul class="space-y-2 text-white/80 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-orange-400 mt-1">•</span>
                <span>Store in cool, dry place away from direct sunlight</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-400 mt-1">•</span>
                <span>Keep container tightly sealed when not in use</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-400 mt-1">•</span>
                <span>Avoid exposure to moisture and heat</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-400 mt-1">•</span>
                <span>Use within 2 years of opening for best potency</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
