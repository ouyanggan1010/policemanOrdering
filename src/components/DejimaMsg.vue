<template>
  <div class="dejimaMsg">
    <!-- 数据时间段选择 -->
    <SelectDate class="mt-26" @event_getDate="dateGetData" />
    <!-- 全部数据 -->
    <div class="box-b pb-50">
      <!-- 出岛综合分析 -->
      <div class="mt-26">
        <div class="box-b py-26 px-32 fs-36 text-black-31 fw-6">
          出岛综合分析
        </div>
        <!-- 图表 -->
        <div class="box-b p-32 bg-white d-flex jc-between">
          <div class="flex-1 pieCard mr-32">
            <div class="box-b pt-38 pb-20 px-20">
              <div
                class="title text-white fw-6 fs-30 d-flex ai-center jc-center text-center"
              >
                全省出岛总吨数：25443.23
              </div>
              <v-chart class="chartPie" :option="optionPieOne" />
            </div>
          </div>
          <div class="flex-1 pieCard">
            <div class="box-b pt-38 pb-20 px-20">
              <div
                class="title text-white fw-6 fs-30 d-flex ai-center jc-center text-center"
              >
                全省出岛车辆总数：1885
              </div>
              <v-chart class="chartPie" :option="optionPieTwo" />
            </div>
          </div>
        </div>
      </div>
      <!-- 按市县出岛车辆排名Top 10 -->
      <div class="mt-26">
        <div class="box-b py-26 px-32 fs-36 text-black-31 fw-6">
          按市县出岛车辆排名Top 10
        </div>
        <!-- 图表 -->
        <div class="box-b p-32 bg-white">
          <div class="tabsCard mt-16">
            <van-tabs type="card">
              <van-tab title="省外">
                <v-chart class="chartLine" :option="optionLineVehicleOne" />
              </van-tab>
              <van-tab title="省内">
                <v-chart class="chartLine" :option="optionLineVehicleTwo" />
              </van-tab>
            </van-tabs>
          </div>
        </div>
      </div>
      <!-- 按市县出岛吨数排名Top 10 -->
      <div class="mt-26">
        <div class="box-b py-26 px-32 fs-36 text-black-31 fw-6">
          按市县出岛吨数排名Top 10
        </div>
        <!-- 图表 -->
        <div class="box-b p-32 bg-white">
          <div class="tabsCard mt-16">
            <van-tabs type="card">
              <van-tab title="省外">
                <v-chart class="chartLine" :option="optionLineTonnesOne" />
              </van-tab>
              <van-tab title="省内">
                <v-chart class="chartLine" :option="optionLineTonnesTwo" />
              </van-tab>
            </van-tabs>
          </div>
        </div>
      </div>
      <!-- 按品种出岛信息排名Top 10 -->
      <div class="mt-26">
        <div class="box-b py-26 px-32 fs-36 text-black-31 fw-6">
          按品种出岛信息排名Top 10
        </div>
        <!-- 图表 -->
        <div class="box-b p-32 bg-white">
          <div class="tabsCard mt-16">
            <van-tabs type="card">
              <van-tab title="车辆">
                <v-chart class="chartLine" :option="optionLineMessageOne" />
              </van-tab>
              <van-tab title="吨数">
                <v-chart class="chartLine" :option="optionLineMessageTwo" />
              </van-tab>
            </van-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SelectDate from "./SelectDate.vue";

import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart, BarChart } from "echarts/charts";
import { LegendComponent, GridComponent } from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([CanvasRenderer, PieChart, BarChart, LegendComponent, GridComponent]);

