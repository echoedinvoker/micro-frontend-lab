import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/mdi",
      name: "mdi",
      component: defineAsyncComponent(() => import("../views/Mdi.vue")),
    },
    {
      path: "/",
      name: "home",
      component: Home,
    }
  ]
})
