<template>
  <div class="dateLinkage mt-24 bg-white">
    <!-- 日期 -->
    <van-form @submit="onSubmit" class="d-flex jc-center ai-center box-b py-24">
      <van-field
        class="fieldInp"
        :border="false"
        readonly
        v-model="selectStartDate"
        input-align="center"
        name="selectStartDate"
        placeholder="开始日期"
        @click="pickerStartDate = true"
      />
      <div class="text-black-31 fs-36 mx-38">至</div>
      <van-field
        class="fieldInp"
        :border="false"
        readonly
        v-model="selectEndDate"
        input-align="center"
        name="selectEndDate"
        placeholder="结束日期"
        @click="pickerEndDate = true"
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
    <!-- 开始时间弹框 -->
    <van-popup v-model="pickerStartDate" position="bottom" get-container="body">
      <van-datetime-picker
        v-model="currentStartDate"
        type="date"
        title="选择时间"
        :min-date="minStartDate"
        :max-date="maxStartDate"
        :formatter="formatter"
        @confirm="yesStartDate"
        @cancel="pickerStartDate = false"
      />
    </van-popup>
    <!-- 结束时间弹框 -->
    <van-popup v-model="pickerEndDate" position="bottom" get-container="body">
      <van-datetime-picker
        v-model="currentEndDate"
        type="date"
        title="选择时间"
        :min-date="minEndDate"
        :max-date="maxEndDate"
        :formatter="formatter"
        @confirm="yesEndDate"
        @cancel="pickerEndDate = false"
      />
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "DateLinkage",
  data() {
    return {
      // ------------------开始时间弹框
      pickerStartDate: false,
      selectStartDate: "",
      currentStartDate: new Date(),
      // ------------------结束时间弹框
      pickerEndDate: false,
      maxEndDate: new Date(),
      selectEndDate: "",
      currentEndDate: new Date(),
    };
  },
  computed: {
    // 开始时间的最小日期
    minStartDate() {
      let nowDate = new Date();
      let nowYear = nowDate.getFullYear() - 30;
      return new Date(nowYear, 0, 1);
    },
    // 开始时间的最大日期
    maxStartDate() {
      if (this.selectEndDate) {
        return new Date(this.selectEndDate);
      }
      return new Date();
    },
    // 结束时间的最小日期
    minEndDate() {
      if (this.selectStartDate) {
        return new Date(this.selectStartDate);
      }
      return this.minStartDate;
    },
  },
  methods: {
    // ------------------格式化年月日
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      } else if (type === "day") {
        return `${val}日`;
      }
      return val;
    },
    // ------------------开始时间的确定按钮
    yesStartDate(value) {
      this.pickerStartDate = false;
      const resDate = this.$dayjs(value).format("YYYY-MM-DD");
      this.selectStartDate = resDate;
    },
    // ------------------结束时间的确定按钮
    yesEndDate(value) {
      this.pickerEndDate = false;
      const resDate = this.$dayjs(value).format("YYYY-MM-DD");
      this.selectEndDate = resDate;
    },
    // --------------------------搜索日期提交
    onSubmit(val) {
      this.$emit("event_search", val);
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.dateLinkage {
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
}
</style>
