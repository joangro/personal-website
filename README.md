# Personal website

Watch it live here: www.graunoel.com

Personal website made with [Vue](https://vuejs.org/) + [Vite](https://vite.dev/) + [Vue Router](https://router.vuejs.org/).

The site uses a curated content model so the portfolio and CV stay consistent, and it avoids runtime GitHub API requests for the main page.

## Local project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Builds for production
```
npm run build
```

### Lints files
```
npm run lint
```

### Checks formatting
```
npm run format:check
```

## Deploying to [Google App Engine](https://cloud.google.com/appengine/)

After building for prod using `npm run build`, make sure to have the right `.gcloudignore` file as in this repo. You can check the `app.yaml` file to see which are the files deployed in GAE.

The `npm run build` command compiles the files into `dist/`, and all of them are uploaded to the App Engine service. To do so, run:

`gcloud app deploy app.yaml` 

The Node version is pinned in `.nvmrc`. Use Node 24 LTS for local development and deployment.
