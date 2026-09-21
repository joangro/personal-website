<template>
  <div id="top">
    <section class="hero section-wrap" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">{{ profile.location }} · Google</p>
        <h1 id="hero-title">
          {{ profile.name }}
        </h1>
        <p class="hero-role">
          {{ profile.role }}
          <span>· Software Engineer</span>
        </p>
        <div class="hero-summary">
          <p
            v-for="(paragraph, index) in profile.summary.split('\n\n')"
            :key="index"
          >
            {{ paragraph }}
          </p>
        </div>
        <div class="hero-actions">
          <a
            class="button button-primary"
            :href="profile.cv"
            target="_blank"
            rel="noopener"
            >Read my CV <span aria-hidden="true">↗</span></a
          >
          <a class="button button-secondary" href="#contact">Get in touch</a>
        </div>
      </div>
      <div class="hero-media">
        <div class="avatar-bubble">
          <img :src="profile.avatar" :alt="profile.name" />
        </div>
      </div>
    </section>

    <section
      id="experience"
      class="section-wrap section-block"
      aria-labelledby="experience-title"
    >
      <div class="section-heading">
        <p class="eyebrow">Experience</p>
        <h2 id="experience-title">Some of the stuff I’ve worked on.</h2>
      </div>
      <div class="timeline">
        <article
          v-for="role in experience"
          :key="`${role.company}-${role.title}`"
          class="timeline-item"
        >
          <div class="timeline-meta">
            <strong>{{ role.company }}</strong
            ><span>{{ role.dates }}</span
            ><span>{{ role.location }}</span>
          </div>
          <div class="timeline-body">
            <h3>{{ role.title }}</h3>
            <p
              v-for="(paragraph, index) in role.description.split('\n\n')"
              :key="index"
              v-html="paragraph"
            ></p>
            <ul v-if="role.highlights">
              <li v-for="highlight in role.highlights" :key="highlight.label">
                <strong>{{ highlight.label }}:</strong>
                <span v-html="highlight.text"></span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section
      id="strengths"
      class="section-wrap section-block shaded"
      aria-labelledby="strengths-title"
    >
      <div class="section-heading">
        <p class="eyebrow">Skills</p>
        <h2 id="strengths-title">Tools and tech I’ve worked with.</h2>
      </div>
      <div class="strength-grid">
        <article
          v-for="group in strengths"
          :key="group.label"
          class="strength-card"
        >
          <h3>{{ group.label }}</h3>
          <div class="tag-list">
            <span v-for="item in group.items" :key="item">{{ item }}</span>
          </div>
        </article>
      </div>
    </section>

    <section
      id="projects"
      class="section-wrap section-block"
      aria-labelledby="projects-title"
    >
      <div class="section-heading">
        <p class="eyebrow">Projects</p>
        <h2 id="projects-title">Things I've built outside of work.</h2>
      </div>
      <div class="project-grid">
        <a
          v-for="project in projects"
          :key="project.name"
          class="project-card"
          :href="project.link"
          target="_blank"
          rel="noopener"
          ><div>
            <p class="card-label">{{ project.tags.join(" · ") }}</p>
            <h3>{{ project.name }} <span aria-hidden="true">↗</span></h3>
            <p v-if="project.education">{{ project.education }}</p>
            <p>{{ project.description }}</p>
          </div></a
        >
      </div>
    </section>

    <section
      id="contact"
      class="contact section-wrap"
      aria-labelledby="contact-title"
    >
      <p class="eyebrow">Contact</p>
      <h2 id="contact-title">Let's connect.</h2>
      <p>
        Always happy to chat about SRE, distributed systems, or new
        opportunities. Feel free to drop me an email or find me on LinkedIn.
      </p>
      <div class="contact-links">
        <a class="button button-primary" :href="`mailto:${profile.email}`"
          >{{ profile.email }} <span aria-hidden="true">↗</span></a
        ><a
          class="text-link"
          :href="profile.linkedin"
          target="_blank"
          rel="noopener"
          >LinkedIn ↗</a
        ><a
          class="text-link"
          :href="profile.github"
          target="_blank"
          rel="noopener"
          >GitHub ↗</a
        >
      </div>
    </section>
    <footer class="site-footer section-wrap">
      <span>© {{ new Date().getFullYear() }} {{ profile.name }}</span>
    </footer>
    <button
      v-show="showBackToTop"
      class="back-to-top"
      type="button"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      <span aria-hidden="true">↑</span>
    </button>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { profile, experience, strengths, projects } from "../content";

const showBackToTop = ref(false);

const updateBackToTopVisibility = () => {
  showBackToTop.value = window.scrollY > 500;
};

const scrollToTop = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
};

onMounted(() => {
  updateBackToTopVisibility();
  window.addEventListener("scroll", updateBackToTopVisibility, {
    passive: true,
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateBackToTopVisibility);
});
</script>
