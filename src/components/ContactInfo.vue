<template>
  <v-container fluid class="background-color-clearer" id="contact">
    <v-flex class="contact-wrapper">
      <v-layout align-center align-center column mt-10 mx-15 mb-2>
        <v-flex
          class="display-3 font-weight-thin white--text text-xs-center mb-1"
          >Contact</v-flex
        >
      </v-layout>
      <v-divider></v-divider>
      <v-layout
        align-center
        justify-center
        oclumn
        my-10
        mx-15
        class="about-text"
      >
        <v-flex align-center>
          <p style="text-align:center">
            Mail:
            <a href="mailto:contact@graunoel.com">contact@graunoel.com</a> /
            <a href="mailto:jgraunoel@gmail.com">jgraunoel@gmail.com</a>
          </p>
          <p style="text-align:center">
            LinkedIn:
            <a href="https://www.linkedin.com/in/joan-grau/"
              >https://www.linkedin.com/in/joan-grau/</a
            >
          </p>
          <p style="text-align:center">
            If any other contact method is preferred, please ask over email!
          </p>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "ContactInfo"
};
</script>

<style scoped>
.contact-wrapper {
  margin-left: 18vw;
  margin-right: 18vw;
}
</style>
