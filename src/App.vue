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

// directive (chỉ thị) ở trong vuejs
// v-bind: data binding 1 chiều 
// cú pháp: 
//    * đầy đủ: <element v-bind:attribute="value"></element>
//    * viết tắt: <element :attribute="value"></element>

const changeStatus = (id) => {
  listUsers[id].isActive = !listUsers[id].isActive;
  // if (listUsers[id].status == true) {
  //   listUsers[id].status == false;
  // } else {
  //   listUsers[id].status == true
  // }
}

const listUsers = reactive([ //array
  {
    name: "thaivm2",
    age: 100,
    avatar: 'https://picsum.photos/100',
    isActive: true,
  },
  {
    name: "thaivm3",
    age: 1,
    avatar: 'https://picsum.photos/100',
    isActive: false,
  }
]);
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <!-- ref -->
    <!-- event binding: bắt sự kiện ng dùng tương tác @click="tenHam1"-->
    <button class="btn btn-success" @click="countClick">Test</button>
    <p>{{ count }}</p> <br>
    <!-- <span>{{ isActive }}</span> -->

    <!-- v-model: data binding 2 chiều
      v-model="tenBien" 
    -->
    <span>{{ name }}</span> <br>
    
    <input type="text" v-model="name">

    <!-- reactive: tenObject.key --> 
    <!-- <p>{{ thaivm2.name }}</p>
    <p>{{ thaivm2.age }}</p>
    <p>{{ thaivm2.isActive }}</p> -->

    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Avatar</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ listUsers[0].name }}</td>
          <td :style="{fontSize: listUsers[0].age > 80 ? '50px' : '20px'}">{{ listUsers[0].age }}</td>
          <td><img v-bind:src="listUsers[0].avatar" alt=""></td>
          <!-- class binding
            cú pháp: 
              * v-bind:class="tenClass"
              * có điều kiện :class="{ tenClass:điều kiện để bật class }" 
          -->
          <td :class="{ active: listUsers[0].isActive }">{{ listUsers[0].isActive }}</td>
          <td><button @click="changeStatus(0)" class="btn btn-success">Active</button></td>
        </tr>
        <tr>
          <!-- style bind: cú pháp: :style="{tenThuocTinh: 'value'}" -->
          <td :style="{ backgroundColor: 'red'}">{{ listUsers[1].name }}</td>
          <td :style="{fontSize: listUsers[1].age > 80 ? '50px' : '20px'}">{{ listUsers[1].age }}</td>
          <td><img :src="listUsers[1].avatar" alt=""></td>
          <td :class="{ active: listUsers[1].isActive }">{{ listUsers[1].isActive }}</td>
          <td><button @click="changeStatus(1)" class="btn btn-success">Active</button></td>
        </tr>
      </tbody>
    </table>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.active {
  background-color: green;
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
