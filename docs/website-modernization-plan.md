# Website modernization plan

## Goal

Turn the personal website into a small, reliable, recruiter-friendly portfolio for SRE, Production Engineer, and Platform Engineer roles at trading and quant firms.

The site should be simple to scan, visually engaging, mobile-friendly, accessible, and consistent with the confirmed CV.

## Status snapshot — 15 September 2026

The foundation and first visual implementation are complete locally. The project has a clean Node 24 installation, a Vue 3/Vite production build, zero reported npm audit vulnerabilities, and a CV-aligned recruiter-facing homepage. No production deployment has been made.

Next work is review and release: inspect the page on desktop and mobile, check the direct `/about` and `/contact` routes in the deployed environment, add automated checks to CI, and deploy after the visual/content review.

## Current state

- The site has been migrated to Vue 3, Vite, Vue Router 4, and a small custom CSS/component system.
- The project deployment configuration now targets the Node.js 24 App Engine runtime.
- The old Vue CLI/Webpack, Vuetify, Vuex, Axios, Chart.js, and legacy Babel configuration have been removed.
- The CV source is `docs/cv/joan-grau-cv.md`; the website PDF is `public/Joan-Grau-CV.pdf`.
- The visible website now presents the current Google SRE role and recruiter-focused impact sections.
- The application uses a shared `src/content.js` model and curated projects instead of runtime GitHub API requests.

### Completed in the first implementation pass

- Vue 3/Vite migration completed; `npm run build` succeeds.
- Node 24 pinned in `.nvmrc`; `npm run dev`, `npm run build`, `npm run lint`, and formatting checks are documented.
- App Engine routing updated for the Vite SPA, assets, and CV PDF.
- `npm audit` and `npm audit --omit=dev` report zero vulnerabilities after the dependency update.
- Recruiter-focused responsive layout implemented with accessible navigation, focus styles, reduced-motion support, and mobile breakpoints.
- CV-aligned profile, impact, experience, skills, projects, and contact content added to `src/content.js`.
- Local Vite smoke check verified the app shell and `/Joan-Grau-CV.pdf` return successful HTTP responses.

## Target architecture

- Vue 3 with Vite. **Completed.**
- Node.js 24 LTS, pinned with an explicit version file and documented package-manager requirements. **Completed.**
- A small custom component and CSS system instead of Vuetify. **Completed.**
- One structured content source for confirmed profile, experience, skills, achievements, links, and projects. **Initial version completed.**
- Generated CV Markdown/PDF and website sections derived from the shared content where practical.
- Static, curated project cards instead of a runtime GitHub repository crawl. **Completed.**
- Static deployment compatible with the selected supported App Engine runtime. **Configuration updated; deploy preview remains.**

## Phase 1: baseline and dependency audit — complete locally

1. Record the current install, build, lint, dependency, and deployment behavior.
2. Run `npm audit` and review findings by package, severity, reachability, and available fixes.
3. Inventory direct and transitive dependencies, including abandoned packages.
4. Add a supported Node version file and document the package manager.
5. Decide whether to migrate in place or create a clean Vue 3/Vite application shell. Prefer a clean shell if the migration would preserve too much obsolete configuration.

Completion checks:

- The current state and known risks are recorded.
- No vulnerability is dismissed solely because it is inconvenient to upgrade.
- The migration path and rollback point are clear.

## Phase 2: modernize the toolchain — complete locally; CI remains

1. Move to Vue 3 and Vite.
2. Replace Vue Router and Vuex with current compatible versions; use a store only where shared state is still needed.
3. Replace or remove Axios where native `fetch` is sufficient.
4. Replace `babel-eslint`, old ESLint integrations, and Prettier with current tooling.
5. Remove the OpenSSL legacy-provider workaround.
6. Update `package.json`, the lockfile, scripts, documentation, and deployment configuration together.
7. Update App Engine from the Node 12 runtime to a currently supported runtime, or move to a static hosting target if that better fits the application.
8. Add a production build check and dependency audit to continuous integration. **Remaining.**

Completion checks:

- A clean install works on the pinned Node version.
- Development and production builds work without compatibility flags.
- `npm audit` has no unresolved high-severity production vulnerabilities without a documented reason.
- The generated `dist/` output serves the SPA and the CV PDF correctly.

## Phase 3: establish shared content — initial version complete

Create a structured content module containing only confirmed facts:

- Name, location, email, LinkedIn, GitHub, and CV link.
- Current Google SRE / Software Engineer role and dates.
- Google Technical Solutions Engineer and AWS experience and dates.
- Primary languages: Python, Go, and C++; additional languages: Java and Kotlin.
- Approximately 100 incidents overall, leading the majority.
- Approximately 20 major customer-facing outages led, included within the incident total.
- Approximately 60% reduction in p90 debug and resolution time for incidents investigated using tracing.
- Approximately 20–30% reduction in associated operational toil from quota automation.
- Distributed systems, networking, capacity, failover, observability, and production engineering experience.
- Education and thesis project.

Content constraints:

- Do not claim trading or quant employment.
- Do not claim Linux internals expertise.
- Do not claim projected fleet savings as delivered results.
- Keep the incident and outage counts scoped exactly as confirmed.
- Retain the confirmed Google role overlap without inventing an explanation.

Completion checks:

- Website and CV use the same dates, metrics, role titles, and links.
- A content check fails on accidental reintroduction of excluded claims.

## Phase 4: redesign the interface — initial version complete; visual review remains

Use a restrained technical portfolio style: deep navy, warm white, a teal accent, readable typography, generous spacing, and subtle motion.

Page structure:

1. **Hero:** name, current role, London location, one-sentence positioning, and clear CV/contact actions.
2. **Selected impact:** incident leadership, tracing adoption, quota automation, and capacity/failover work.
3. **Experience:** concise role summaries with dates and links where useful.
4. **Technical strengths:** grouped facts rather than numeric charts.
5. **Selected projects:** a small curated set with purpose, technologies, and source links.
6. **About:** short background and education context.
7. **Contact:** email, LinkedIn, GitHub, and CV download.

Interaction and accessibility requirements:

- Responsive layout from small phones through large screens.
- Visible keyboard focus and logical heading hierarchy.
- Sufficient color contrast and readable line lengths.
- Reduced-motion support.
- Clear loading, empty, and error states for any remote data.
- Metadata for search and social sharing.

Completion checks:

- A recruiter can identify role, location, strengths, and contact path without scrolling far.
- A hiring manager can find concrete systems and reliability evidence quickly.
- The site remains understandable when JavaScript or the GitHub API is unavailable.

## Phase 5: projects and external data — curated version complete

Replace the live GitHub repository crawl with curated projects in the shared content source. Each project should include:

- Name and one-line purpose.
- Relevant technologies.
- Why it demonstrates useful engineering ability.
- Repository or thesis link.

If live GitHub data is retained, use one request, cache it, set a timeout, handle rate limits, and render a useful fallback.

## Phase 6: verification and release — pending final review and deployment

1. Run lint, type or compile checks where applicable, production build, dependency audit, and content consistency checks.
2. Test the home, `/about`, `/contact`, CV, external links, and invalid routes.
3. Test keyboard navigation, reduced motion, mobile layout, and a representative desktop layout.
4. Inspect the generated PDF visually and verify selectable text and links.
5. Run a production preview and record a rollback artifact.
6. Deploy only after the local preview matches the intended design.

## Working rule

Keep this file updated when a phase is completed, a decision changes, or a new content constraint is confirmed. The CV editorial notes remain the source of truth for factual corrections until the shared content module exists.
