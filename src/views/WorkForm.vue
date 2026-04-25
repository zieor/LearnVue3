<script setup>
import { ref } from 'vue'
import Example1 from "@/components/Example1.vue";

let name=ref('')
let name2=ref('')
let checked=ref(false)
let checkedName=ref([])
let radio=ref("")
let selected=ref("")
let list=ref([])


let select=ref('1')
let options=ref([
  {text:'Первый',value:1},
  {text:'Второй',value:2},
  {text:'Третий',value:3},
])

</script>

<template>
  <div >
    <h2>Директива v-model</h2>
    <input v-model="name" type="text" name="name" placeholder="Введите ваше имя">
    <p>Вас зовут: {{name}}</p>
  </div>

  <div>
    <textarea v-model="name2"></textarea>
    <p>Вас зовут: {{name2}}</p>
  </div>

  <div>
    <h2>Один чекбокс привязан к булевому значению</h2>
    <input type="checkbox" checked>
    <input id="checkbox" type="checkbox" v-model="checked">Выбрать
    <label for="checkbox">{{checked}}</label>
  </div>
  <div>
    <h2>Список чексбоксов привязанных к массивам</h2>
    <p>Кого пошлют нахуй:</p>
    <input id="v1" v-model="checkedName" type="checkbox" value="Шкорлуханов Станислав" />
    <label for="v1">Шкорлуханов Станислав</label>
    <br>
    <input id="v2" v-model="checkedName" type="checkbox" value="Мамизеров Егор" />
    <label for="v2">Мамизеров Егор</label>
    <br>
    <input id="v3" v-model="checkedName" type="checkbox" value="Дудин Данил" />
    <label for="v3">Дудин Данил</label>
    <br>
    <p>Отмеченные имена: {{checkedName}}</p>
  </div>

  <div>
    <p>Выбранно: {{radio}}</p>
    <input type="radio" v-model="radio" name="r" value="Один">Один<br>
    <input type="radio" v-model="radio" name="r" value="Два">Два<br>
  </div>

  <div>
    <p>Выбрано: {{selected}}</p>
    <select v-model="selected">
      <option disabled value="">Выберите вариань</option>
      <option value="1">А</option>
      <option >Б</option>
      <option >В</option>
      <option >Г</option>
    </select>
  </div>

  <div>
    <p>Выбрано: {{list}}</p>
    <select v-model="list" multiple>
      <option disabled value="">Выберите вариань</option>
      <option value="1">А</option>
      <option >Б</option>
      <option >В</option>
      <option >Г</option>
    </select>
  </div>

  <div>
    <p>Выбрано: {{select}}</p>
    <select v-model="select">
      <option v-for="option in options":value="option.value">{{option.text}}</option>

    </select>
  </div>


  <Example1></Example1>

</template>

<style scoped>

</style>