<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import {ref, reactive} from 'vue';

//ref: dùng với kiểu dữ liệu nguyên thủy: number, string, boolean
//ref sẽ tạo biến là 1 object, bên trong có thuộc tính .value=giá trị của biến
//khi sử dụng giá trị của biến để tính toán => tenBien.value
const count = ref(10); //khởi tạo biến count gán giá trị bằng 0
const name = ref('thaivm2'); //string
const isActive = ref(true); //boolean

const countClick = () => {
  console.log(count);
  count.value++;
}

//reactive: dùng với object, array
const thaivm2 = reactive({ //object
  name: "Vương Minh Thái",
  age: 100,
  isActive: true,
})

const listUsers = reactive([ //array
  {
    name: "thaivm2",
    age: 100,
    isActive: true,
  },
  {
    name: "thaivm3",
    age: 1,
    isActive: false,
  }
]);
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <!-- ref -->
    <button class="btn btn-success" @click="countClick">Test</button>
    <p>{{ count }}</p> <br>
    <span>{{ name }}</span> <br>
    <span>{{ isActive }}</span>

    <!-- reactive: tenObject.key --> 
    <p>{{ thaivm2.name }}</p>
    <p>{{ thaivm2.age }}</p>
    <p>{{ thaivm2.isActive }}</p>

    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ listUsers[0].name }}</td>
          <td>{{ listUsers[0].age }}</td>
          <td>{{ listUsers[0].isActive }}</td>
        </tr>
        <tr>
          <td>{{ listUsers[1].name }}</td>
          <td>{{ listUsers[1].age }}</td>
          <td>{{ listUsers[1].isActive }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