export default {
  name: "DejimaMsg",
  components: {
    SelectDate,
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  data() {
    return {};
  },
  computed: {
    // ----------按市县出岛车辆排名Top 10-省内
    optionLineVehicleOne() {
      const xData = ["海口", "三亚", "琼海", "文昌", "万宁", "定安", "陵水"];
      const yData = [120, 132, 101, 134, 90, 230, 210];
      const res = this.universalOptionsBar(xData, yData, "#37a2da");
      return res;
    },
    // ----------按市县出岛车辆排名Top 10-省外
    optionLineVehicleTwo() {
      const xData = ["荔枝", "芒果", "莲雾", "苹果", "香蕉", "葡萄"];
      const yData = [220, 282, 201, 234, 290, 430];
      const res = this.universalOptionsBar(xData, yData, "#37a2da");
      return res;
    },
    // ----------按市县出岛吨数排名Top 10-省内
    optionLineTonnesOne() {
      const xData = ["海口", "三亚", "琼海", "文昌", "万宁", "定安", "陵水"];
      const yData = [120, 132, 101, 134, 90, 230, 210];
      const res = this.universalOptionsBar(xData, yData, "#fed033");
      return res;
    },
    // ----------按市县出岛吨数排名Top 10-省外
    optionLineTonnesTwo() {
      const xData = ["荔枝", "芒果", "莲雾", "苹果", "香蕉", "葡萄"];
      const yData = [220, 282, 201, 234, 290, 430];
      const res = this.universalOptionsBar(xData, yData, "#fed033");
      return res;
    },
    // ----------按品种出岛信息排名Top 10-车辆
    optionLineMessageOne() {
      const xData = ["海口", "三亚", "琼海", "文昌", "万宁", "定安", "陵水"];
      const yData = [120, 132, 101, 134, 90, 230, 210];
      const res = this.universalOptionsBar(xData, yData, "#4ddcde");
      return res;
    },
    // ----------按品种出岛信息排名Top 10-吨数
    optionLineMessageTwo() {
      const xData = ["荔枝", "芒果", "莲雾", "苹果", "香蕉", "葡萄"];
      const yData = [220, 282, 201, 234, 290, 430];
      const res = this.universalOptionsBar(xData, yData, "#4ddcde");
      return res;
    },
    // ----------出岛综合分析-全省出岛总吨数
    optionPieOne() {
      const dataVal = [
        { value: 3760.23, name: "南港码头" },
        { value: 4331.84, name: "秀英码头" },
        { value: 27351.16, name: "新航港码头" },
      ];
      const res = this.universalOptionsPie(dataVal, "全省出岛总吨数");
      return res;
    },
    // ----------出岛综合分析-全省出岛车辆总数
    optionPieTwo() {
      const dataVal = [
        { value: 215, name: "南港码头" },
        { value: 1388, name: "秀英码头" },
        { value: 282, name: "新航港码头" },
      ];
      const res = this.universalOptionsPie(dataVal, "全省出岛车辆总数");
      return res;
    },
  },
  methods: {
    // ---------------------根据选中的时间来获取数据
    dateGetData(data) {
      console.log(data);
    },
    // ---------------------饼图通用参数设置
    universalOptionsPie(dataVal, name) {
      return {
        backgroundColor: "#ffffff",
        color: ["#37a2da", "#67e0e3", "#ffdb5c"],
        legend: {
          orient: "vertical",
          align: "left",
          bottom: "0%",
          textStyle: {
            color: "#313131",
          },
          data: dataVal,
        },
        series: [
          {
            name: name,
            type: "pie",
            legendHoverLink: false,
            label: {
              show: true,
              position: "inside",
              formatter: "{c}",
              color: "#ffffff",
              fontWeight: "bold",
            },
            radius: "80%",
            center: ["50%", "35%"],
            data: dataVal,
            emphasis: {
              scale: false,
            },
          },
        ],
      };
    },
    // ---------------------柱状图通用参数设置
    universalOptionsBar(xData, yData, columnColor) {
      return {
        backgroundColor: "#ffffff",
        grid: {
          left: "3%",
          right: "5%",
          bottom: "3%",
          top: "5%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          splitNumber: 5,
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#ddd"],
            },
          },
          axisLabel: {
            color: "#313131",
          },
        },
        yAxis: {
          type: "category",
          data: xData,
          axisLabel: {
            color: "#313131",
          },
          axisLine: {
            lineStyle: {
              color: "#313131",
            },
          },
        },
        series: [
          {
            data: yData,
            type: "bar",
            symbol: "emptyCircle",
            label: {
              show: true,
              position: "right",
              color: columnColor,
            },
            itemStyle: {
              color: columnColor,
            },
          },
        ],
      };
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.dejimaMsg {
  .colItem {
    font-size: 32px;
    margin-top: 24px;
  }
  .tabsCard {
    .van-tabs__wrap {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .van-tabs__nav--card {
        width: 440px;
        margin: 0;
        border-color: #00b96b;
        .van-tab {
          color: #313131;
          border-color: #00b96b;
          &.van-tab--active {
            color: #fff;
            background-color: #00b96b;
          }
        }
      }
    }
  }
  .chartPie {
    height: 650px;
  }
  .chartLine {
    height: 750px;
  }
  .pieCard {
    border: 0.02667rem solid #b9b9b9;
    border-radius: 20px;
    .title {
      border-radius: 10px;
      min-height: 92px;
      background-color: #4eb78b;
      padding: 10px;
      box-sizing: border-box;
    }
  }
}
</style>
