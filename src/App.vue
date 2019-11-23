<template>
  <v-app>
    <navigation></navigation>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import Navigation from "@/components/Navigation";

export default {
  name: "App",
  components: {
    //HelloWorld, 
    Navigation
    
  },
  data: () => ({
    //
  }),
  created () {
    this.$vuetify.theme.dark = true
  },
};
</script>
