
<template>
  <div class="homepage-but">
    <ul>
      <li v-for="item of list" :key="item.id">
        <router-link :to="{name: 'shopdeta',query: { redirect: item.id }}">
          <img :src="item.imgUrl">
          <p>{{item.title}}</p>
          <p class="color1">{{item.price}}起</p>
        </router-link>
      </li>
    </ul>
    <div>-----我也是有底线的-----</div>
  </div>
</template>


<script>
import axios from "axios";
import Vuex from "vuex";
export default {
  name: "shopend",
  // data() {
  //   return {
  //     list: ""
  //   };
  // },
  computed: {
    ...Vuex.mapActions(["getlist"]),
    ...Vuex.mapState(["list"])
  },
  methods: {
    // ...Vuex.mapMutations(["getitem"])
    //  @click="getitem(item.id)"
  },
  created() {
    this.getlist;
    // console.log(this.list);
   
    // const obj = {
    //   method: "GET",
    //   url: `/assets/data/recommendList.json`
    // };
    // axios(obj).then(item => {
    //   this.list = item.data.list;
    // });
  }
};
</script>


<style lang="scss" scoped>
.homepage-but {
  // height: 100%;
  width: 100%;
  // margin-bottom: 54px;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      height: 70vw;
      img {
        width: 95%;
        text-align: center;
      }
      p {
        width: 90%;
        text-indent: 1rem;
        height: 1.5rem;
        line-height: 1.5rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .color1 {
        color: #ff6700;
      }
    }
  }
  div {
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
  }
}
</style>
