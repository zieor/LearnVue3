<script setup>
import {computed, ref} from 'vue'
let surname=ref('Шкорлу')
let name=ref('Станислав')
let count = ref(0)
//let isClass

let fullName = computed({
  get(){
    if(!name.value) return surname.value
    if(!surname.value) return name.value
    if(!surname.value&&!name.value) return name.value
    return surname.value+""+name.value
  },
  set(newValue){
    [surname.value, name.value] = newValue.split(' ');
    if(typeof surname.value==="undefined"){
      surname.value="";
    }
    if(typeof name.value==="undefined"){
      name.value="";
    }
  }

})


let userData=ref(["Мойко", "Смокотин", "Танасаков", "Григорьев", "Шмулий"])
function countIncrement(){
  count.value++;
}

let isShow = ref(false);
function changeShow(){
  isShow.value = !isShow.value;
}

function changeClass(){
  isClass.value = !isClass.value;
  if(buttonText.value==="Убрать классы"){
    buttonText.value==="Добавить классы "
  }else {
    buttonText.value==="Убрать классы"
  }
}
let buttonText=ref('Убрать классы')

let typeInput = ref('password')

let buttonText2=ref('Показать пароль')
function changeInput(){
  if(typeInput.value==="password"){
    typeInput.value="text";
    buttonText2.value="Скрыть пароль";
  }else{
    typeInput.value="password";
    buttonText2.value="Показать пароль";
  }
}
function Hello(message){
  alert(message);
}


let textarea = ref("");
</script>

<template>
<h2>Изучаем Vue3</h2>
  <p>Вывод переменной name: {{ name }}</p>
  <button v-on:click="countIncrement">Вы нажали кнопку: {{count}} раз</button>
  <h3>Список студентов</h3>
  <ul>
    <li v-for="(user,key) in userData">{{key}}-{{user}}</li>
  </ul>
  <h3>Условное отображение</h3>
  <button v-show="isShow">Кнопка, которую теперь видно</button>
  <button v-if="isShow">Кнопка, которую теперь видно</button>
  <button v-else>Кнопка, которую видно</button>
  <button @click="changeShow">Переключить отображение</button>

  <h3>Вычесялемое свойство</h3>
  <p >{{fullName}}</p>
  <input v-model="surname" type="text" name="surname" placeholder="Фамилия">
  <input v-model="name" type="text" name="name" placeholder="Имя">
  <p>{{surname}} {{name}}</p>

  <input v-model="fullName" type="text" name="fullName" placeholder="Фамилия Имя">


  <!--<p :class={'color-red':isClass, 'text-bold':isClass}>Работа с классами</p>-->
  <button @click="changeClass">{{buttonText}}</button>
  <p>Поле с паролем</p>
  <input :type="typeInput"/>
  <button @click="changeInput">{{buttonText2}}</button>

  <button @click="Hello('1942c!')">ЖМИ</button>
  <button @click="Hello(surname)">ЖМИ</button>

  <textarea v-model="textarea" placeholder="Введите несколько строк текста"></textarea>
  <p class="p">{{textarea}}</p>

</template>

<style scoped>
.color-red{
  color:red;
}
.text-bold{
  font-weight: bold;
}

.p{
  white-space: pre-line;
}

</style>