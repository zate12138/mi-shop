
<template>
  <div id="app">
    <transition name="over" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <transition name="move" appear>
      <homenav v-show="isShow" class="app-header"></homenav>
    </transition>
  </div>
</template>

<script>
import homenav from "./components/homenav";
export default {
  name: "app",
  data() {
    return {
      showRoutes: [
        "home",
        "classify",
        "shopcart",
        "mine",
        "minelogin",
        "minepou"
      ]
    };
  },
  computed: {
    isShow() {
      return this.showRoutes.indexOf(this.$route.name) !== -1;
    }
  },
  components: {
    homenav
  }
};
</script>



<style scoped lang="scss">
html {
  font-size: 10px;
}

.move-enter,
.move-leave-to {
  transform: translateY(100%);
}

.move-enter-active,
.move-leave-active {
  transition: transform 0.4s;
}

// .over-enter,
// .over-leave-to {
//   transform: translateX(100%);
// }
// .move-leave{
// transform: translateX(-100%);
// }

// .over-enter-active,
// .over-leave-active {
//   transition: transform 0.4s;
// }
.over-enter {
  transform: translateX(100%);
}

.over-enter-active {
  transition: transform 0.4s;
}

#app {
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 720px;
  margin: 0 auto;
  .app-header {
    position: absolute;
    bottom: 0;
  }
}

/* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
</style>
