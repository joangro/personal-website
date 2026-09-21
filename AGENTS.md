# Repository Guidelines

## Project Structure & Module Organization

This repository is a Vue 2 single-page personal website using Vuetify, Vue Router, Vuex, and Vue Chart.js.

- `src/main.js` bootstraps the application; `src/App.vue`, `src/Router.js`, and `src/Store.js` define the app shell, routes, and shared state.
- `src/views/` contains route-level pages (`Home.vue`, `About.vue`, and `Contact.vue`). Reusable UI belongs in `src/components/`.
- `src/plugins/vuetify.js` contains Vuetify setup, while `src/style.css` holds global styles.
- `src/assets/` stores imported images and branding; `public/` contains static files such as `index.html` and the favicon.
- `app.yaml` and `.gcloudignore` control Google App Engine deployment. Generated `dist/` output is not committed.

## Build, Test, and Development Commands

Run `npm install` after cloning. The main development commands are:

- `npm run serve` — start the Vue CLI development server with hot reload.
- `npm run build` — create the production bundle in `dist/`.
- `npm run lint` — run the configured ESLint/Prettier checks and fixes.
- `gcloud app deploy app.yaml` — deploy the previously built `dist/` site to Google App Engine.

There is no `test` script or test suite configured in `package.json`; do not document `npm run test` as an available command until tests are added.

## Coding Style & Naming Conventions

Follow the existing Vue CLI ESLint configuration and Prettier formatting. Use two-space indentation, semicolons where Prettier adds them, and single-file Vue components with `<template>`, `<script>`, and `<style>` sections as needed. Name components and views in PascalCase (`ContactInfo.vue`, `Home.vue`); use clear camelCase for JavaScript variables and methods. Keep reusable UI in components rather than duplicating it in views.

## Testing Guidelines

No automated tests or coverage threshold currently exist. Before submitting changes, run `npm run lint`, `npm run build`, and manually verify affected routes and responsive behavior with `npm run serve`.

## Commit & Pull Request Guidelines

Recent history uses short, plain-English summaries such as `Added link to blog` and `UI Fixes`, without a strict conventional-commit prefix. Keep commits focused and describe the user-visible change. Pull requests should explain the change, list verification commands, link relevant issues when applicable, and include before/after screenshots or a short recording for visual changes.

## Configuration & Integration Notes

The site reads public GitHub data through the GitHub API, which has a low unauthenticated rate limit. Avoid unnecessary request increases, and consider the existing loading/error states when changing API-backed components.
