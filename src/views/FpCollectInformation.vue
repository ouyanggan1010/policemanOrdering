<template>
  <div class="fpCollectInformation">
    <van-tabs
      class="tabTitleClass"
      title-inactive-color="#313131"
      title-active-color="#00b96b"
      line-width="75"
      color="#00b96b"
      v-model="active"
      animated
    >
      <van-tab title="信息上报">
        <InformationReport
          ref="childReport"
          :cityValParent="cityVal"
          @show_city="showPickerCity = true"
          :plantDateValParent="plantDateVal"
          @show_plantDate="showPickerDateOne = true"
          :harvestDateValParent="harvestDateVal"
          @show_harvestDate="showPickerDateTwo = true"
          :varietiesValParent="varietiesVal"
          @show_varieties="showPickerVarieties = true"
          @show_box="showRegisterBox = true"
        />
      </van-tab>
      <van-tab title="已报信息">
        <InformationReported v-if="reportRefresh" ref="childReported" />
      </van-tab>
    </van-tabs>
    <!-- 市县选择器 -->
    <van-popup v-model="showPickerCity" position="bottom">
      <van-picker
        show-toolbar
        visible-item-count="3"
        :columns="columnsCity"
        @confirm="onConfirmCity"
        @cancel="showPickerCity = false"
      />
    </van-popup>
    <!-- 品种选择器 -->
    <van-popup v-model="showPickerVarieties" position="bottom">
      <van-picker
        show-toolbar
        visible-item-count="3"
        :columns="columnsVarieties"
        @confirm="onConfirmVarieties"
        @cancel="showPickerVarieties = false"
      />
    </van-popup>
    <!-- 种植时间选择器 -->
    <van-popup v-model="showPickerDateOne" position="bottom">
      <van-datetime-picker
        v-model="currentDateOne"
        type="date"
        title="选择年月日"
        :min-date="minDateOne"
        :max-date="maxDateOne"
        :formatter="formatter"
        @confirm="onConfirmDateOne"
        @cancel="showPickerDateOne = false"
      />
    </van-popup>
    <!-- 收获时间选择器 -->
    <van-popup v-model="showPickerDateTwo" position="bottom">
      <van-datetime-picker
        v-model="currentDateTwo"
        type="date"
        title="选择年月日"
        :min-date="minDateTwo"
        :max-date="maxDateTwo"
        :formatter="formatter"
        @confirm="onConfirmDateTwo"
        @cancel="showPickerDateTwo = false"
      />
    </van-popup>
    <!-- 完成弹框 -->
    <SimpleBox
      :objBox="{
        show: showRegisterBox,
        overlay: false,
        icon: 'myIcon-registerSuccess',
        textStr: '提交成功',
        isBtnOne: true,
        btnOneStr: '确定',
      }"
      @box_determine="registerBtn"
    ></SimpleBox>
  </div>
</template>
<script>
import InformationReport from "../components/InformationReport.vue";
import InformationReported from "../components/InformationReported.vue";
import SimpleBox from "../components/SimpleBox.vue";
export default {
  name: "FpCollectInformation",
  components: {
    InformationReport,
    InformationReported,
    SimpleBox,
  },
  data() {
    return {
      active: 0,
      // 选择市县
      columnsCity: ["海口市", "三亚市", "文昌市", "琼海市", "万宁市"],
      showPickerCity: false,
      cityVal: "",
      // 选择品种
      columnsVarieties: ["品种一", "品种二", "品种三", "品种四", "品种五"],
      showPickerVarieties: false,
      varietiesVal: "",
      // 选择种植时间
      minDateOne: new Date(2010, 0, 1),
      maxDateOne: new Date(3000, 10, 1),
      currentDateOne: new Date(),
      plantDateVal: "",
      showPickerDateOne: false,
      // 选择收获时间
      minDateTwo: new Date(2010, 0, 1),
      maxDateTwo: new Date(3000, 10, 1),
      currentDateTwo: new Date(),
      harvestDateVal: "",
      showPickerDateTwo: false,
      // 完成弹框
      showRegisterBox: false,
      // 信息上报子组件的显示隐藏
      reportRefresh: true,
    };
  },
  computed: {},
  methods: {
    // --------------市县选择
    onConfirmCity(value) {
      this.cityVal = value;
      this.showPickerCity = false;
    },
    // --------------品种选择
    onConfirmVarieties(value) {
      this.varietiesVal = value;
      this.showPickerVarieties = false;
    },
    // --------------种植时间选择
    onConfirmDateOne(value) {
      this.plantDateVal = this.$dayjs(value).format("YYYY年MM月DD日");
      this.showPickerDateOne = false;
    },
    // --------------收获时间选择
    onConfirmDateTwo(value) {
      this.harvestDateVal = this.$dayjs(value).format("YYYY年MM月DD日");
      this.showPickerDateTwo = false;
    },
    // --------------格式化时间选择器的时间
    formatter(type, val) {
      if (type === "year") {
        return val + "年";
      }
      if (type === "month") {
        return val + "月";
      }
      if (type === "day") {
        return val + "日";
      }
      return val;
    },
    // --------------弹框点击确定按钮
    registerBtn() {
      this.$refs.childReport.resetReport();
      // 清空父元素的数据
      Object.assign(this.$data, this.$options.data());
      // 显示上报信息的子组件
      this.showRegisterBox = false;
      // 强制刷新子组件
      this.reportRefresh = false;
      this.$nextTick(() => {
        this.reportRefresh = true;
        this.active = 1;
      });
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.fpCollectInformation {
  height: calc(100vh - 132.47px);
  overflow-y: hidden;
  .tabTitleClass {
    .van-tabs__wrap {
      height: 120px !important;
    }
    .van-tab {
      font-weight: 600;
    }
  }
}
</style>

