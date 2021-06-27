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
    
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style></style>
