<template>
  <div class="search">
    <div class="search-top">
      <reverseback></reverseback>
      <input type="text" placeholder="搜索商品名称">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "search",
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
  beforeRouteEnter(to, from, next) {
    next(vm => {
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
.search {
  width: 100vw;
  height: 100vh;
  .search-top {
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    input {
      width: 75%;
      height: 80%;
      border-radius: 10px;
      outline: transparent;
      border-color:transparent; 
      text-indent: 1em;
    }
    span.iconfont{
      // width: 30%;
      text-align: center;
      // margin-left:2rem ;
      margin: 0 auto;
      font-size: 1.5em;
    }
  }
}
</style>

