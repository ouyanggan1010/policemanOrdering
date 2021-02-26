<template>
  <div class="informationReport box-b py-50 px-34 box-b">
    <van-form @submit="onSubmit" validate-first>
      <van-cell-group :border="false" class="bg-white py-50 px-30">
        <!-- 所在市县 -->
        <van-field
          readonly
          clickable
          name="city"
          :value="city"
          placeholder="请选择所在市县"
          :rules="[{ required: true }]"
          class="bg-gray-f2"
          right-icon="arrow-down"
          @click="$emit('show_city')"
        />
        <!-- 土地坐落位置 -->
        <van-field
          v-model="address"
          name="address"
          placeholder="请输入土地坐落位置"
          autosize
          rows="1"
          type="textarea"
          class="bg-gray-f2 mt-24"
          :rules="[{ required: true }]"
        />
        <!-- 品种 -->
        <van-field
          readonly
          clickable
          name="varieties"
          :value="varieties"
          placeholder="请选择品种"
          :rules="[{ required: true }]"
          class="bg-gray-f2 mt-24"
          right-icon="arrow-down"
          @click="$emit('show_varieties')"
        />
        <!-- 两个时间选择 -->
        <div class="mt-24 d-flex jc-between ai-center">
          <!-- 种植时间 -->
          <van-field
            readonly
            clickable
            name="plantDate"
            :value="plantDate"
            placeholder="请选择种植时间"
            :rules="[{ required: true }]"
            class="bg-gray-f2 flex-1"
            right-icon="arrow-down"
            @click="$emit('show_plantDate')"
          />
          <!-- 收获时间 -->
          <van-field
            readonly
            clickable
            name="harvestDate"
            :value="harvestDate"
            placeholder="请选择收获时间"
            :rules="[{ required: true }]"
            class="bg-gray-f2 flex-1 ml-26"
            right-icon="arrow-down"
            @click="$emit('show_harvestDate')"
          />
        </div>
        <!-- 种植面积 -->
        <van-field
          v-model="plantArea"
          name="plantArea"
          placeholder="请输入种植面积（亩）"
          class="bg-gray-f2 mt-24"
          :rules="[{ required: true }]"
        />
        <!-- 收获面积 -->
        <van-field
          v-model="harvestArea"
          name="harvestArea"
          placeholder="请输入收获面积（亩）"
          class="bg-gray-f2 mt-24"
          :rules="[{ required: true }]"
        />
        <!-- 总产量 -->
        <van-field
          v-model="totalOutput"
          name="totalOutput"
          placeholder="请输入总产量（吨）"
          class="bg-gray-f2 mt-24"
          :rules="[{ required: true }]"
        />
        <!-- 投入成本 -->
        <van-field
          v-model="inputCost"
          name="inputCost"
          placeholder="请输入投入成本（万元）"
          class="bg-gray-f2 mt-24"
          :rules="[{ required: true }]"
        />
        <!-- 收货价 -->
        <van-field
          v-model="receivingPrice"
          name="receivingPrice"
          placeholder="请输入收货价（元/公斤）"
          class="bg-gray-f2 mt-24"
          :rules="[{ required: true }]"
        />
        <!-- 批发价 -->
        <van-field
          v-model="tradePrice"
          name="tradePrice"
          placeholder="请输入批发价（元/公斤）"
          class="bg-gray-f2 mt-24"
          :rules="[{ required: true }]"
        />
        <!-- 零售价 -->
        <van-field
          v-model="retailPrice"
          name="retailPrice"
          placeholder="请输入零售价（元/公斤）"
          class="bg-gray-f2 mt-24"
          :rules="[{ required: true }]"
        />
        <!-- 总产值 -->
        <van-field
          v-model="totalOutputValue"
          name="totalOutputValue"
          placeholder="请输入总产值（万元）"
          class="bg-gray-f2 mt-24"
          :rules="[{ required: true }]"
        />
      </van-cell-group>
      <div class="mt-100">
        <van-button block color="#00b96b" type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  name: "InformationReport",
  props: {
    cityValParent: String,
    plantDateValParent: String,
    harvestDateValParent: String,
    varietiesValParent: String,
  },
  data() {
    return {
      // 市县
      city: "",
      // 土地坐落位置
      address: "",
      // 品种
      varieties: "",
      // 种植时间
      plantDate: "",
      // 收获时间
      harvestDate: "",
      // 种植面积
      plantArea: "",
      // 收获面积
      harvestArea: "",
      // 总产量
      totalOutput: "",
      // 投入成本
      inputCost: "",
      // 收货价
      receivingPrice: "",
      // 批发价
      tradePrice: "",
      // 零售价
      retailPrice: "",
      // 总产值
      totalOutputValue: "",
    };
  },
  watch: {
    // 监听父组件市县值的改变
    cityValParent(val) {
      this.city = val;
    },
    // 监听父组件品种值的改变
    varietiesValParent(val) {
      this.varieties = val;
    },
    // 监听父组件种植时间值的改变
    plantDateValParent(val) {
      this.plantDate = val;
    },
    // 监听父组件收获时间值的改变
    harvestDateValParent(val) {
      this.harvestDate = val;
    },
  },
  computed: {},
  methods: {
    // --------------提交按钮
    onSubmit(values) {
      console.log("submit", values);
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.informationReport {
  height: calc(100vh - 132.47px - 120px);
  overflow-y: auto;
}
</style>
