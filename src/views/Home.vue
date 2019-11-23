<template>
  <span>
    <home-picture></home-picture>
    <about/>
    <skills/>
    <projects/>
    <contact-info/>
    <Footer/>
  </span>
</template>

<script>
import HomePicture from '../components/HomePicture';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';

export default {
  name: "home",
  components: {
    HomePicture,
    About,
    Skills,
    Projects,
    ContactInfo,
    Footer
  }
};
</script>
