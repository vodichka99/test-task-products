import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import EditProduct from "../views/EditProduct.vue";
import NewProduct from "../views/NewProduct.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/edit_product/:id",
    name: "edit_product",
    component: EditProduct
  },
  {
    path: "/new_product",
    name: "new_product",
    component: NewProduct
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
