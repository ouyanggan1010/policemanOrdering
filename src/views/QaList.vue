<template>
  <div class="qaList box-b pt-50 px-36">
    <!-- 搜索 -->
    <van-search v-model="serchValue" shape="round" placeholder="关键字搜索" />
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
              {{ selectedOne ? selectedOne : "按问答类型筛选" }}
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
              {{ selectedTwo ? selectedTwo : "按问答状态筛选" }}
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
    <!-- 列表部分 -->
    <AskList type="qaList"></AskList>
  </div>
</template>
<script>
import AskList from "../components/AskList.vue";
export default {
  name: "QaList",
  components: {
    AskList,
  },
  data() {
    return {
      serchValue: "",
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
  computed: {},
  methods: {
    // 下来菜单选项的点击事件
    changePopover(index, type) {
      if (type == "1") {
        this.activeOne = index;
        this.showPopoverOne = false;
        this.selectedOne = this.popoverArryOne[index];
      } else {
        this.activeTwo = index;
        this.showPopoverTwo = false;
        this.selectedTwo = this.popoverArryTwo[index];
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.qaList {
  height: calc(100vh - 132.47px - 143.98px);
  .borderTop {
    // border-top: 1px solid #e5e5e5;
  }
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
}
</style>
