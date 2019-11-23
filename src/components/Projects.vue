<template>
  <v-container fluid class="background-color" id="projects">
    <v-flex class="projects-wrapper">
      <v-layout align-center column mt-10 mx-15 mb-2>
        <v-flex
          class="display-3 font-weight-thin white--text text-xs-center mb-1"
          >Projects</v-flex
        >
      </v-layout>
      <v-divider></v-divider>
      <v-flex class="projects-text">
        <p class="text-center mt6">
          I host most of the projects I make publicly on my personal
          <a href="https://github.com/joangro">GitHub page</a>. Here you can see
          all of them, fetched using the
          <a href="https://developer.github.com/">GitHub API</a>.
        </p>
        <p class="text-center">
          Click on each card to visit the repository, and see more details!
        </p>
      </v-flex>
      <v-layout align-center justify-center class="data-iterator-wrapper">
        <v-flex align-center>
          <!-- If there is still no data to display, show indeterminate progress bar-->
          <v-flex class="loading-bar-wrapper" v-if="loading">
            <p style="text-align:center">Fetching data from GitHub API...</p>
            <v-progress-linear indeterminate></v-progress-linear>
          </v-flex>
          <!-- Otherwise, fill up the data iterator with the GitHub API data -->
          <v-data-iterator
            v-else
            :items="repos"
            :items-per-page.sync="itemsPerPage"
            :footer-props="{ itemsPerPageOptions }"
            loading
          >
            <template v-slot:default="props">
              <v-row>
                <v-col
                  v-for="item in props.items"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="4"
                >
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                      @click="redirect_to_url(item.link)"
                      :elevation="hover ? 12 : 2"
                      class="background-color-clearer"
                    >
                      <v-card-title class="justify-center" mb-2
                        ><h4>{{ item.name }}</h4></v-card-title
                      >
                      <v-card-text class="justify-center">
                        <span v-for="(item, key) in item.languages">
                          <v-chip class="chip-wrapper" v-if="key == 'Python'">
                            <v-icon input-value="Python" left
                              >mdi-language-python</v-icon
                            >
                            Python
                          </v-chip>
                          <v-chip class="chip-wrapper" v-if="key == 'Java'">
                            <v-icon left>mdi-language-java</v-icon>
                            Java
                          </v-chip>
                          <v-chip
                            class="chip-wrapper"
                            v-if="key == 'Dockerfile'"
                          >
                            <v-icon left>mdi-docker</v-icon>
                            Docker
                          </v-chip>
                          <v-chip class="chip-wrapper" v-if="key == 'Shell'">
                            <v-icon left>mdi-console-line</v-icon>
                            Shell
                          </v-chip>
                          <v-chip
                            class="chip-wrapper"
                            v-if="key == 'JavaScript'"
                          >
                            <v-icon left>mdi-nodejs</v-icon>
                            JavaScript/Node.js
                          </v-chip>
                          <v-chip class="chip-wrapper" v-if="key == 'MATLAB'">
                            <v-icon left>mdi-mdi-square-root</v-icon>
                            MATLAB
                          </v-chip>
                        </span>
                      </v-card-text>
                      <v-divider class="mx-4"></v-divider>
                      <v-card-text>
                        <div class="body-1">{{ item.description }}</div>
                      </v-card-text>
                      <v-flex v-if="item.stars > 0">
                        <v-divider class="mx-4"></v-divider>
                        <v-card-text>
                          <v-chip class="chip-wrapper" color="orange">
                            <v-icon left>mdi-star</v-icon>
                            {{ item.stars }}
                          </v-chip>
                        </v-card-text>
                      </v-flex>
                      <v-divider class="mx-4"></v-divider>
                      <v-card-text>
                        <div class="body-2">
                          Last updated: {{ item.created_at }}
                        </div>
                      </v-card-text>
                      <v-flex v-if="item.fork">
                        <v-divider class="mx-4"></v-divider>
                        <v-card-text>
                          <v-chip class="chip-wrapper" color="green">
                            <v-icon left>mdi-source-fork</v-icon>
                            Forked
                          </v-chip>
                        </v-card-text>
                      </v-flex>
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </template>
          </v-data-iterator>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<style scoped>
.projects-wrapper {
  max-width: 80vw;
  margin-left: 10vw;
}
.data-iterator-wrapper {
  min-height: 40vh;
}
.loading-bar-wrapper {
  max-width: 16vw;
  margin-left: calc(50% - 8vw);
}
.chip-wrapper {
  margin-left: 10px;
  margin-top: 8px !important;
  background: #8c8888 !important;
}
.projects-text {
  margin-top: 20px;
}
</style>

<script>
export default {
  name: "Projects",
  computed: {
    repos() {
      return this.$store.state.repository_info;
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  methods: {
    getRepositoriesFromStore() {
      this.$store.dispatch("getRepositories");
    },
    redirect_to_url(link) {
      window.open(link, "_blank");
    }
  },
  mounted() {
    this.getRepositoriesFromStore();
  },
  data: () => ({
    itemsPerPageOptions: [9, 12, 15],
    itemsPerPage: 9
  })
};
</script>
