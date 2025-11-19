<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

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
    <h1>Đây là trang danh sách sản phẩm</h1>
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
</template>