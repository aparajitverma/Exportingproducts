export type Benefit = {
  id: string
  title: string
  description: string
  image: string
}

const benefits: Benefit[] = [
  {
    id: 'energy',
    title: 'Energy & Stamina',
    description: 'Supports sustained energy, reducing fatigue and improving physical performance.',
    image: '/src/assets/benefits/energy.svg',
  },
  {
    id: 'cognition',
    title: 'Cognitive Support',
    description: 'Enhances focus and mental clarity through nutrient-dense fulvic compounds.',
    image: '/src/assets/benefits/cognition.svg',
  },
  {
    id: 'recovery',
    title: 'Recovery & Immunity',
    description: 'Promotes recovery and supports immune resilience with minerals and antioxidants.',
    image: '/src/assets/benefits/recovery.svg',
  },
  {
    id: 'minerals',
    title: 'Mineral Replenishment',
    description: 'Rich source of trace minerals to help replenish essential electrolytes and micronutrients.',
    image: '/src/assets/benefits/minerals.svg',
  },
  {
    id: 'balance',
    title: 'Hormonal Balance & Vitality',
    description: 'Supports hormonal balance and overall vitality through adaptogenic properties.',
    image: '/src/assets/benefits/balance.svg',
  },
  {
    id: 'wellness',
    title: 'Daily Wellness',
    description: 'A daily supplement option to support general wellbeing and longevity.',
    image: '/src/assets/benefits/wellness.svg',
  },
]

export default benefits
