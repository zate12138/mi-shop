


<template>
  <div class="cart">
    <div class="cart-top">
      <span class="top-2">购物车</span>
      <span class="iconfont icon-sousuo"></span>
    </div>
    <div class="cart-center">
      <div class="gofor" v-if="shopdata.isshop">
        <router-link to="/">
          <img src="/assets/imgs/a4.png">
        </router-link>
      </div>
      <div v-else>
        <shopcarts :getitem="shopdata"></shopcarts>
      </div>
      <div>
        <img src="/assets/imgs/a5.jpg">
      </div>
      <shopdetails></shopdetails>
    </div>
    <div>
      <shopnav></shopnav>
    </div>
  </div>
</template>

<script>
import shopcarts from "./children/shopcart.vue";
import shopnav from "./children/shopnav.vue";
import Vuex from "vuex";
export default {
  name: "shopcart",
  methods: {
    ...Vuex.mapMutations(["setlist"])
  },
  created() {
    if (sessionStorage.getItem("setlist")) {
      console.log(this.$store);
      this.$store.commit("setlist");
    }
  },
  computed: {
    ...Vuex.mapState(["shopdata"])
  },
  components: {
    shopcarts,
    shopnav
  }
};
</script>

<style lang="scss" scoped>
.cart {
  width: 100%;
  height: 20rem;
  background: #ffffff;
  .cart-top {
    width: 100%;
    height: 44px;
    background: #f2f2f2;
    .top-2 {
      display: inline-block;
      width: 80%;
      height: 42px;
      line-height: 42px;
      text-align: center;
      font-size: 1rem;
    }
    .iconfont.icon-sousuo {
      display: inline-block;
      width: 20%;
      height: 100%;
      text-align: center;
      font-size: 1.2rem;
    }
  }
  .cart-center {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 42px 0 108px 0;
    overflow: auto;
    background: #fff;
  }
}
</style>
