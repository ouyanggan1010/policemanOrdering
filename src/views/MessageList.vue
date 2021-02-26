<template>
  <div class="messageList">
    <van-pull-refresh
      class="listMinH pt-50 box-b"
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
        <van-swipe-cell
          v-for="(list, index) in lists"
          :key="index"
          class="card bg-white"
        >
          <router-link
            tag="div"
            :to="list.type == 0 ? '/messageDetails' : '/questionDetails'"
            class="d-flex px-38 py-30"
          >
            <span
              :class="{
                'myIcon-warnMsg': list.type == 0,
                'myIcon-replyMsg': list.type == 1,
              }"
            >
              <span class="dot" v-if="list.read"></span>
            </span>
            <div class="box-b pl-42 d-flex flex-column jc-between widthOne">
              <div class="d-flex jc-between ai-center">
                <div class="fs-42 text-black-31 fw-6 van-ellipsis flex-1">
                  {{ list.title }}
                </div>
                <span class="fs-30 text-black-91 fw-6 ml-20">
                  {{ list.time }}</span
                >
              </div>
              <div class="fs-32 text-black-91 fw-6 van-ellipsis">
                {{ list.tips }}
              </div>
            </div>
          </router-link>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button heightPer-1"
            />
          </template>
        </van-swipe-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  name: "MessageList",
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
            title: `第${i + 1}条：头像审核不通过！`,
            type: i % 2 == 0 ? 0 : 1, //0表示是消息，1表示是答复
            time: "2018-01-01",
            tips: "头像存在反共信息，请重新上传头像。",
            read: i % 3 == 0 ? true : false,
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
.messageList {
  height: calc(100vh - 132.47px);
  box-sizing: border-box;
  .listMinH {
    height: 100%;
    overflow-y: auto;
  }
  .cards {
    box-sizing: border-box;
    .card {
      margin-top: 24px;
      &:first-child {
        margin-top: 0;
      }
      .widthOne {
        width: calc(100% - 128px);
      }
    }
  }
  .dot {
    position: absolute;
    top: 12px;
    right: 5px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #eb2323;
  }
  [class^="myIcon-"] {
    position: relative;
  }
}
</style>
