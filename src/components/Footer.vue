<script setup lang="ts"></script>

<template>
  <footer class="border-t border-white/10">
    <div class="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70 text-sm">
      <p>© {{ new Date().getFullYear() }} Himalayan Shilajit. All rights reserved.</p>
      <div class="flex items-center gap-5">
        <a class="hover:text-white" href="#about">About</a>
        <a class="hover:text-white" href="#variants">Variants</a>
        <a class="hover:text-white" href="#contact">Contact</a>
      </div>
    </div>
  </footer>
</template>
