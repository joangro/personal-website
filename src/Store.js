import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const username = "joangro";

export default new Vuex.Store({
  state: {
    repository_info: [],
    loading: true
  },
  mutations: {
    setRepositories(state, payload) {
      state.repository_info = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    async getRepositories({ state, commit }) {
      var data = [];
      try {
        const get_repos_options = {
          params: { sort: "updated", type: "owner" }
        };
        const res = await axios.get(
          `https://api.github.com/users/${username}/repos`,
          get_repos_options
        );

        for (var repo of res.data) {
          var repo_name = repo.name;
          const languages_res = await axios.get(repo.url + "/languages");
          var created_at = repo.created_at.split("T")[0];
          data.push({
            name: repo_name,
            link: repo.html_url,
            stars: repo.stargazers_count,
            description: repo.description,
            created_at: created_at,
            languages: languages_res.data,
            fork: repo.fork
          });
        }
        commit("setRepositories", data);
        commit("setLoading", false);
      } catch (err) {
        commit("setRepositories", []);
      }
    }
  }
});
