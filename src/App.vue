<script setup>
import { RouterLink, RouterView} from "vue-router";


</script>


<template>

<header>
  <RouterLink to="/">Главная</RouterLink>
  <RouterLink to="/form">Работа с формами</RouterLink>
  <RouterLink to="/params">Входные параметры</RouterLink>
</header>

  <main id="main">
  <RouterView />
  </main>

  <footer>

  </footer>

</template>


<style scoped>


</style>
