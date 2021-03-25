<template>
  <div
    class="dropDownMenu d-flex ai-center jc-between bg-white van-hairline--top"
  >
    <!-- 所有下拉菜单 -->
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
            {{ selectedOne ? selectedOne : nameOne }}
          </div>
          <van-icon class="text-gray-c8 fs-52" name="arrow-down" />
        </div>
      </template>
      <div class="popoverclassLists box-b px-24">
        <div
          class="popoverList van-hairline--top popoverWidth1 fs-36 fw-6 text-black-31 d-flex jc-between ai-center px-22"
          v-for="(popoverOne, i) in dataOne"
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
            {{ selectedTwo ? selectedTwo : nameTwo }}
          </div>
          <van-icon class="text-gray-c8 fs-52" name="arrow-down" />
        </div>
      </template>
      <div class="popoverclassLists box-b px-24 py-20">
        <div
          class="popoverList van-hairline--top popoverWidth1 fs-36 fw-6 text-black-31 d-flex jc-between ai-center px-22"
          v-for="(popoverTwo, j) in dataTwo"
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
</template>
<script>
export default {
  name: "DropDownMenu",
  props: {
    dataOne: Array,
    dataTwo: Array,
    nameOne: String,
    nameTwo: String,
  },
  data() {
    return {
      // ------------------第一个下拉选项
      // 下拉菜单
      showPopoverOne: false,
      // 勾选项
      activeOne: "",
      // 选中项
      selectedOne: "",
      // ------------------第二个下拉选项
      // 下拉菜单
      showPopoverTwo: false,
      // 勾选项
      activeTwo: "",
      // 选中项
      selectedTwo: "",
    };
  },
  computed: {},
  methods: {
    // --------------------------下拉菜单选项的点击事件
    changePopover(index, type) {
      if (type == "1") {
        this.activeOne = index + "";
        this.showPopoverOne = false;
        this.selectedOne = this.dataOne[index];
        // 将选中的值传给父组件，在附件进行使用
        this.$emit("event_arry", { type, selected: this.selectedOne });
      } else {
        this.activeTwo = index + "";
        this.showPopoverTwo = false;
        this.selectedTwo = this.dataTwo[index];
        // 将选中的值传给父组件，在附件进行使用
        this.$emit("event_arry", { type, selected: this.selectedTwo });
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.dropDownMenu {
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
