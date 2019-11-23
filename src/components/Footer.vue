<template>
    <v-container fluid class="background-color" id="footer">

    <v-footer
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Joan Grau</strong>
      </v-col>
    </v-footer>
        </v-container>
</template>


<script>
export default {
    name: 'Footer',
}
</script>
