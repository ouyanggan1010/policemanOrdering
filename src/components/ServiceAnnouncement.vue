<template>
  <div class="serviceAnnouncement">
    <!-- 搜索 -->
    <van-search
      v-model="serchValueOne"
      shape="round"
      placeholder="姓名/所在市"
      class="van-hairline--top"
    />
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
          to="/serviceAnnouncement"
          class="card"
          v-for="(list, index) in lists"
          :key="index"
        >
          <!-- 补贴情况公告 -->
          <div
            class="heightDiv-88 bg-green-6b fs-36 text-white fw-6 pl-30 box-b d-flex ai-center"
          >
            购机者姓名 ：王长经
          </div>
          <div class="bg-white box-b px-30">
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
        </router-link>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  name: "ServiceAnnouncement",
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
      /// 补贴情况公告--搜索
      serchValueOne: "",
    };
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
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.serviceAnnouncement {
  height: calc(100vh - 132.47px - 126.72px);
  .filterQa {
    position: relative;
    height: 124px;
    &.active::after {
      position: absolute;
      box-sizing: border-box;
      content: " ";
      pointer-events: none;
      top: 0;
      right: -50%;
      bottom: 0;
      left: -50%;
      border: 0 solid #ebedf0;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      border-right-width: 0.02667rem;
    }
  }
  .qaPopoverList {
    width: 50%;
    box-sizing: border-box;
  }
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
