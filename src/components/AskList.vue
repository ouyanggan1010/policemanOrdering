<template>
  <div
    class="askList"
    :class="{ isOnenavH: type === 'qaList', isTwonavH: type === 'qaMyCnt' }"
  >
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
          <div class="cntOne pt-30 d-flex flex-column jc-between">
            <div class="title fs-42 fw-6 text-black-31 van-multi-ellipsis--l2">
              {{ list.title }}
            </div>
            <div
              class="d-flex jc-between ai-center fs-36 fw-6 text-black-61 py-20"
            >
              <div>{{ list.sort }}</div>
              <div>
                <span class="text-green-88">{{ list.answer }}</span
                >个回答
              </div>
            </div>
          </div>
          <div
            class="cntTwo d-flex jc-between ai-center py-20 fs-30 text-black-61 fw-6"
          >
            <div class="d-flex ai-center" v-if="type !== 'qaMyCnt'">
              <div class="images">
                <van-image
                  width="100%"
                  height="100%"
                  fit="cover"
                  round
                  :src="list.ueser.pic"
                />
              </div>
              <div class="ml-36">用户：{{ list.ueser.phone }}</div>
            </div>
            <div class="d-flex ai-center">
              <span>{{ list.date }}</span
              ><span class="ml-20">{{ list.time }}</span>
            </div>
          </div>
        </router-link>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  name: "AskList",
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
      const total = this.count + 5;
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
            title: `第${i + 1}条：为了“中国饭碗”的底座更坚实——国家南繁基地国家南繁基地国家南繁基地国家南繁基地国家南繁基地国家南繁基地`,
            date: "2018-01-01",
            time: "13:30",
            sort: "政策法规",
            answer: i,
            ueser: {
              pic: "https://img01.yzcdn.cn/vant/cat.jpeg",
              phone: "178****8187",
            },
          });
          this.count = this.count + 1;
        }
        this.loading = false;
        // 请求的数据为空的时候
        if (this.lists.length >= 20) {
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
.askList {
  &.isOnenavH {
    height: calc(100vh - 132.47px - 330.36px - 143.98px);
  }
  &.isTwonavH {
    height: calc(100vh - 132.47px - 175px - 143.98px);
  }
  padding-top: 28px;
  .listMinH {
    height: calc(100% - 28px);
    overflow-y: auto;
  }
  .cards {
    > .card {
      margin-top: 28px;
      background-color: white;
      box-sizing: border-box;
      padding: 0 28px;
      &:first-child {
        margin-top: 0;
      }
      .cntOne {
        border-bottom: 1px solid #e5e5e5;
        min-height: 230px;
      }
      .cntTwo {
        .images {
          width: 72px;
          height: 72px;
        }
      }
    }
  }
}
</style>
