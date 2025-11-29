<script setup>
import Info from './Info.vue';

//component con
//khai báo props được truyền từ component cha sang
//props không bắt buộc => key: Kiểu dữ liệu
//props bắt buộc phải có => 
// key: {
//      type: Kiểu dữ liệu,
//      required: true
// }
const props = defineProps({
    p: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="card" style="width: 18rem;">
        <img :src="p.image" class="card-img-top" alt="...">
        <div class="card-body">
            <Info 
                :name="p.name" 
                :price="p.price" 
                :level="p.level" 
                :description="p.description"
            />
            <!-- <h5 class="card-title">{{ p.name }}</h5>
            <p v-if="p.price" class="card-text">Price: {{ p.price }}</p>
            <p v-if="p.level" class="card-text">Level: {{ p.level }}</p>
            <p v-if="p.description" class="card-text">Description: {{ p.description }}</p> -->
            <a href="#" class="btn btn-primary">Buy now</a>
        </div>
    </div>
</template>