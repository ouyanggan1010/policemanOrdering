<template>
  <div class="serviceFileBusiness">
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
        <div
          class="card"
          v-for="(list, index) in lists"
          :key="index"
        >
          <div
            class="top bg-green-6b heightDiv-88 fs-36 text-white fw-6 d-flex ai-center jc-center"
          >
            业务类型：{{ list.type }}
          </div>
          <div class="bg-white box-b px-8 py-12 borderLists">
            <!-- 核发(登记日期) -->
            <div
              class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
            >
              <div class="widthDiv-400 border-ld d-flex ai-center jc-center">
                核发(登记日期)
              </div>
              <div
                class="flex-1 p-10 text-left d-flex ai-center wordWrap"
              >
                {{ list.date }}
              </div>
            </div>
            <!-- 业务明细(原信息) -->
            <div
              class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
            >
              <div class="widthDiv-400 border-ld d-flex ai-center jc-center">
                业务明细(原信息)
              </div>
              <div
                class="flex-1 p-10 text-left lineH-68 wordWrap"
              >
                {{ list.detailOld }}
              </div>
            </div>
            <!-- 业务明细(现信息) -->
            <div
              class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
            >
              <div class="widthDiv-400 border-ld d-flex ai-center jc-center">
                业务明细(现信息)
              </div>
              <div
                class="flex-1 p-10 text-left lineH-68 wordWrap"
                v-html="list.detailNew"
              >
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  name: "ServiceFileBusiness",
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
      setTimeout(() => {
        if (this.refreshing) {
          this.lists = [];
          this.refreshing = false;
          this.count = 0;
        }
        const total = this.count + 1;
        // 请求数据
        for (let i = this.count; i < total; i++) {
          this.lists.push({
            id: `id_01010${i + 1}`,
            // 业务类型
            type: "2021-02-02",
            // 核发(登记日期)
            date: `屯昌县${i + 1}`,
            // 业务明细(原信息)
            detailOld: `屯昌县枫木镇${i + 1}`,
            // 业务明细(现信息)
            detailNew:
              "<div>退档业务名称：初次申领</div><div>退档原因：资料不齐</div><div>退档人：林越</div><div>退档时间：2013-12-25 14:53:09</div>",
          });
          this.count = this.count + 1;
        }
        this.loading = false;
        // 请求的数据为空的时候
        if (this.lists.length >= 1) {
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
.serviceFileBusiness {
  height: calc(100vh - 132.47px - 126px);
  .listMinH {
    height: 100%;
    overflow-y: auto;
  }
  .cards {
    padding: 0 32px;
    box-sizing: border-box;
    > .card {
      padding-top: 50px;
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
        .minH {
          min-height: 88px;
        }
        .wordWrap {
          word-wrap: break-word;
          word-break: break-all;
        }
      }
    }
  }
}
</style>
