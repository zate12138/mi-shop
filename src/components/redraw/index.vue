
<template>
  <div ref="pullRefresh" class="pull-refresh">
    <div ref="tipBox" class="tip-box">
      <div>{{tipInfo}}</div>
    </div>
    <div ref="refresh" class="refresh-box" :class="{trans:isTrans}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "redraw",
  data() {
    return {
      startY: "",
      pullDistance: 0,
      tipInfo: "",
      el: null,
      tipBoxHeight: 0,
      isTrans: false
    };
  },
  methods: {
    bindTouchEvent() {
      this.el.addEventListener("touchstart", this.touchStart);
      this.el.addEventListener("touchmove", this.touchMove);
      this.el.addEventListener("touchend", this.touchEnd);
    },
    touchStart(e) {
      this.tipBoxHeight = this.$refs.tipBox.offsetHeight;
      this.isTrans = false;
      let touch = e.changedTouches[0];
      this.startY = touch.clientY;
      this.tipInfo = "下拉刷新";
    },
    touchMove(e) {
      if (this.$refs.pullRefresh.scrollTop !== 0) {
        return;
      }
      let touch = e.changedTouches[0];
      let move = touch.clientY - this.startY;
      if (move > 0 && move < this.tipBoxHeight * 2) {
        this.el.style.marginTop = move + "px";
        this.pullDistance = move;
        if (move > this.tipBoxHeight) {
          this.tipInfo = "松开即可刷新";
        } else {
          this.tipInfo = "下拉刷新";
        }
      }
    },
    touchEnd() {
      if (this.$refs.pullRefresh.scrollTop !== 0) {
        return;
      }
      this.isTrans = true;
      if (this.pullDistance > this.tipBoxHeight) {
        this.tipInfo = "数据加载中...";
        new Promise(resolve => {
          this.$emit("load", resolve);
        }).then(() => {
          this.resetBox();
        });
      } else {
        this.resetBox();
      }
    },
    resetBox() {
      if (this.pullDistance > 0) {
        this.el.style.marginTop = 0;
        this.el.style.transition = "all 0.25s";
      }
      this.tipInfo = "下拉刷新";
      this.pullDistance = 0;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.el = this.$refs.refresh;
      this.bindTouchEvent();
    });
  }
};
</script>

<style lang="scss" scoped>
.pull-refresh {
  position: relative;
  height: 100%;
  overflow-y: scroll;
  .tip-box {
    position: absolute;
    width: 100%;
    height: 20vw;
    text-align: center;
  }
  .refresh-box {
    position: absolute;
    width: 100%;
  }
  .trans {
    transition: top 0.5s;
  }
}
</style>
