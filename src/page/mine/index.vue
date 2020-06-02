


<template>
  <div class="mine">
    <div class="personal">
      <span class="iconfont icon-wode1"></span>
      <div>
        <div v-if="!token">
          <router-link class="personal-1" :to="{name: 'login',query: { redirect: 'mine' }}">登录</router-link>
          <router-link class="personal-1" to>/ 注册</router-link>
        </div>
        <div v-else>
          <p class="personal-1" @click="removetoken">退出</p>
        </div>
      </div>
    </div>
    <div class="mine-center">
      <div class="mine-order-1">
        <span class="txt1">我的订单</span>
        <span class="iconfont icon-iconfontjiantou3"></span>
      </div>
      <div class="mine-order-2">
        <div>
          <p>
            <span class="iconfont icon-daifukuan"></span>
          </p>
          <p>待付款</p>
        </div>
        <div>
          <p>
            <span class="iconfont icon-icon-test"></span>
          </p>
          <p>待发货</p>
        </div>
        <div>
          <p>
            <span class="iconfont icon-daishouhuo"></span>
          </p>
          <p>待收货</p>
        </div>
        <div>
          <p>
            <span class="iconfont icon-refund"></span>
          </p>
          <p>退款</p>
        </div>
        <div>
          <p>
            <span class="iconfont icon-xiangmujianjie"></span>
          </p>
          <p>全部订单</p>
        </div>
      </div>

      <div class="mine-order-1">
        <span class="iconfont icon-huiyuan-"></span>
        <span class="txt">会员福利</span>
        <span class="iconfont icon-iconfontjiantou3"></span>
      </div>
      <div class="mine-order-1">
        <span class="iconfont icon-youhui"></span>
        <span class="txt">我的优惠</span>
        <span class="iconfont icon-iconfontjiantou3"></span>
      </div>
      <div class="mine-order-1">
        <span class="iconfont icon-fuwuerji"></span>
        <span class="txt">服务中心</span>
        <span class="iconfont icon-iconfontjiantou3"></span>
      </div>
      <div class="mine-order-1">
        <span class="iconfont icon-shezhi"></span>
        <span class="txt">设置</span>
        <span class="iconfont icon-iconfontjiantou3"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "mine",
  data() {
    return {
      glaglogin: false
    };
  },
  computed: {
    ...Vuex.mapState(["token"])
  },
  methods: {
    ...Vuex.mapMutations(["removetoken"])
  },
  created() {
    // console.log(sessionStorage.removeItem("id"));
  }
};
</script>

<style lang="scss" scoped>
.mine {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .personal {
    width: 100%;
    height: 100px;
    line-height: 100px;
    background: #f37d0f;
    text-indent: 2rem;
    font-size: 20px;
    display: flex;
    color: white;
    .iconfont.icon-wode1 {
      font-size: 30px;
      color: black;
    }
    a {
      color: white;
    }
  }
  .mine-center {
    font-size: 4vw;
    .mine-order-1 {
      width: 100%;
      height: 12vw;
      text-indent: 2rem;
      line-height: 12vw;
      background: white;
      border-bottom: 1px solid #d9d9d9;
      display: flex;
      align-items: center;
      .iconfont {
        color: orange;
        font-size: 5.5vw;
      }
      .txt {
        width: 65%;
        height: 100%;
      }
      .txt1 {
        width: 79%;
        height: 100%;
      }
    }
    .mine-order-2 {
      width: 100%;
      height: 22vw;
      display: flex;
      align-items: center;
      text-align: center;
      background: white;
      border-bottom: 10px solid #d9d9d9;
      div {
        width: 20%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        color: #a4a4a4;
        flex-wrap: wrap;
        p {
          width: 100%;
        }
        .iconfont {
          font-size: 7vw;
        }
      }
    }
  }
}
</style>


