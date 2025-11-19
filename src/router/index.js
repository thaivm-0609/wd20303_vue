//khởi tạo, khai báo các router sử dụng trong dự án
import Create from "@/pages/Create.vue";
import Detail from "@/pages/Detail.vue";
import Home from "@/pages/Home.vue";
import ProductList from "@/pages/ProductList.vue";
import Update from "@/pages/Update.vue";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({ //routes: keyword
    routes: [ //mỗi router sẽ là 1 phần tử ở trong mảng
        { //trang chủ
            path: '/', //đường dẫn (url) mà người dùng truy cập
            component: Home, //page .vue muốn hiển thị ra
            name: 'home-page', 
        },
        {
            path: '/products',
            component: ProductList,
            name: 'product-list',
        },
        {
            path: '/products/create',
            component: Create,
            name: 'product-create',
        },
        {
            path: '/products/:id',
            component: Detail,
            name: 'product-detail',
        },
        {
            path: '/products/update/:id',
            component: Update,
            name: 'product-update'
        }
    ],
    history: createWebHistory()
})
export default router;