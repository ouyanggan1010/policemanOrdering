<template>
  <div class="newsList" :class="{'isOnenavH':!cId,'isTwonavH':cId}">
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
        class="cards bg-white"
      >
        <router-link
          tag="div"
          to="/newsDetails"
          class="card d-flex jc-between ai-center"
          v-for="(list, index) in lists"
          :key="index"
        >
          <div
            class="d-flex flex-column jc-between heightPer-1 flex-1 pr-28 box-b"
          >
            <div class="fs-36 text-black-31 fw-6">
              {{ list.title }}
            </div>
            <div class="d-flex jc-start ai-center">
              <div class="d-flex jc-start ai-center iconTitle">
                <span class="myIcon-tipsIcon mr-16"></span>
                <span class="fs-32 text-black-91">{{ sort }}</span>
              </div>
              <div class="d-flex jc-start ai-center">
                <span class="myIcon-date mr-16"></span>
                <span class="fs-32 text-black-91">{{ list.time }}</span>
              </div>
            </div>
          </div>
          <div class="imagePic">
            <van-image
              lazy-load
              width="100%"
              height="100%"
              fit="contain"
              :src="list.pic"
            />
          </div>
        </router-link>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  name: "NewsList",
  props: {
    pId: String,
    cId: String,
    sort: String,
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
            title: `第${i + 1}条：为了“中国饭碗”的底座更坚实——国家南繁基地`,
            pic: "https://img01.yzcdn.cn/vant/cat.jpeg",
            time: "2018-01-01",
            sort: "",
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
.newsList {
  &.isOnenavH {
    height: calc(100vh - 132.47px - 172px);
  }
  &.isTwonavH {
    height: calc(100vh - 132.47px - 172px - 120px);
  }
  padding-top: 28px;
  .listMinH {
    height: 100%;
    overflow-y: auto;
  }
  .cards {
    box-sizing: border-box;
    padding: 0 33px;
    > .card {
      height: 210px + (28px * 2);
      box-sizing: border-box;
      padding: 28px 0;
      border-bottom: 1px solid #e5e5e5;
      .imagePic {
        width: 310px;
        height: 210px;
      }
      .iconTitle {
        width: 250px;
      }
    }
  }
}
</style>
