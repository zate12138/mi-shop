 <template>
  <div class="cart-but">
    <div>
      <p>
        共
        <span>{{total.count}}</span>件 金额
      </p>
      <p>
        <span>{{total.price}}</span>元
      </p>
    </div>
    <router-link :to="{name:'classify'}" class="but-a1">继续购物</router-link>
    <router-link :to="{name:'home'}" class="but-a2">去结算</router-link>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "shopnav",
  computed: {
    ...Vuex.mapGetters(["total"])
  }
};
</script>

<style lang="scss" scoped>
.cart-but {
  width: 100%;
  height: 54px;
  background: #fff;
  position: absolute;
  bottom: 54px;
  display: flex;
  div {
    width: 33.3%;
    height: 100%;
    text-align: center;
    p {
      line-height: 24px;
    }
  }
  .but-a1 {
    width: 33.3%;
    height: 100%;
    text-align: center;
    line-height: 54px;
    background: #f2f2f2;
  }
  .but-a2 {
    width: 33.3%;
    height: 100%;
    text-align: center;
    line-height: 54px;
    background: orange;
    color: #fff;
  }
}
</style>


