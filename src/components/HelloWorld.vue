<script setup>
import { reactive, ref } from 'vue';

defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const isLoggedIn = ref(false);
const checkInOut = () => {
  isLoggedIn.value = !isLoggedIn.value;
}

const listStudents = reactive([
  {
    name: 'Ngọc Anh',
    major: 'CNTT',
    point: 4,
  },
  {
    name: 'XYZ',
    major: 'CNTT',
    point: 4,
  }
]);
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>

    <!-- condition rendering: hiển thị có điều kiện
      <element v-show="condition"></element>
      <element v-if="condition"></element>
      <element v-else-if="condition2"></element>
      <element v-else></element>
    -->
    <h1 v-if="isLoggedIn">Bạn đã đăng nhập thành công</h1>
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
    </button>

    <h1>Họ tên: {{ listStudents[0].name }}</h1>
    <h1>Ngành học: {{ listStudents[0].major }}</h1>
    <h1>Điểm tổng kế: {{ listStudents[0].point }}</h1>
    <h1>Xếp hạng: 
      <span v-if="9 <= listStudents[0].point">Xuất sắc</span>
      <span v-else-if="8 <= listStudents[0].point">Giỏi</span>
      <span v-else-if="6 <= listStudents[0].point">Khá</span>
      <span v-else-if="5 <= listStudents[0].point">TB</span>
      <span v-else>Không được tốt nghiệp</span>
    </h1>
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
