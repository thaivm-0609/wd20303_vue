<script setup>
//component cha
import axios from 'axios';
import { onMounted, ref } from 'vue';
import ProductCard from '@/components/ProductCard.vue'; //phải import component con thì mới sử dụng được

const products = ref([]); //dữ liệu cho sản phẩm mới
const bestSellers = ref([]); //dữ liệu cho sản phẩm bán chạy
const users = ref([]);
const getProducts = async () => {
    const response = await axios.get('http://localhost:3000/products');
    products.value = response.data;
    bestSellers.value = response.data;
}

const getUsers = async () => {
    const response = await axios.get('http://localhost:3000/users');
    users.value = response.data;
}

onMounted(() => {
    getProducts();
    getUsers();
})
</script>

<template>
    <h1>Đây là trang chủ</h1>

    <h2>Sản phẩm mới</h2>
    <div class="d-flex">
        <!-- chạy vòng lặp cho biến products -->
        <!-- Không sử dụng component -->
        <!-- <div v-for="p in products" class="card" style="width: 18rem;">
            <img :src="p.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ p.name }}</h5>
                <p class="card-text">Price: {{ p.price }}</p>
                <p class="card-text">Description: {{ p.description }}</p>
                <a href="#" class="btn btn-primary">Buy now</a>
            </div>
        </div> -->

        <!-- Sử dụng component ProductCard
        sử dụng props (thuộc tính) để truyền dữ liệu từ 
        component cha sang component con
        :key="value"
        -->
        <ProductCard v-for="product in products" :p="product"/>
    </div>

    <h2>Sản phẩm bán bán chạy</h2>
    <div class="d-flex">
        <!-- chạy vòng lặp cho biến products -->
        <!-- <div v-for="p in bestSellers" class="card" style="width: 18rem;">
            <img :src="p.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ p.name }}</h5>
                <p class="card-text">Price: {{ p.price }}</p>
                <p class="card-text">Description: {{ p.description }}</p>
                <a href="#" class="btn btn-primary">Buy now</a>
            </div>
        </div> -->
        <ProductCard v-for="product in bestSellers" :p="product"/>
    </div>

    <h2>Danh sách người dùng</h2>
    <div class="d-flex">
        <ProductCard v-for="user in users" :p="user"/>
    </div>
</template>