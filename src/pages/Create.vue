<script setup>
import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';

//tạo biến product để chứa dữ liệu người dùng nhập vào form
const product = ref({
    name: '',
    price: 0,
    image: ''
})

const handleSubmit = async () => {
    try {
        await axios.post(
            'http://localhost:3000/products', //url
            product.value //dữ liệu người dùng nhập vào form
        );

        router.push('/products'); //sử dụng path
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <h1>Đây là trang thêm mới</h1>
    <form @submit.prevent="handleSubmit()">
        <div>
            <label for="" class="form-label">Name</label>
            <input type="text" class="form-control" v-model="product.name">
        </div>
        <div>
            <label for="" class="form-label">Price</label>
            <input type="number" class="form-control" v-model="product.price">
        </div>
        <div>
            <label for="" class="form-label">Image</label>
            <input type="text" class="form-control" v-model="product.image">
        </div>
        <button type="submit" class="btn btn-success my-2">Create</button>
    </form>
</template>