<template>
  <div class="serviceFundUsage">
    <!-- 下拉菜单 -->
    <DropDownMenu
      :dataOne="popoverArryOne"
      :dataTwo="popoverArryTwo"
      :nameOne="popoverNameOne"
      :nameTwo="popoverNameTwo"
      @event_arry="onPopover"
    />
    <!-- 下拉刷新、上拉加载 -->
    <van-pull-refresh
      class="listMinH"
      v-model="refreshing"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        class="cards"
      >
        <router-link
          tag="div"
          to="/serviceSituation"
          class="card"
          v-for="(list, index) in lists"
          :key="index"
        >
          <!-- 资金使用情况 -->
          <div
            class="heightDiv-88 bg-green-6b fs-36 text-white fw-6 pl-30 box-b d-flex ai-center"
          >
            所在市：王长经
          </div>
          <div class="bg-white box-b px-30">
            <div class="d-flex ai-center box-b py-30 fs-36 text-black-31 fw-6">
              <div class="widthPer-2">所在县：海口市</div>
              <div class="widthPer-2">是否含报废：已结算</div>
            </div>
            <div
              class="van-hairline--top d-flex ai-center box-b py-30 fs-36 text-black-31 fw-6"
            >
              <div class="widthPer-2">投入资金(中央)：42154687</div>
              <div class="widthPer-2">投入资金(省)：42154687</div>
            </div>
          </div>
        </router-link>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import DropDownMenu from "../components/DropDownMenu.vue";
export default {
  name: "ServiceFundUsage",
  components: {
    DropDownMenu,
  },
  props: {},
  data() {
    return {
      // 列表上拉加载
      loading: false,
      // 是否有数据
      finished: false,
      // 下拉刷新
      refreshing: false,
      // 列表数据
      lists: [],
      // 列表总数
      count: 0,
      // ------------------下拉菜单1数据
      popoverArryOne: ["海口", "三亚", "琼海"],
      popoverNameOne: "所在市",
      // ------------------下拉菜单2数据
      popoverArryTwo: ["是", "否"],
      popoverNameTwo: "是否含报废",
    };
  },
  watch: {},
  computed: {},
  methods: {
    // --------------------------下拉菜单选中提交请求
    onPopover(data) {
      console.log(data);
    },
    // --------------------------加载
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.lists = [];
          this.refreshing = false;
          this.count = 0;
        }
        const total = this.count + 1;
        // 请求数据
        for (let i = this.count; i < total; i++) {
          this.lists.push({
            id: `id_01010${i + 1}`,
          });
          this.count = this.count + 1;
        }
        this.loading = false;
        // 请求的数据为空的时候
        if (this.lists.length >= 5) {
          console.log(this.lists.length);
          this.finished = true;
        }
      }, 1000);
    },
    // --------------------------刷新 
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      // 重新加载数据
      this.onLoad();
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.serviceFundUsage {
  height: calc(100vh - 132.47px - 126.72px);
  .listMinH {
    height: calc(100% - 125px);
    overflow-y: auto;
    padding-top: 50px;
    box-sizing: border-box;
  }
  .cards {
    padding: 0 32px;
    box-sizing: border-box;
    > .card {
      margin-top: 50px;
      box-sizing: border-box;
      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>
