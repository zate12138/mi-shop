<template>
  <div class="shopdeta" v-toback>
    <div class="footer">
      <reverseback></reverseback>
    </div>
    <div class="center">
      <div class="lunbo">
        <slideshow></slideshow>
      </div>

      <div class="zhuti">
        <p>{{list.ptitle}}</p>
        <p>{{list.cover}}</p>
        <p>{{list.desc}}</p>
        <p>{{list.title}}</p>
        <img :src="list.imgList">
        <div v-html="list.desct"></div>
        <img src="/assets/imgs/a6.jpg">
        <img src="/assets/imgs/a9.jpg">
        <img src="/assets/imgs/a8.jpg">
        <img src="/assets/imgs/a7.jpg">
      </div>
    </div>
    <div class="header">
      <router-link class="tolink" :to="{name:'home'}">
        <p class="iconfont icon-shouye"></p>
        <p>首页</p>
      </router-link>
      <router-link class="tolink" :to="{name:'shopcart'}">
        <p class="iconfont icon-gouwuche"></p>
        <p>购物车</p>
        <span class="tolink-num" v-show="!shopdata.isshop">{{num}}</span>
      </router-link>
      <button class="tobut" @click="add(list)">加入购物车</button>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import axios from "axios";
export default {
  name: "shopdeta",
  data() {
    return {
      list: ""
    };
  },
  computed: {
    ...Vuex.mapState(["shopdata"]),
    ...Vuex.mapGetters(["num"])
  },
  methods: {
    ...Vuex.mapMutations(["add"])
  },
  created() {
    console.log(this.$route);
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // const obj1 = {
      //   method: "GET",
      //   url: `http://localhost/web/mishop/api/productdetail.php?id=${
      //     vm.$route.query.redirect
      //   }`
      // };
      // axios(obj1).then(item => {
      //   console.log(item.data);
      //    vm.list = item.data;
      // });
      vm.$store.state.item.map(item => {
        if (item.id === vm.$route.query.redirect) {
          vm.list = item;
        }
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.shopdeta {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: white;
}

.footer {
  width: 100%;
  height: 42px;
  position: absolute;
  top: 0;
  background: #f2f2f2;
}
.center {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 42px 0 54px 0;
  overflow: auto;
  .lunbo {
    width: 100%;
    height: 60vw;
  }
  .zhuti {
    width: 100%;
    height: 100%;
    p {
      width: 94%;
      text-indent: 2rem;
      padding: 0 3% 0 3%;
    }
  }
}
.header {
  width: 100%;
  height: 54px;
  position: absolute;
  bottom: 0;
  background: #f2f2f2;
  text-align: center;
  display: flex;
  .tolink {
    width: 25%;
    height: 100%;
    justify-content: center;
    position: relative;
    p {
      width: 100%;
      height: 50%;
      line-height: 27px;
    }
    .tolink-num {
      position: absolute;
      top: 5px;
      right: 10px;
      width: 15px;
      height: 15px;
      line-height: 15px;
      border-radius: 50%;
      color: white;
      background: red;
      font-size: 10px;
    }
  }
  .tobut {
    width: 50%;
    height: 100%;
    justify-content: center;
    background: orange;
    outline: transparent;
    border-color: transparent;
    color: white;
    font-size: 4.5vw;
  }
}
</style>

