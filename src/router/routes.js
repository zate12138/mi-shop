
import home from "../page/home/index.vue"

import mine from "../page/mine/index.vue"

import classify from "../page/classify/index.vue"

import shopdeta from "../page/shopdeta/index.vue"

import shopcart from "../page/shopcart/index.vue"
import login from "../page/login/index.vue"

import search from "../page/search/index.vue"

// import register from "../page/register/index.vue"
// 路由配置对象
export const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "home",
        component: home
    },
    {
        path: "/mine",
        component: mine,
        name: "mine",
    },
    {
        path: "/classify",
        name: "classify",
        component: classify
    },
    {
        path: "/shopcart",
        name: "shopcart",
        component: shopcart,
        meta: {
            required: true
        },
    },
    {
        path: "/login",
        name: "login",
        component: login
    },
    {
        path: "/shopdeta",
        name: "shopdeta",
        component: shopdeta
    },
    {
        path: "/search",
        name: "search",
        component: search
    },
]




