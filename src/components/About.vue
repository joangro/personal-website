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
              src="https://storage.googleapis.com/grau-noel.appspot.com/IMG_20190624_115902.jpg"
              alt="avatar"
              class="about-pic"
            />
          </v-avatar>
        </v-col>
        <v-col md="10">
          <v-layout align-center column my-10 mx-15 class="about-text">
            <p class="text-justify">
              Hello! My name is Joan, and I consideer myself very passionate and
              curious about technology, especially on the IT sector. In 2018 I
              finished my Telecommunications Engineering degree (Sistemes
              Audiovisuals) at Pompeu Fabra University (UPF), Barcelona, Spain.
            </p>
            <p class="text-justify">
              I joined the degree due to my interest on web technologies and IT
              systems and communications. However later on I would grow an interest
              on developing and programming, which marked the later years of my
              degree, and afterwards my professional interests. As well, during my
              career I enjoyed learning about artificial intelligence and machine
              learning. I applied the knowledge from both of these worlds on my
              final degree project, combining Machine Learning with Signal
              Processing, which you can visit
              <a href="https://github.com/joangro/PytorchConvSep">here</a>.
            </p>
            <p class="text-justify">
              Later I would join
              <a href="https://www.webhelp.com/es-es/">Sellbytel/Webhelp</a>, on its
              <a href="https://cloud.google.com/">Google Cloud Platform</a>
              project, where I would work with top of the line cloud technology, and
              learn a lot. Later I would become a Subject Matter Expert (SME) for
              the team, which allowed me to also learn about team view and
              organization. This experience had a big impact on me, as
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
