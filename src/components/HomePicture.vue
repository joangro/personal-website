<template>
    <v-container fluid fill-height class="home-picture" style="max-height: 100vh;">

        <v-layout justify-center align-center column pa-5>
          <v-layout 
           wrap
           justify-center>
          </v-layout>

            <div class="display-3 font-weight-thin white--text text-xs-center">JOAN GRAU NOËL</div>
            <v-divider dark/>
            <div class="display-1 font-weight-light white--text text-xs-center mb-3">Engineer · DevOps · Cloud</div>
        <v-layout 
        wrap
        justify-center mb="5">
          <v-row class="mb-8"
          justify="center"
          no-gutters>
            <v-col class="mx-12 mt-8">
                <v-btn outlined @click="github">
                <v-icon left>mdi-github</v-icon>
                GitHub
                </v-btn>
            </v-col> 
            <v-col class="mx-12 mt-8">
                <v-btn outlined @click="linkedin">
                <v-icon left>mdi-linkedin</v-icon>
                Linkedin
                </v-btn> 
            </v-col> 
            <v-col class="mx-12 mt-8">
                <v-btn outlined @click="cv">
                <v-icon left>mdi-pencil-box</v-icon>
                CV
                </v-btn> 
            </v-col> 
            <v-col class="mx-12 mt-8">
                <v-btn outlined @click="stack">
                <v-icon left>mdi-stack-overflow</v-icon>
                StackOverflow
                </v-btn> 
            </v-col>
          </v-row>

          </v-layout>
        
          <v-layout 
           wrap
           justify-center>
          <v-btn outlined fab @click="$vuetify.goTo('#about','')" >
            <v-icon left align-center class="scroll_down_ico">mdi-chevron-down</v-icon>
          </v-btn> 

          </v-layout>

          
        </v-layout>
    </v-container fluid>
</template>

<script>
export default {
    name: 'HomePicture',
    methods: {
        linkedin: function (event){
        window.open("https://www.linkedin.com/in/joan-grau/", '_blank');
        },
        github: function (event){
        window.open("https://github.com/joangro", '_blank');
        },
        stack: function (event){
        window.open("https://stackoverflow.com/users/9175665/joan-grau-no%C3%ABl", '_blank');
        },
        cv: function (event){
        window.open("https://storage.googleapis.com/grau-noel.appspot.com/Grau_Noel_Joan_CV.pdf", '_blank');
        },
        scrolldown: function (event){
            window.open("#none", '_blank');
        },

    },

}
</script>

<style scoped>
    .home-picture {
        background: url("../assets/background-home-4.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        background-attachment: fixed;
        //background-repeat: no-repeat;
        //background-size: cover;
    }
    .scroll_down_ico{
        margin-left: 8px !important;
    }

</style>
