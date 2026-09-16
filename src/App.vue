<template>
  <div class="site-shell">
    <header class="site-header">
      <a class="wordmark" href="/#top" aria-label="Joan Grau Noël home"
        >JG<span>.</span></a
      >
      <nav class="main-nav" aria-label="Main navigation">
        <a href="/#experience">Experience</a>
        <a href="/#strengths">Strengths</a>
        <a href="/#projects">Projects</a>
        <a href="/#contact">Contact</a>
      </nav>
      <a class="header-cv" :href="profile.cv" target="_blank" rel="noopener"
        >View CV <span aria-hidden="true">↗</span></a
      >
    </header>
    <main><router-view /></main>
  </div>
</template>

<script setup>
import { profile } from "./content";
</script>
