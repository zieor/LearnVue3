<script setup>

import Example1 from "@/components/Example1.vue";
import {ref} from "vue";

let surname = ref("");
let name = ref("");
</script>

<template>
<h2>входные параметры</h2>
  <input type="text" v-model="surname" />
  <input type="text" v-model="name" />
  <Example1 :surname=surname :name=name />
</template>

<style scoped>

</style>