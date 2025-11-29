<script setup>
//khai báo props
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    price: Number,
    level: Number,
    description: String
})
</script>
<template>
    <h5 class="card-title">{{ name }}</h5>
    <p v-if="price" class="card-text">Price: {{ price }}</p>
    <p v-if="level" class="card-text">Level: {{ level }}</p>
    <p v-if="description" class="card-text">Description: {{ description }}</p>
</template>