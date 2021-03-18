<template>
  <div class="productPrices">
    <van-tabs
      class="tabTitleClass"
      title-inactive-color="#313131"
      title-active-color="#00b96b"
      line-width="75"
      color="#00b96b"
      v-model="active"
      animated
    >
      <van-tab title="冬季瓜菜" name="melons">
        <WinterMelons
          @open_sdate="pickerStartDate = true"
          @open_edate="pickerEndDate = true"
          :melonsObj="{
            startDate: selectMelonsSDate,
            endDate: selectMelonsEDate,
          }"
        />
      </van-tab>
      <van-tab title="常年蔬菜" name="vegetables">
        <PerennialVegetables
          @open_sdate="pickerStartDate = true"
          @open_edate="pickerEndDate = true"
          :melonsObj="{
            startDate: selectVegetablesSDate,
            endDate: selectVegetablesEDate,
          }"
        />
      </van-tab>
      <van-tab title="畜禽产品" name="livestock">
        <LivestockProducts />
      </van-tab>
    </van-tabs>
    <!-- 开始时间弹框 -->
    <van-popup v-model="pickerStartDate" position="bottom">
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
    <van-popup v-model="pickerEndDate" position="bottom">
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
import WinterMelons from "../components/WinterMelons.vue";
import PerennialVegetables from "../components/PerennialVegetables.vue";
import LivestockProducts from "../components/LivestockProducts.vue";

export default {
  name: "ProductPrices",
  components: {
    WinterMelons,
    PerennialVegetables,
    LivestockProducts,
  },
  data() {
    return {
      active: "melons",
      // ------------------开始时间弹框
      pickerStartDate: false,
      currentStartDate: new Date(),
      // 冬季瓜菜
      selectMelonsSDate: "",
      // 常年蔬菜
      selectVegetablesSDate: "",
      // 畜禽产品
      selectLivestockSDate: "",
      // ------------------结束时间弹框
      pickerEndDate: false,
      maxEndDate: new Date(),
      currentEndDate: new Date(),
      // 冬季瓜菜
      selectMelonsEDate: "",
      // 常年蔬菜
      selectVegetablesEDate: "",
      // 畜禽产品
      selectLivestockEDate: "",
    };
  },
  computed: {
    //根据当前选择项来判断是属于哪个模块
    selectStartDate() {
      if (this.active == "melons") {
        return this.selectMelonsSDate;
      } else if (this.active == "vegetables") {
        return this.selectVegetablesSDate;
      } else if (this.active == "livestock") {
        return this.selectLivestockSDate;
      }else{
        return "";
      }
    },
    selectEndDate() {
      if (this.active == "melons") {
        return this.selectMelonsEDate;
      } else if (this.active == "vegetables") {
        return this.selectVegetablesEDate;
      } else if (this.active == "livestock") {
        return this.selectLivestockEDate;
      }else{
        return "";
      }
    },
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
      this.selectStartDate = this.$dayjs(value).format("YYYY-MM-DD");
    },
    // ------------------结束时间的确定按钮
    yesEndDate(value) {
      this.pickerEndDate = false;
      this.selectEndDate = this.$dayjs(value).format("YYYY-MM-DD");
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.ProductPrices {
}
</style>
