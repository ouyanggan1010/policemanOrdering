<template>
  <div class="serviceAnnouncement">
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
          :to="getLink(list)"
          class="card"
          v-for="(list, index) in lists"
          :key="index"
        >
          <!-- 补贴情况公告 -->
          <div
            class="heightDiv-88 bg-green-6b fs-36 text-white fw-6 pl-30 box-b d-flex ai-center"
            v-if="active == 'announcement'"
          >
            购机者姓名 ：王长经
          </div>
          <div class="bg-white box-b px-30" v-if="active == 'announcement'">
            <div class="d-flex ai-center box-b py-30 fs-36 text-black-31 fw-6">
              <div class="widthPer-2">所在市：海口市</div>
              <div class="widthPer-2">状态：已结算</div>
            </div>
            <div
              class="van-hairline--top d-flex ai-center box-b py-30 fs-36 text-black-31 fw-6"
            >
              <div class="widthPer-2">机具品目：旋耕机</div>
              <div class="widthPer-2">机具型号：1GQNKG-200</div>
            </div>
          </div>
          <!-- 资金使用情况 -->
          <div
            class="heightDiv-88 bg-green-6b fs-36 text-white fw-6 pl-30 box-b d-flex ai-center"
            v-if="active == 'situation'"
          >
            所在市：王长经
          </div>
          <div class="bg-white box-b px-30" v-if="active == 'situation'">
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
          <!-- 补贴产品查询 -->
          <div
            class="heightDiv-88 bg-green-6b fs-36 text-white fw-6 pl-30 box-b d-flex ai-center"
            v-if="active == 'search'"
          >
            分档名称：王长经
          </div>
          <div class="bg-white box-b px-30" v-if="active == 'search'">
            <div class="d-flex ai-center box-b py-30 fs-36 text-black-31 fw-6">
              <div class="widthPer-2">产品名称：海口市海口市</div>
              <div class="widthPer-2">规格型号：已结算</div>
            </div>
            <div
              class="van-ellipsis van-hairline--top box-b py-30 fs-36 text-black-31 fw-6"
            >
              生产企业：旋耕机旋耕机旋耕机旋耕机旋耕机旋耕机旋耕机耕机旋耕机旋耕耕机旋耕机旋耕
            </div>
            <div
              class="van-hairline--top d-flex ai-center box-b py-30 fs-36 text-black-31 fw-6"
            >
              <div class="widthPer-2">中央补贴额：海口市</div>
              <div class="widthPer-2">省补贴额：已结算</div>
            </div>
          </div>
        </router-link>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  name: "ServiceAnnouncement",
  props: {
    type: String,
  },
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
      // 当前是哪个列表项
      active: "announcement",
    };
  },
  watch: {
    type(val) {
      this.active = val;
    },
  },
  computed: {},
  methods: {
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
        if (this.lists.length >= 3) {
          console.log(this.lists.length);
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      // 重新加载数据
      this.onLoad();
    },
    // ------------跳转
    getLink() {
      if (this.active == "announcement") {
        return "/serviceAnnouncement";
      } else if (this.active == "situation") {
        return "/serviceSituation";
      } else if (this.active == "search") {
        return '/serviceSearch'
      }
    },
  },
  mounted() {
    // 初始进入的赋值，否则会在watch前就已经赋值，后续赋值无用
    this.active = this.type;
  },
};
</script>
<style lang="scss" rel="stylesheet/scss">
.serviceAnnouncement {
  height: calc(100vh - 132.47px - 126.72px - 155.38px);
  .listMinH {
    height: 100%;
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
