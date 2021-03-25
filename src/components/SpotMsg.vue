<template>
  <div class="spotMsg">
    <!-- 数据时间段选择 -->
    <SelectDate class="mt-26" @event_getDate="dateGetData" />
    <!-- 全部数据 -->
    <div class="box-b pb-50">
      <!-- 瓜菜检测信息分析 -->
      <div class="mt-26">
        <div class="box-b py-26 px-32 fs-36 text-black-31 fw-6">
          瓜菜检测信息分析
        </div>
        <div class="box-b px-32 pb-32 pt-8 bg-white">
          <van-row type="flex" justify="space-between" gutter="20">
            <van-col
              span="12"
              class="colItem"
              v-for="(col, j) in cols"
              :key="j"
            >
              <div class="module" :class="col.bgColor">
                <div
                  class="box-b py-16 px-10 fs-36 fw-6 text-white text-center top"
                >
                  {{ col.title }}
                </div>
                <div
                  class="colHeight d-flex ai-center jc-center fs-42 fw-6 text-white"
                >
                  {{ col.num }}
                </div>
              </div>
            </van-col>
          </van-row>
        </div>
      </div>
      <!-- 全省瓜菜合格率 -->
      <div class="mt-26">
        <div class="box-b py-26 px-32 fs-36 text-black-31 fw-6">
          全省瓜菜合格率
        </div>
        <!-- 图表 -->
        <div class="box-b p-32 bg-white">
          <v-chart class="chartPie" :option="optionPie" />
        </div>
      </div>
      <!-- 瓜菜检测总量信息排名Top 10 -->
      <div class="mt-26">
        <div class="box-b py-26 px-32 fs-36 text-black-31 fw-6">
          瓜菜检测总量信息排名Top 10
        </div>
        <!-- 图表 -->
        <div class="box-b p-32 bg-white">
          <div class="tabsCard mt-16">
            <van-tabs type="card">
              <van-tab title="按市县">
                <v-chart class="chartLine" :option="optionLineOne" />
              </van-tab>
              <van-tab title="按品种">
                <v-chart class="chartLine" :option="optionLineTwo" />
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
  name: "SpotMsg",
  components: {
    SelectDate,
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  data() {
    return {
      cols: [
        {
          bgColor: "greenOne",
          title: "抽检车数",
          num: "10辆",
        },
        {
          bgColor: "greenTwo",
          title: "合格车数",
          num: "10辆",
        },
        {
          bgColor: "red",
          title: "超标车辆",
          num: "1辆",
        },
        {
          bgColor: "blueTwo",
          title: "超标率",
          num: "10%",
        },
      ],
      // ----------全省瓜菜合格率-图表参数开始
      optionPie: {
        backgroundColor: "#ffffff",
        color: ["#37a2da", "#ffd85c"],
        legend: {
          orient: "vertical",
          align: "left",
          right: "10%",
          top: "30%",
          textStyle: {
            color: "#313131",
          },
          data: [
            { value: 335, name: "合格率" },
            { value: 400, name: "超标率" },
          ],
        },
        series: [
          {
            name: "全省瓜菜合格率",
            type: "pie",
            legendHoverLink: false,
            label: {
              show: true,
              position: "inside",
              formatter: "{d}%",
              color: "#ffffff",
            },
            radius: "100%",
            center: ["30%", "50%"],
            data: [
              { value: 335, name: "合格率" },
              { value: 400, name: "超标率" },
            ],
            emphasis: {
              scale: false,
            },
          },
        ],
      },
    };
  },
  computed: {
    // ["海口", "三亚", "琼海", "文昌", "万宁", "定安", "陵水"]
    // ----------瓜菜检测总量信息排名-按市县-图表参数开始
    optionLineOne() {
      const xData = ["海口", "三亚", "琼海", "文昌", "万宁", "定安", "陵水"];
      const yData = [120, 132, 101, 134, 90, 230, 210];
      const res = this.universalOptions(xData, yData, "市县");
      return res;
    },
    // ----------瓜菜检测总量信息排名-按品种-图表参数开始
    optionLineTwo() {
      const xData = ["荔枝", "芒果", "莲雾", "苹果", "香蕉", "葡萄"];
      const yData = [220, 282, 201, 234, 290, 430];
      const res = this.universalOptions(xData, yData, "品种");
      return res;
    },
  },
  methods: {
    // ---------------------根据选中的时间来获取数据
    dateGetData(data) {
      console.log(data);
    },
    // ---------------------图表通用参数设置
    universalOptions(xData, yData, xName) {
      return {
        backgroundColor: "#ffffff",
        grid: {
          left: "3%",
          right: "12%",
          bottom: "3%",
          top: "20%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: xData,
          axisLabel: {
            color: "#313131",
          },
          name: xName,
          nameTextStyle: {
            color: "#313131",
          },
          axisLine: {
            lineStyle: {
              color: "#313131",
            },
          },
        },
        yAxis: {
          type: "value",
          splitNumber: 2,
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#ddd"],
            },
          },
          axisLabel: {
            color: "#313131",
          },
          name: "数量(件)",
          nameTextStyle: {
            color: "#313131",
          },
        },
        series: [
          {
            data: yData,
            type: "bar",
            symbol: "emptyCircle",
            label: {
              show: true,
              position: 'top',
              color: "#313131",
            },
            itemStyle: {
              color: "#3398db",
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
.spotMsg {
  .colItem {
    font-size: 32px;
    margin-top: 24px;
    .module {
      background-color: red;
      border-radius: 10px;
      .top {
        background-color: rgba($color: #ffffff, $alpha: 0.2);
      }
      &.greenOne {
        background-color: #81c784;
      }
      &.yellow {
        background-color: #ffb74d;
      }
      &.greenTwo {
        background-color: #4db6ac;
      }
      &.red {
        background-color: #ef9a9a;
      }
      &.blueOne {
        background-color: #64a8f0;
      }
      &.blueTwo {
        background-color: #7289ab;
      }
    }
    .colHeight {
      height: 114px;
    }
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
    height: 400px;
  }
  .chartLine {
    height: 550px;
  }
}
</style>
