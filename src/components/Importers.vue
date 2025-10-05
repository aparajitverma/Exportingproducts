<script setup lang="ts">
function openImporterChat() {
  window.dispatchEvent(new CustomEvent('open-chat-with', { detail: { variant: '', message: 'Import Inquiry: Please provide MOQ, lead times, custom labelling options, and pricing.' } }))
}
</script>

<template>
  <section id="importers" class="section">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-8 items-start">
        <div class="space-y-4">
          <h2>For International Importers</h2>
          <p class="text-white/80 max-w-xl">Partner with us for reliable supply of premium Himalayan Shilajit. We specialise in export-ready packaging, custom labelling, and transparent documentation to accelerate customs clearance and market entry.</p>

          <ul class="mt-4 space-y-3 text-white/80">
            <li class="flex gap-3 items-start">
              <div class="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center">📦</div>
              <div>
                <strong>Custom labelling & private label</strong>
                <div class="text-sm text-white/70">Design, label, and packaging options to match your market regulations and branding.</div>
              </div>
            </li>

            <li class="flex gap-3 items-start">
              <div class="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center">⏱️</div>
              <div>
                <strong>Reliable lead times</strong>
                <div class="text-sm text-white/70">Typical lead time: 3–6 weeks depending on order size. Expedited options available for priority shipments.</div>
              </div>
            </li>

            <li class="flex gap-3 items-start">
              <div class="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center">🧪</div>
              <div>
                <strong>Comprehensive testing & traceability</strong>
                <div class="text-sm text-white/70">COA, heavy metal screening, pesticide residues, and microbiological testing available for each batch. Full traceability with batch numbers.</div>
              </div>
            </li>

            <li class="flex gap-3 items-start">
              <div class="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center">🌍</div>
              <div>
                <strong>Export compliance & documentation</strong>
                <div class="text-sm text-white/70">We provide commercial invoice, packing list, export health certificates, and any required origin declarations to support customs.</div>
              </div>
            </li>

            <li class="flex gap-3 items-start">
              <div class="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center">📦</div>
              <div>
                <strong>Flexible MOQ & scalable supply</strong>
                <div class="text-sm text-white/70">MOQ options for trial orders and scale-up plans for consistent monthly shipments.</div>
              </div>
            </li>

            <li class="flex gap-3 items-start">
              <div class="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center">🤝</div>
              <div>
                <strong>Logistics support</strong>
                <div class="text-sm text-white/70">Assistance with freight-forwarding, CIF/FOB terms, and preferred carrier partnerships to reduce transit times and costs.</div>
              </div>
            </li>
          </ul>

          <div class="mt-6 flex gap-3">
            <button class="btn-primary" @click="openImporterChat">Request quote</button>
            <a class="btn-outline" target="_blank" href="https://cdn.builder.io/o/assets%2Fd628dd0e07e34987946ab9a9d647007f%2Faaa6b5bb22be46b0a18f2b9384c1fb25?alt=media&token=3495ea5a-6146-41aa-92d8-2a07ad938d9c&apiKey=d628dd0e07e34987946ab9a9d647007f">Download spec sheet</a>
          </div>
        </div>

        <div class="card p-6">
          <h3>Why work with us</h3>
          <ul class="mt-4 space-y-3 text-white/80">
            <li>• GMP-compliant processing and supplier audits</li>
            <li>• Third-party COA and batch traceability</li>
            <li>• Private label & custom packaging solutions</li>
            <li>• Dedicated account manager & export support</li>
            <li>• Insurance-backed shipments on request</li>
          </ul>

          <div class="mt-6">
            <p class="text-sm text-white/70">Prefer a call? Provide your preferred time and we'll arrange a trade discussion with our export manager.</p>
            <div class="mt-4">
              <button class="btn-primary" @click="openImporterChat">Contact our export team</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
