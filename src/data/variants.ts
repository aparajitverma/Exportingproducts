export type Variant = {
  slug: string
  name: string
  form: 'Resin' | 'Capsules' | 'Powder' | 'Honey Sticks'
  description: string
  potency?: string
  fulvic?: string
  origin?: string
  benefits: string[]
  image: string
  images?: string[] // Multiple images for slider
}

const variants: Variant[] = [
  {
    slug: 'pure-resin',
    name: 'Pure Himalayan Shilajit Resin',
    form: 'Resin',
    description:
      'Traditional, full-spectrum resin with rich fulvic acid and trace minerals. Carefully purified at low heat for maximum bioavailability.',
    potency: '300–500 mg per serving',
    fulvic: 'High fulvic acid content',
    origin: 'High-altitude Himalayas',
    benefits: ['Energy & stamina', 'Cognitive support', 'Mineral replenishment'],
    image:
      '/images/ayurvedic-pure-shilajit-resin-20-gm-1000x1000.png',
    images: [
      '/images/ayurvedic-pure-shilajit-resin-20-gm-1000x1000.png',
      '/images/WhatsApp Image 2024-09-26 at 8.34.00 PM.jpeg'
    ],
  },
  {
    slug: 'capsules',
    name: 'Shilajit Capsules',
    form: 'Capsules',
    description:
      'Convenient encapsulated shilajit for on-the-go routines. Standardized for consistency and purity.',
    potency: '500 mg per capsule',
    fulvic: 'Standardized extract',
    origin: 'Himalayan source material',
    benefits: ['Daily wellness', 'Easy dosing', 'Travel-friendly'],
    image:
      '/images/WhatsApp Image 2025-09-03 at 7.00.25 PM1.jpeg',
  },
  {
    slug: 'powder',
    name: 'Shilajit Powder',
    form: 'Powder',
    description:
      'Fine powder ideal for mixing into smoothies or warm beverages. Balanced profile with broad mineral content.',
    potency: 'As directed (scoop included)',
    fulvic: 'Naturally occurring',
    origin: 'Himalayan rock exudate',
    benefits: ['Mixes easily', 'Versatile use', 'Balanced minerals'],
    image:
      '/images/61lmi95rocl-1000x1000.png',
  },
  {
    slug: 'honey-sticks',
    name: 'Shilajit Honey Sticks',
    form: 'Honey Sticks',
    description: 'Single-serve honey-infused sticks combining pure Shilajit extract with natural Himalayan honey for convenient dosing and pleasant taste. Perfect for travel and daily routines.',
    potency: '200 mg Shilajit per stick',
    fulvic: 'Moderate-high fulvic acid',
    origin: 'Himalayan sourced extract',
    benefits: ['Convenient single-serve', 'Pleasant honey carrier', 'On-the-go energy & focus'],
    image: '/images/WhatsApp Image 2025-09-03 at 7.00.24 PM1.jpeg',
    images: [
      '/images/WhatsApp Image 2025-09-03 at 7.00.24 PM1.jpeg',
      '/images/WhatsApp Image 2025-09-03 at 7.01.49 PM.jpeg'
    ],
  },
]

export default variants
