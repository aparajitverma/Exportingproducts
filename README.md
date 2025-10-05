# Himalayan Shilajit - Premium Export Website

A professional, modern website for exporting premium Himalayan Shilajit products worldwide. Built with Vue.js 3, TypeScript, and TailwindCSS for optimal performance and user experience.

## Features

### **Product Showcase**
- **4 Shilajit Variants**: Resin, Capsules, Powder, and Honey Sticks
- **Image Sliders**: Multiple product images with smooth navigation
- **Detailed Specifications**: Dosage, potency, and origin information
- **Benefits Breakdown**: Comprehensive health benefits with scientific backing

### **Manufacturing Excellence**
- **Video Gallery**: Real manufacturing and packaging process videos
- **Quality Assurance**: Lab testing and GMP certification highlights
- **Production Scale**: 3200kg resin production capabilities
- **Facility Tours**: State-of-the-art manufacturing plant showcase

### **User Experience**
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Smooth Animations**: Professional transitions and hover effects
- **Fast Loading**: Optimized images and efficient code structure
- **SEO Optimized**: Proper meta tags and semantic HTML

### **Contact & Communication**
- **Multiple Contact Methods**: Email, WhatsApp, and contact form
- **Floating WhatsApp**: Always-accessible chat button
- **Detailed Contact Form**: Inquiry categorization and validation
- **B2B Focus**: Bulk order and export inquiry support

## Tech Stack

- **Frontend**: Vue 3.5.17 + TypeScript + Composition API
- **Styling**: TailwindCSS 3.4.11 with custom components
- **Build Tool**: Vite 7 for fast development and optimized builds
- **Testing**: Vitest + Vue Test Utils
- **Code Quality**: ESLint 9 + Prettier
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/aparajitverma/Exportingproducts.git
cd Exportingproducts

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/           # Vue components
│   ├── Benefits.vue     # Health benefits section
│   ├── ContactSection.vue # Contact form and information
│   ├── HowToUse.vue     # Usage instructions for all variants
│   ├── ImageSlider.vue  # Product image carousel
│   ├── NavBar.vue       # Navigation header
│   ├── ShilajitVideos.vue # Manufacturing videos
│   ├── VideoGallery.vue # Video display component
│   ├── VideoModal.vue   # Video lightbox
│   └── WhatsAppFloat.vue # Floating WhatsApp button
├── data/                # Data files
│   └── variants.ts      # Product variant information
├── assets/              # Static assets
├── main.ts             # Application entry point
└── App.vue             # Root component

public/
├── images/             # Product and marketing images
├── videos/             # Manufacturing and process videos
└── index.html          # HTML template

```sh
npm run lint
```
