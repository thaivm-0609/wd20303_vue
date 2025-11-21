<script setup>
import router from '@/router';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

//lấy id người dùng truyền qua url
const useRouter = useRoute();
const id = useRouter.params.id;

const product = ref({}); //tạo biến product để lưu dữ liệu từ json-server
const getDetail = async (id) => {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    product.value = response.data; //gán dữ liệu trả về cho biến product
}

onMounted(() => {
    getDetail(id);
})

const handleSubmit = async () => {
    try {
        await axios.put(
            `http://localhost:3000/products/${id}`, //url
            product.value //dữ liệu người dùng nhập vào form
        );

        router.push('/products'); //sử dụng path
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <h1>Đây là trang chỉnh sửa</h1>
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