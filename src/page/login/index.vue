



<template>
  <div class="register">
    <div class="register-top">
      <reverseback></reverseback>
      <span class="top-1">登录</span>
    </div>
    <div class="register-cent">
      <input class="text" type="text" placeholder="请输入用户名" v-model="name">
      <p v-show="datename">用户名无效</p>
      <label>
        <input class="password" :type="types" placeholder="请输入密码" v-model="password">
        <button @click="add">{{typename}}</button>
      </label>
      <p v-show="datepassword">密码无效</p>
    </div>
    <div class="register-but">
      <button @click="register">立即登录</button>
      <p>立即注册|忘记密码</p>
    </div>
  </div>
</template>

<script>
import { reg } from "../../assets/reg/index.js";
import Vuex from 'vuex';

export default {
  name: "login",
  data() {
    return {
      name: "",
      password: "",
      types: "password",
      typename: "显示"
    };
  },
  methods: {
    ...Vuex.mapMutations(['gettoken']),
    add() {
      if (this.types === "password") {
        this.types = "text";
        this.typename = "隐藏";
      } else {
        this.types = "password";
        this.typename = "显示";
      }
    },
    register() {
      if (this.datename === false && this.datepassword === false) {
        sessionStorage.setItem("id", 123);
        this.gettoken('123');

        // this.$router.replace({ name: "home" });
        if (this.$route.query.redirect) {
          this.$router.replace({ name: this.$route.query.redirect });
        } else {
          this.$router.replace({ name: "home" });
        }
      }
    }
  },
  computed: {
    datename() {
      if (this.name) {
        return !reg.username.test(this.name);
      }
    },
    datepassword() {
      if (this.password) {
        return !reg.password.test(this.password);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.register-top {
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  font-size: 2rem;
  background: #f2f2f2;
  .top-1 {
    display: inline-block;
    width: 80%;
    height: 100%;
    text-align: center;
  }
}

.register-cent {
  width: 100%;
  height: 100%;
  .text {
    display: block;
    width: 70%;
    margin: 5% 15% 5% 15%;
    height: 2rem;
  }
  label {
    display: block;
    position: relative;
    width: 70%;
    margin: 5% 15% 5% 15%;
    background: orange;
    button {
      width: 4rem;
      height: 100%;
      background: transparent;
      outline: transparent;
      border-color: transparent;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .password {
    display: block;
    width: 100%;
    height: 2rem;
  }
  p {
    width: 100%;
    text-align: center;
  }
}

.register-but {
  width: 100%;
  height: 100%;
  button {
    width: 60%;
    margin: 10% 20% 10% 20%;
    height: 4rem;
    background: orangered;
    border-color: orangered;
    outline: orangered;
    color: white;
    font-size: 2rem;
  }
  p {
    font-size: 2rem;
    text-align: center;
  }
}
</style>

