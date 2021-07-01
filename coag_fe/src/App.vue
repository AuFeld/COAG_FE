<template>
  <div
    id="app"
    class="
      font-sans
      text-black
      transition-colors
      duration-1000
      bg-white
      dark:text-white dark:bg-black
    "
  >
    <Navbar />
    <div>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
