


<template>
  <div class="rollingnews">
    <ul>
      <li :class="{fade1:flag}" v-for="(item,index) of getlist" :key="index">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "rollingnews",
 

  data() {
    return {
      list :"",
      getlist: [],
      index: 0,
      flag: false
    };
  },
  created() {
    const obj = {
      method: "GET",
      url: `../../assets/data/roll.json`
    };
    axios(obj).then(item => {
      this.list = item.data.list;
    });
    // this.getlist = this.list;
    this.scroll();
  },
  watch: {
    list(value) {
      this.getlist = value.slice(0);
    }
  },
  beforeMount() {},
  methods: {
    scroll() {
      setInterval(() => {
        this.flag = true;
        setTimeout(() => {
          this.getlist.splice(0, 1);
          this.getlist.push(this.list[this.index]);
          this.index++;
          if (this.index === this.list.length - 1) {
            this.index = 0;
          }
          this.flag = false;
        }, 500);
      }, 1500);
    }
  }
};
</script>


<style scoped lang="scss">
.rollingnews {
  width: 100%;
  height: 4rem;
  border-top: 5px solid #f2f2f2;
  border-bottom: 5px solid #f2f2f2;
  ul {
    width: 100%;
    height: 100%;
    overflow: hidden;
    li {
      width: 100%;
      height: 4rem;
      line-height: 4rem;
      text-indent: 1rem;
      font-size: 4.2vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.fade1 {
  transform: translateY(-50px);
  transition: all 0.5s linear;
}
</style>




