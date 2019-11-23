<template>
    <div>
        <v-app-bar app clipped-left elevate-on-scroll class="navbar-custom ma-0 pa-0">
            <v-app-bar-title @click="$vuetify.goTo('#','')">{{appTitle}}</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-app-bar-items class="menu-button-css">
            <v-btn text class="menu-button-css " @click="$vuetify.goTo('#about','')">About</v-btn>
            <v-btn text class="menu-button-css " @click="$vuetify.goTo('#skills','')">Skills</v-btn>
            <v-btn text class="menu-button-css " @click="$vuetify.goTo('#projects','')">Projects</v-btn>
            <v-btn text class="menu-button-css " @click="$vuetify.goTo('#contact','')">Contact</v-btn>
            <v-spacer></v-spacer>
        </v-app-bar-items>
        </v-app-bar>
                  <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            color="grey darken-2"
            @click="toTop"
          >
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>

     </div>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            appTitle: 'Joan Grau Noël',
            fab: false
        }
    },
    methods: {
        onScroll (e) {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset ||   e.target.scrollTop || 0
        this.fab = top > 20
        },
        toTop () {
        this.$vuetify.goTo(0)
        }
    }
};
</script>

<style scoped>
    .navbar-custom{
        padding-top: 0px !important;
        padding-bottom: 0px !important;
    }
    .menu-button-css{
        height: 100% !important;
    }
</style>
