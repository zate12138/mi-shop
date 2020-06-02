import Vue from 'vue'
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        list: [],
        item: [],
        token: null,
        shopdata: {
            isshop: true,
            list: [],
            listflag: []
        }
    },
    mutations: {
        // token
        gettoken(state, token) {
            state.token = token
        },
        removetoken(state) {
            state.token = null
        },

        get(state, item) {
            state.list = item
        },
        getitem(state, item) {
            state.item = item
        },
        add(state, item) {
            state.shopdata.isshop = false;

            if (state.shopdata.list.indexOf(item) === -1) {
                item.count++;
                state.shopdata.list.push(item)
                state.shopdata.listflag.push({ id: item.id, flag: false })
                sessionStorage.setItem("setlist", JSON.stringify(state.shopdata));
            } else {
                let index = state.shopdata.list.indexOf(item)
                if (state.shopdata.list[index].count < state.shopdata.list[index].stock) {
                    state.shopdata.list[index].count++;
                }
                sessionStorage.setItem("setlist", JSON.stringify(state.shopdata));
            }
        },
        increase(state, item) {
            let index = state.shopdata.list.indexOf(item)
            if (state.shopdata.list[index].count < state.shopdata.list[index].stock) {
                state.shopdata.list[index].count++;
            }
            sessionStorage.setItem("setlist", JSON.stringify(state.shopdata));
        },
        decrease(state, item) {
            let index = state.shopdata.list.indexOf(item)
            if (state.shopdata.list[index].count > 0) {
                state.shopdata.list[index].count--;
            }
            sessionStorage.setItem("setlist", JSON.stringify(state.shopdata));
        },
        del(state, item) {
            let index = state.shopdata.list.indexOf(item)
            state.shopdata.list[index].count = 0
            state.shopdata.list.splice(index, 1)
            if (state.shopdata.list.length === 0) {
                state.shopdata.isshop = true;
            }
            sessionStorage.setItem("setlist", JSON.stringify(state.shopdata));
        },
        setlist(state) {
            state.shopdata = JSON.parse(sessionStorage.getItem("setlist"))
        }
    },
    actions: {
        getlist({ commit }) {
            const obj1 = {
                method: "GET",
                url: `./assets/data/recommendList.json`
            };
           
            const obj2 = {
                method: "GET",
                url: `./assets/data/productDetail.json`
            };
            axios(obj1).then(item => {
                commit("get", item.data.list)
            })
            axios(obj2).then(item => {
                commit("getitem", item.data.list)
            })
        }
    },
    getters: {
        total(state) {
            const obj = {
                count: 0,
                price: 0
            }
            state.shopdata.listflag.map(item => {
                if (item.flag) {
                    state.shopdata.list.map(value => {
                        if (item.id === value.id) {
                            obj.count += value.count
                            obj.price += value.count * value.price
                        }
                    })
                }
            })
            return obj
        },
        num(state) {
            let num = 0
            state.shopdata.list.map(value => {
                num += value.count
            })
            return num
        }
    }
})