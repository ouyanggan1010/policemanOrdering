<template>
  <div class="winterMelons">
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
              {{ selectedOne ? selectedOne : "品种名称" }}
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
              {{ selectedTwo ? selectedTwo : "市场" }}
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
    <!-- 日期 -->
    <van-form
      @submit="onSubmit"
      class="mt-24 bg-white d-flex jc-center ai-center box-b py-24"
    >
      <van-field
        class="fieldInp"
        :border="false"
        readonly
        v-model="startDate"
        input-align="center"
        name="startDate"
        placeholder="开始日期"
        @click="$emit('open_sdate')"
      />
      <div class="text-black-31 fs-36 mx-38">至</div>
      <van-field
        class="fieldInp"
        :border="false"
        readonly
        v-model="endDate"
        input-align="center"
        name="endDate"
        placeholder="结束日期"
        @click="$emit('open_edate')"
      />
      <div class="subBtn ml-50">
        <van-button
          color="#fb9801"
          block
          size="small"
          type="info"
          native-type="submit"
          >查询</van-button
        >
      </div>
    </van-form>
    <!-- 表格 -->
    <div class="mt-50 box-b px-30" v-if="tableList.length > 0">
      <div>
        <div class="minH box-b py-10 px-8 bg-green-6b d-flex fs-32 text-white">
          <div
            class="d-flex ai-center flex-column jc-center widthP1 text-center"
          >
            品种名称
          </div>
          <div
            class="d-flex ai-center flex-column jc-center widthP2 text-center"
          >
            市场
          </div>
          <div class="d-flex ai-center flex-column jc-center widthP3">
            <div class="text-center">最低价</div>
            <div class="text-center">(元/公斤)</div>
          </div>
          <div class="d-flex ai-center flex-column jc-center widthP4">
            <div class="text-center">最高价</div>
            <div class="text-center">(元/公斤)</div>
          </div>
        </div>
        <div class="box-b py-14 px-8 borderTab bg-white">
          <div
            class="minH box-b py-10 d-flex fs-36 text-black-31"
            v-for="list in tableList"
            :key="list.id"
          >
            <div
              class="d-flex ai-center flex-column jc-center widthP1 text-center box-b px-8"
            >
              {{ list.varietyName }}
            </div>
            <div
              class="d-flex ai-center flex-column jc-center widthP2 text-center box-b px-8"
            >
              {{ list.market }}
            </div>
            <div
              class="d-flex ai-center flex-column jc-center widthP3 text-center box-b px-8"
            >
              {{ list.lowestPrice }}
            </div>
            <div
              class="d-flex ai-center flex-column jc-center widthP4 text-center box-b px-8"
            >
              {{ list.highestPrice }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容为空 -->
    <van-empty v-else description="内容为空，请重新搜索" />
  </div>
</template>
<script>
export default {
  name: "WinterMelons",
  props: {
    melonsObj: Object,
  },
  watch: {
    "melonsObj.startDate"(val) {
      this.startDate = val;
    },
    "melonsObj.endDate"(val) {
      this.endDate = val;
    },
  },
  data() {
    return {
      // ------------------品种名称
      // 下拉菜单
      showPopoverOne: false,
      // 勾选项
      activeOne: "",
      // 数据
      popoverArryOne: ["木瓜", "番石榴", "莲雾"],
      // 选中项
      selectedOne: "",
      // ------------------市场
      // 下拉菜单
      showPopoverTwo: false,
      // 勾选项
      activeTwo: "",
      // 数据
      popoverArryTwo: ["城东市场", "坡博市场", "六和市场"],
      // 选中项
      selectedTwo: "",
      // ------------------搜索
      startDate: "",
      endDate: "",
      // ------------------表格内容
      tableList: [
        {
          id: "id_01",
          varietyName: "泡椒",
          market: "合肥周谷堆市场",
          lowestPrice: "3",
          highestPrice: "4.6",
        },
      ],
    };
  },
  computed: {},
  methods: {
    // --------------------------下来菜单选项的点击事件
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
    // --------------------------搜索日期提交
    onSubmit() {},
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.winterMelons {
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
  .subBtn {
    width: 138px;
    .van-button {
      width: 100%;
    }
  }
  .fieldInp {
    padding: 0;
    height: 92.16px;
    width: 328px;
    border: 0.02667rem solid #00b96b;
    border-radius: 10px;
    .van-field__body {
      height: 100%;
    }
  }
  .minH {
    min-height: 88px;
  }
  .widthP1 {
    width: 24%;
  }
  .widthP2 {
    width: 30%;
  }
  .widthP3 {
    width: 23%;
  }
  .widthP4 {
    width: 23%;
  }
  .borderTab {
    border-left: 0.028rem dashed #239688;
    border-right: 0.028rem dashed #239688;
    border-bottom: 0.028rem dashed #239688;
    > div {
      &:nth-child(odd) {
        background-color: #ffffff;
      }
      &:nth-child(even) {
        background-color: #f2f2f2;
      }
    }
  }
}
</style>
