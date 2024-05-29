<script setup>
import Header from './../components/Header.vue';
import Footer from './../components/Footer.vue';
</script>

<template>
  <Header />
  <div class="content">
    Content site multy pages
    <img src="./../assets/img/hedgehog.jpg" />
  </div>
  <Footer />
</template>

<style lang="scss">
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>