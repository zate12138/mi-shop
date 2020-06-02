

<template>
  <div class="butnav">
    <router-link class="can" :to="{name: 'home'}">
      <p class="iconfont icon-shouye"></p>
      <p>首页</p>
    </router-link>
    <router-link class="can" :to="{name: 'classify'}">
      <p class="iconfont icon-fenlei"></p>
      <p>分类</p>
    </router-link>
    <router-link class="can" :to="{name: 'shopcart'}">
      <p class="iconfont icon-gouwuche"></p>
      <p>购物车</p>
    </router-link>
    <router-link class="can" to="/mine">
      <p class="iconfont icon-wode1"></p>
      <p>我的</p>
    </router-link>
  </div>
</template>
                  

<script>
export default {
  name: "homenav"
};
</script>

<style scoped lang="scss">
.butnav {
  width: 100%;
  height: 54px;
  background: white;
  border-bottom: 1px solid red;
  border-top: 1px solid red;
  display: flex;
  .can {
    flex: 1;
    height: 100%;
    font-size: 12px;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    color: #999;
    p {
      width: 100%;
      height: 50%;
      line-height: 27px;
    }
    .iconfont {
      font-size: 22px;
    }
  }
}
.router-link-exact-active.router-link-active {
  color: orange;
}
</style>
