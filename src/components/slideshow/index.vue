


<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="/assets/imgs/a0.jpg">
      </div>
      <div class="swiper-slide">
        <img src="/assets/imgs/a2.jpg">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "lunbao",
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      },
      autoplay: {
        delay: 1500
      }
    });
  },
  methods: {
    add() {
      console.log(152225);
    }
  }
};
</script>


<style scoped lang="scss">
@import "../../../node_modules/swiper/dist/css/swiper.css";
.swiper-container {
  width: 100vw;
  height: 15rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>




