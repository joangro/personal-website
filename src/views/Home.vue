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
          <span>· Production &amp; Platform Engineering</span>
        </p>
        <p class="hero-summary">
          {{ profile.summary }}
        </p>
        <div class="hero-actions">
          <a
            class="button button-primary"
            :href="profile.cv"
            target="_blank"
            rel="noopener"
            >Read my CV <span aria-hidden="true">↗</span></a
          >
          <a class="button button-secondary" :href="`mailto:${profile.email}`"
            >Get in touch</a
          >
        </div>
      </div>
      <div class="hero-note" aria-label="Current focus">
        <span class="pulse" aria-hidden="true" />
        <p>
          Currently building resilient capacity and serving systems at global
          scale.
        </p>
      </div>
    </section>

    <section class="impact section-wrap" aria-labelledby="impact-title">
      <div class="section-heading">
        <p class="eyebrow">Selected impact</p>
        <h2 id="impact-title">Operational depth, measured in outcomes.</h2>
      </div>
      <div class="impact-grid">
        <article v-for="item in impact" :key="item.label" class="impact-card">
          <p class="card-label">
            {{ item.label }}
          </p>
          <p class="impact-value">
            {{ item.value }}
          </p>
          <p>{{ item.detail }}</p>
        </article>
      </div>
    </section>

    <section
      id="experience"
      class="section-wrap section-block"
      aria-labelledby="experience-title"
    >
      <div class="section-heading">
        <p class="eyebrow">Experience</p>
        <h2 id="experience-title">Building systems people can depend on.</h2>
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
            <p>{{ role.description }}</p>
            <ul v-if="role.highlights">
              <li v-for="highlight in role.highlights" :key="highlight">
                {{ highlight }}
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
        <p class="eyebrow">Technical strengths</p>
        <h2 id="strengths-title">
          The tools and practices behind reliable production.
        </h2>
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
        <p class="eyebrow">Selected work</p>
        <h2 id="projects-title">A few things I have built and explored.</h2>
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
      <h2 id="contact-title">Let’s talk about reliable systems.</h2>
      <p>
        For SRE, production engineering, and platform engineering opportunities,
        reach me by email or on LinkedIn.
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
      <span>© {{ new Date().getFullYear() }} {{ profile.name }}</span
      ><span>{{ profile.phone }}</span>
    </footer>
  </div>
</template>

<script setup>
import { profile, impact, experience, strengths, projects } from "../content";
</script>
