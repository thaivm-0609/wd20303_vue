<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

//lấy id người dùng truyền qua url
const router = useRoute();
const id = router.params.id;

const product = ref({}); //tạo biến product để lưu dữ liệu từ json-server
const getDetail = async (id) => {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    product.value = response.data; //gán dữ liệu trả về cho biến product
}

onMounted(() => {
    getDetail(id);
})
</script>

<template>
    <h1>Đây là trang chi tiết</h1>
    <h3>ID: {{ product.id }}</h3>
    <h3>Tên sản phẩm: {{ product.name }}</h3>
    <h3>Giá sản phẩm: {{ product.price }}</h3>
    <h3>Image:</h3>
    <img :src="product.image" alt="">
</template>