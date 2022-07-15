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
body{
   background: linear-gradient(
    75deg,
    rgb(36, 134, 224),
    rgb(121, 247, 247),
    rgb(182, 105, 218)
  );
}
</style>
