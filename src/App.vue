<template>
  <div><Navbar /></div>
  <router-view />
  <v-footer>
    <Footer />
  </v-footer>
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
// import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
