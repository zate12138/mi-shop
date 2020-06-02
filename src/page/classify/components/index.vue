 <template>
  <div>
    <ul class="classify-right-top">
      <li>
        <img :src="list.titleImg">
        <p>---{{list.name}}---</p>
        <ul>
          <li v-for="item of list.list" :key="item.id">
            <router-link :to="{name :'shopdeta',query: { redirect: item.id }}">
              <img :src="item.img">
              <p>{{item.name}}</p>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "product",
  props: ["list"]
};
</script>


<style lang="scss" scoped>
.classify-right-top {
  width: 100%;
  // height: 100%;
  li {
    img {
      width: 90%;
      height: 35vw;
      text-align: center;
    }
    p {
      margin: 3vw 0 3vw 0;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      margin: 0 auto;
      text-align: center;
      li {
        width: 33.3%;
        height: 25vw;
        img {
          width: 50%;
          height: 15vw;
        }
        p {
          margin-top: 2.5vw;
          font-size: 2.2vw;
        }
      }
    }
  }
}
</style>


