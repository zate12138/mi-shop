<template>
  <div class="homepage">
    <div class="homepage-top">
      <div class="page-top-a1">
        <img src="/assets/imgs/mi.png">
      </div>
      <router-link class="page-top-a2" :to="{name:'search'}">
        <input type="text" placeholder="搜索商品名称">
      </router-link>
      <div class="page-top-a3">
        <span class="iconfont icon-wode1" @click="skip"></span>
      </div>
    </div>

    <div class="homepage-center">
      <redraw @load="getData">
        <div class="center">
          <div class="center-img">
            <slideshow></slideshow>
          </div>
          <ul>
            <li v-for="item of listdata" :key="item.id">
              <img :src="item.src" alt="">
            </li>
          </ul>
        </div>
        <rollingnews></rollingnews>
        <div class="homepage-img">
          <img src="/assets/imgs/a1.jpg">
          <img src="/assets/imgs/a2.jpg">
        </div>
        <shopdetails></shopdetails>
      </redraw>
    </div>
  </div>
</template>

<script>
import rollingnews from "./components/index.vue";
import axios from "axios";
export default {
  name: "home",
  data(){
    return{
      listdata:[
        {
          src:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152",
          title:'小米秒杀'
        },
         {
          src:"//i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp",
          title:'小米秒杀'
        },
         {
          src:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d436f30612651fffe1d6c5aaa3fdb816.png?thumb=1&w=144&h=152",
          title:'小米秒杀'
        },
         {
          src:"//i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp",
          title:'小米秒杀'
        },
         {
          src:"//i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp",
          title:'小米秒杀'
        },

        {
          src:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?thumb=1&w=144&h=152",
          title:'小米秒杀'
        },
         {
          src:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152",
          title:'小米秒杀'
        },
         {
          src:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152",
          title:'小米秒杀'
        },
         {
          src:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?thumb=1&w=144&h=152",
          title:'小米秒杀'
        },
         {
          src:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152",
          title:'小米秒杀'
        },
      ]
    }
  },

  methods: {
    skip() {
      this.$router.replace("/mine");
    },
    getData(resolve) {
      const obj = {
        method: "GET",
        url: `../../assets/data/roll.json`
      };
      axios(obj).then(item => {
        let a = item.data.list;
        resolve();
      });
    }
  },
  components: {
    rollingnews
  }
};
</script>

<style lang="scss" scoped>
.homepage {
  height: 100%;
  width: 100%;
  background: white;

  .homepage-top {
    width: 100%;
    height: 44px;
    background: #f2f2f2;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    .page-top-a1 {
      width: 10%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 50%;
        
      }
    }
    .page-top-a2 {
      display: inline-block;
      width: 80%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        width: 90%;
        height: 70%;
        border: 1px solid transparent;
        outline: transparent;
        border-radius: 0.5rem;
        text-indent: 2rem;
      }
    }

    .page-top-a3 {
      width: 10%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .iconfont.icon-wode1 {
        font-size: 1.5rem;
      }
    }
  }

  .homepage-center {
    background: white;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 44px 0 54px 0;
    overflow: auto;
    .center {
      .center-img {
        width: 100%;
        height: 15rem;
      }
      ul {
        margin-top: 1rem;
        width: 100%;
        height: 10rem;
        li {
          float: left;
          width: 20%;
          height: 5rem;
          text-align: center;
          line-height: 5rem;
          list-style: none;
        }
      }
    }
    .homepage-img {
      img {
        width: 100%;
        height: 15rem;
        margin-top: 1rem;
      }
    }
  }
}
</style>





