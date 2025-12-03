<script setup>
//defineProps: khai báo những props truyền từ cha sang
defineProps({
    product: {
        type: Object,
        required: true,
    }
})

//defineEmits: khai báo hàm được truyền từ cha sang
const emit = defineEmits(['delete']);

//khai báo function delProduct, khi ng dùng click vào nút delete
function delProduct(id) {
    emit('delete', id); 
}
</script>

<template>
    <tr>
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td><img :src="product.image" alt=""></td>
        <td>
            <router-link
                :to="`/products/${product.id}`"
                class="btn btn-info me-2"
            >
                Detail
            </router-link>
            <router-link
                :to="`/products/update/${product.id}`"
                class="btn btn-warning me-2"
            >
                Edit
            </router-link>
            <button 
                @click="delProduct(product.id)"
                class="btn btn-danger"
            > 
                Delete
            </button>
        </td>
    </tr>
</template>