<template>
  <div class="serviceFundUsage">
    <!-- 所有下拉菜单 -->
    <div class="d-flex ai-center jc-between bg-white van-hairline--top">
      <!-- 下拉菜单1 -->
      <van-popover
        class="qaPopoverList"
        v-model="showPopoverOne"
        trigger="click"
        overlay
      >
        <template #reference>
          <div
            class="filterQa active d-flex ai-center jc-between box-b pl-50 pr-74"
          >
            <div class="fs-36 fw-6 text-black-31">
              {{ selectedOne ? selectedOne : "所在市" }}
            </div>
            <van-icon class="text-gray-c8 fs-52" name="arrow-down" />
          </div>
        </template>
        <div class="popoverclassLists box-b px-24">
          <div
            class="popoverList van-hairline--top popoverWidth1 fs-36 fw-6 text-black-31 d-flex jc-between ai-center px-22"
            v-for="(popoverOne, i) in popoverArryOne"
            :key="popoverOne"
            @click="changePopover(i, 1)"
          >
            <div>{{ popoverOne }}</div>
            <span
              v-if="activeOne && activeOne == i"
              class="myIcon-checkBlue"
            ></span>
          </div>
        </div>
      </van-popover>
      <!-- 下拉菜单2 -->
      <van-popover
        class="qaPopoverList"
        v-model="showPopoverTwo"
        trigger="click"
        overlay
      >
        <template #reference>
          <div class="filterQa d-flex ai-center jc-between box-b pl-50 pr-74">
            <div class="fs-36 fw-6 text-black-31">
              {{ selectedTwo ? selectedTwo : "是否含报废" }}
            </div>
            <van-icon class="text-gray-c8 fs-52" name="arrow-down" />
          </div>
        </template>
        <div class="popoverclassLists box-b px-24 py-20">
          <div
            class="popoverList van-hairline--top popoverWidth1 fs-36 fw-6 text-black-31 d-flex jc-between ai-center px-22"
            v-for="(popoverTwo, j) in popoverArryTwo"
            :key="popoverTwo"
            @click="changePopover(j, 2)"
          >
            <div>{{ popoverTwo }}</div>
            <span
              v-if="activeTwo && activeTwo == j"
              class="myIcon-checkBlue"
            ></span>
          </div>
        </div>
      </van-popover>
    </div>
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
export default {
  name: "ServiceFundUsage",
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
      // ------------------按问答类型筛选
      // 下拉菜单
      showPopoverOne: false,
      // 勾选项
      activeOne: "",
      // 数据
      popoverArryOne: ["全部", "类型一", "类型二"],
      // 选中项
      selectedOne: "",
      // ------------------按问答状态筛选
      // 下拉菜单
      showPopoverTwo: false,
      // 勾选项
      activeTwo: "",
      // 数据
      popoverArryTwo: ["全部", "已回答", "未回答"],
      // 选中项
      selectedTwo: "",
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 下来菜单选项的点击事件
    changePopover(index, type) {
      if (type == "1") {
        this.activeOne = index + "";
        this.showPopoverOne = false;
        this.selectedOne = this.popoverArryOne[index];
      } else {
        this.activeTwo = index + "";
        this.showPopoverTwo = false;
        this.selectedTwo = this.popoverArryTwo[index];
      }
    },
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
