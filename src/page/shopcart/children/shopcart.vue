 <template>
  <div class="details">
    <ul>
      <li v-for="(item,index) of getitem.list" :key="index">
        <div class="details-a1">
          <input type="checkbox" v-model="getitem.listflag[index].flag">
        </div>
        <div class="details-a2">
          <img :src="item.imgUrl">
        </div>
        <div class="details-a3">
          <p>{{item.title}}</p>
          <p>售价：{{item.price}} 元</p>
          <p>
            <span @click="decrease(item)">-</span>
            <span>{{item.count}}</span>
            <span @click="increase(item)">+</span>
          </p>
        </div>
        <div class="details-a4">
          <span class="iconfont icon-lajitong" @click="del(item)"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "shopcarts",
  props: ["getitem"],
  methods: {
    ...Vuex.mapMutations(["increase", "decrease","del"])
  }
};
</script>

<style lang="scss" scoped>
.details {
  ul {
    li {
      display: flex;
      align-items: center;
      width: 100%;
      height: 24vw;
      background: #fff;
      border-bottom: 1px solid #f2f2f2;
      .details-a1 {
        width: 10%;
        text-align: center;
      }
      .details-a2 {
        width: 20%;
        img {
          width: 95%;
        }
      }
      .details-a3 {
        width: 60%;
        margin-left: 1.5rem;
        span {
          display: inline-block;
          width: 7vw;
          height: 7vw;
          border: 1px solid #999;
          text-align: center;
          box-sizing: border-box;
        }
      }
      .details-a4 {
        width: 10%;
        margin-top: 14vw;
        height: 50%;
        .iconfont.icon-lajitong {
          font-size: 8vw;
        }
      }
    }
  }
}
</style>


