
<template>
  <span class="reverseback">
    <span @click="add" class="iconfont icon-zuojiantou"></span>
  </span>
</template>


<script>
export default {
  name: "reverseback",
  methods: {
    add() {
      this.$router.go(-1);
    }
  }
};
</script>


<style lang="scss" scoped>
.iconfont.icon-zuojiantou {
  font-size: 10vw;
}
</style>
