<template>
  <v-container fluid class="background-color" id="about">
    <v-flex class="about-wrapper">
      <v-layout align-center column mt-10 mx-15>
        <v-flex
          class="display-3 font-weight-thin white--text text-xs-center mb-1"
          >About</v-flex
        >
      </v-layout>
      <v-divider></v-divider>
      <v-row>
        <v-col md="2" class="align-center justify-center layout text-center">
          <v-avatar class="about-pic" size="auto">
            <img
              src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
              alt="avatar"
              class="about-pic"
            />
          </v-avatar>
        </v-col>
        <v-col md="10">
          <v-layout align-center column my-10 mx-15 class="about-text">
            <p class="text-justify">
              Always passionate about technology, I graduated in
              Telecommunications Engineering (Sistemes Audiovisuals) at Pompeu
              Fabra University (UPF) on 2018.
            </p>
            <p class="text-justify">
              I joined the degree due to my interest on web technologies and
              systems. However later on I would generate a growing interest on
              developing and programming, which marked the later years of my
              degree, and my professional interests. As well, during my career I
              enjoyed learning about artificial intelligence and machine
              learning.
            </p>
            <p class="text-justify">
              Later I would join
              <a href="https://www.webhelp.com/es-es/">Sellbytel/Webhelp</a>, on
              its
              <a href="https://cloud.google.com/">Google Cloud Platform</a>
              project, where I would work with top of the line cloud technology,
              and learn a lot. Later I would become a Subject Matter Expert
              (SME) for the team, which allowed me to also learn about team view
              and organization. This experience had a big impact on me, as
              professionally it made me switch into seeking cloud-related
              opportunities.
            </p>
          </v-layout>
        </v-col>
      </v-row>
    </v-flex>
  </v-container>
</template>

<style scoped>
.about-wrapper {
  margin-left: 18vw;
  margin-right: 18vw;
}
.about-pic {
  height: 80%;
  width: 80%;
}
</style>
