

<template>
  <div class="classify">
    <div class="classify-top">
      <span class="top-2">分类</span>
      <span class="iconfont icon-sousuo"></span>
    </div>
    <div class="minecenter">
      <div class="classify-left">
        <ul>
          <li
            @click="switchto(item,$event)"
            :class="{'color-1':item.id===num}"
            v-for="item of getlist"
            :key="item.id"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="classify-right">
        <product v-for="item of getlist" :list="item" :key="item.id" v-show="item.id===num"></product>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import product from "./components/index.vue";
export default {
  name: "classify",
  data() {
    return {
      getlist: "",
      num: ""
    };
  },
  methods: {
    switchto(item, e) {
      this.num = item.id;
      let i = e.target.offsetTop - e.path[2].offsetHeight / 2;
      e.path[2].scrollTop = i;
    }
  },
  created() {
    const obj2 = {
      method: "GET",
      url: `/assets/data/classifyContent.json`
    };
    // const obj2 = {
    //   method: "GET",
    //   url: `http://localhost/web/mishop/api/classify.php`
    // };
    // axios(obj2).then(item => {
    //   // console.log(item)
    //   this.getlist = item.data.list;
    //   this.num = this.getlist[0].id;
    // });

    // const obj3 = {
    //   method: "GET",
    //   url: `http://localhost/web/mishop/api/classifycontent.php`
    // };
    // const obj3 = {
    //   method: "GET",
    //   url: `http://localhost:2700/api`
    // };
    axios(obj2).then(item => {
      // console.log(item);
      this.getlist = item.data.list;
      this.num = this.getlist[0].id;
    });
  },
  components: {
    product
  }
};
</script>

<style lang="scss" scoped>
.classify {
  width: 100%;
  height: 100vh;
  float: left;
  .classify-top {
    width: 100%;
    height: 44px;
    background: #f2f2f2;
    position: absolute;
    top: 0;
    .iconfont.icon-sousuo {
      display: inline-block;
      width: 20%;
      height: 100%;
      font-size: 1.2rem;
      text-align: center;
    }
    .top-2 {
      display: inline-block;
      width: 80%;
      height: 100%;
      line-height: 44px;
      text-align: center;
      font-size: 1rem;
    }
  }
  .minecenter {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 44px 0 54px 0;
  }
  .classify-left {
    width: 20%;
    height: 100%;
    float: left;
    border-right: 1px solid black;
    box-sizing: border-box;
    margin-bottom: 54px;
    background: white;
    overflow: auto;
    li {
      list-style: none;
      width: 100%;
      height: 3.5rem;
      line-height: 5rem;
      font-size: 1rem;
      text-align: center;
    }
    .color-1 {
      color: orange;
      font-size: 1.2rem;
      transition: font-size 0.3s linear;
    }
  }
  .classify-right {
    width: 80%;
    height: 90vh;
    overflow: hidden;
    float: left;
    text-align: center;
    background: white;
  }
}
</style>




