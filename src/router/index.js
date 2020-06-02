
// import { Vue } from "vue"
// import { VueRouter } from "vue-router"
import { routes } from "./routes.js"


import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);
// Vue.use(VueRouter)
export const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.required && !sessionStorage.getItem("id")) {
        next({ name: 'login', query: { redirect: to.name } });
    } else {
        next();
    }
    // console.log(22,sessionStorage.getItem("id"))
});

