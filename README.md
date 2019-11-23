# Personal website

Watch it live here: www.graunoel.com

Personal website made with [Vue](https://vuejs.org/) + [Vuetify](https://vuetifyjs.com/en/) + [Vue Router](https://router.vuejs.org/).

It's also using the [GitHub API](https://developer.github.com/v3/) to fetch information about my account repositories and display them on the site; finally it also uses [Vue Chart.js](https://vue-chartjs.org/z) to display interactive graphs on the site.

## Local project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## Deploying to [Google App Engine](https://cloud.google.com/appengine/)

After building for prod using `npm run build`, make sure to have the right `.gcloudignore` file as in this repo. You can check toe `app.yaml` file to see which are the files deployed in GAE.
