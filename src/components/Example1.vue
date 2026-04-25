<script setup>
import {ref} from 'vue'
import {onMounted} from "vue";


let props = defineProps(['surname','name'])

let data = ref(null);
let users = ref([]);

onMounted(async () => {
  const response = await fetch('/data.json')
  data.value = await response.json()
})


</script>

<template>
<p>Привет, глобального компонента.</p>
  <p>Преподователь: {{props.surname}} {{props.name}}</p>
  <p>Пользователи:</p>
  <li v-for="user in data">
      {{user.surname}} {{user.name}}
  </li>

</template>

<style scoped>

</style>