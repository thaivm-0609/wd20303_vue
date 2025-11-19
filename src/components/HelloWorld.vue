<script setup>
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
})

// const isLoggedIn = ref(false);
// const checkInOut = () => {
//   isLoggedIn.value = !isLoggedIn.value;
// }

//B1: khởi tạo biến để lưu dữ liệu lấy từ DB ra
const products = ref([]);
//khai báo hàm lấy danh sách sản phẩm
const getProducts = async () => {
  //B2: call api để lấy dữ liệu từ json-server
  const response = await axios.get('http://localhost:3000/products');
  //B3: gán dữ liệu server trả về cho biến products
  products.value = response.data;
}


const deleteProduct = async (id) => {
  if (confirm('Bạn có chắc không?')) {
    await axios.delete(`http://localhost:3000/products/${id}`);
    getProducts(); //gọi hàm để load danh sách sản phẩm mới
  }
}

//onMounted: tự động thực thi code khi load component
onMounted(() => {
  getProducts();
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>

    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p) in products" :key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.price }}</td>
          <td><img :src="p.image" alt=""></td>
          <td>
            <button 
              @click="deleteProduct(p.id)"
              class="btn btn-danger"
            > 
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- condition rendering: hiển thị có điều kiện
      <element v-show="condition"></element>
      <element v-if="condition"></element>
      <element v-else-if="condition2"></element>
      <element v-else></element>
    -->
    <!-- <h1 v-if="isLoggedIn">Bạn đã đăng nhập thành công</h1>
    <h1 v-show="isLoggedIn">Bạn đã đăng nhập thành công</h1>
    <button 
      v-if="isLoggedIn" 
      @click="checkInOut"
      class="btn btn-success" 
    >
      Đăng xuất
    </button>
    <button  
      v-else 
      @click="checkInOut"
      class="btn btn-success"
    >
      Đăng nhập
    </button> -->

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
