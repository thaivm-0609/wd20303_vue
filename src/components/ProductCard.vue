<script setup>
//component con
//khai báo props được truyền từ component cha sang
const props = defineProps({
    p: Object,
})

</script>

<template>
    <div class="card" style="width: 18rem;">
        <img :src="p.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ p.name }}</h5>
            <p v-if="p.price" class="card-text">Price: {{ p.price }}</p>
            <p v-if="p.level" class="card-text">Level: {{ p.level }}</p>
            <p v-if="p.description" class="card-text">Description: {{ p.description }}</p>
            <a href="#" class="btn btn-primary">Buy now</a>
        </div>
    </div>
</template>