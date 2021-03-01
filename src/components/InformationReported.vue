<template>
  <div class="informationReported">
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
          to="/questionDetails"
          class="card"
          v-for="(list, index) in lists"
          :key="index"
        >
          <div
            class="top bg-green-6b heightDiv-88 fs-36 text-white fw-6 d-flex ai-center jc-center"
          >
            上报时间：{{list.date}}
          </div>
          <div class="bg-white box-b px-8 borderLists">
            <div
              class="heightDiv-88 d-flex jc-between fs-36 text-black-31 fw-6 lineH-88 text-center"
            >
              <div class="widthDiv-420 border-ld">所在市县</div>
              <div class="flex-1">{{list.city}}</div>
            </div>
            <div
              class="heightDiv-88 d-flex jc-between fs-36 text-black-31 fw-6 lineH-88 text-center"
            >
              <div class="widthDiv-420 border-ld">土地坐落位置</div>
              <div class="flex-1">{{list.address}}</div>
            </div>
            <div
              class="heightDiv-88 d-flex jc-between fs-36 text-black-31 fw-6 lineH-88 text-center"
            >
              <div class="widthDiv-420 border-ld">种植品种</div>
              <div class="flex-1">{{list.varieties}}</div>
            </div>
            <div
              class="heightDiv-88 d-flex jc-between fs-36 text-black-31 fw-6 lineH-88 text-center"
            >
              <div class="widthDiv-420 border-ld">种植时间</div>
              <div class="flex-1">{{list.plantDate}}</div>
            </div>
            <div
              class="heightDiv-88 d-flex jc-between fs-36 text-black-31 fw-6 lineH-88 text-center"
            >
              <div class="widthDiv-420 border-ld">收获时间</div>
              <div class="flex-1">{{list.harvestDate}}</div>
            </div>
            <div
              class="heightDiv-88 d-flex jc-between fs-36 text-black-31 fw-6 lineH-88 text-center"
            >
              <div class="widthDiv-420 border-ld">种植面积（亩）</div>
              <div class="flex-1">{{list.plantArea}}</div>
            </div>
            <div
              class="heightDiv-88 d-flex jc-between fs-36 text-black-31 fw-6 lineH-88 text-center"
            >
              <div class="widthDiv-420 border-ld">收获面积（亩）</div>
              <div class="flex-1">{{list.harvestArea}}</div>
            </div>
            <div
              class="heightDiv-88 d-flex jc-between fs-36 text-black-31 fw-6 lineH-88 text-center"
            >
              <div class="widthDiv-420 border-ld">总产量（吨）</div>
              <div class="flex-1">{{list.totalOutput}}</div>
            </div>
            <div
              class="heightDiv-88 d-flex jc-between fs-36 text-black-31 fw-6 lineH-88 text-center"
            >
              <div class="widthDiv-420 border-ld">投入成本（万元）</div>
              <div class="flex-1">{{list.inputCost}}</div>
            </div>
            <div
              class="heightDiv-88 d-flex jc-between fs-36 text-black-31 fw-6 lineH-88 text-center"
            >
              <div class="widthDiv-420 border-ld">批发价（元/公斤）</div>
              <div class="flex-1">{{list.tradePrice}}</div>
            </div>
            <div
              class="heightDiv-88 d-flex jc-between fs-36 text-black-31 fw-6 lineH-88 text-center"
            >
              <div class="widthDiv-420 border-ld">收货价（元/公斤）</div>
              <div class="flex-1">{{list.receivingPrice}}</div>
            </div>
            <div
              class="heightDiv-88 d-flex jc-between fs-36 text-black-31 fw-6 lineH-88 text-center"
            >
              <div class="widthDiv-420 border-ld">零售价（元/公斤）</div>
              <div class="flex-1">{{list.retailPrice}}</div>
            </div>
            <div
              class="heightDiv-88 d-flex jc-between fs-36 text-black-31 fw-6 lineH-88 text-center"
            >
              <div class="widthDiv-420 border-ld">总产值（万元）</div>
              <div class="flex-1">{{list.totalOutputValue}}</div>
            </div>
          </div>
        </router-link>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  name: "InformationReported",
  props: {
    type: String,
  },
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
    };
  },
  computed: {},
  methods: {
    onLoad() {
      const total = this.count + 1;
      setTimeout(() => {
        if (this.refreshing) {
          this.lists = [];
          this.refreshing = false;
          this.count = 0;
        }
        // 请求数据
        for (let i = this.count; i < total; i++) {
          this.lists.push({
            id: `id_01010${i + 1}`,
            date: "2021-02-02",
            // 市县
            city: `屯昌县${i + 1}`,
            // 土地坐落位置
            address: `屯昌县枫木镇${i + 1}`,
            // 品种
            varieties: `荔枝${i + 1}`,
            // 种植时间
            plantDate: `2018-01-01${i + 1}`,
            // 收获时间
            harvestDate: `2018-01-01${i + 1}`,
            // 种植面积
            plantArea: `21${i + 1}`,
            // 收获面积
            harvestArea: `32${i + 1}`,
            // 总产量
            totalOutput: `43${i + 1}`,
            // 投入成本
            inputCost: `12${i + 1}`,
            // 收货价
            receivingPrice: `54${i + 1}`,
            // 批发价
            tradePrice: `234${i + 1}`,
            // 零售价
            retailPrice: `65${i + 1}`,
            // 总产值
            totalOutputValue: `778${i + 1}`,
          });
          this.count = this.count + 1;
        }
        this.loading = false;
        // 请求的数据为空的时候
        if (this.lists.length >= 3) {
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
.informationReported {
  height: calc(100vh - 132.47px - 120px);
  .listMinH {
    height: 100%;
    overflow-y: auto;
  }
  .cards {
    padding: 0 32px;
    box-sizing: border-box;
    > .card {
      margin-top: 50px;
      box-sizing: border-box;
      .borderLists {
        border-left: 0.028rem dashed #239688;
        border-right: 0.028rem dashed #239688;
        border-bottom: 0.028rem dashed #239688;
        > div {
          .border-ld {
            border-right: 0.028rem dashed #d0d0d0;
          }
          &:nth-child(odd) {
            background-color: #ffffff;
          }
          &:nth-child(even) {
            background-color: #f2f2f2;
          }
        }
      }
    }
  }
}
</style>
