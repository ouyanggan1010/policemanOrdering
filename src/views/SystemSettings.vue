<template>
  <div class="systemSettings box-b px-32">
    <van-cell-group :border="false" title="通知">
      <van-cell>
        <template #title>
          <div class="d-flex ai-center">
            <span class="fs-38 text-black-31 fw-6">新消息通知</span>
          </div>
        </template>
        <template #right-icon>
          <div class="d-flex ai-center">
            <van-switch
              v-model="checkedNewMsg"
              active-color="#45db5e"
              inactive-color="#d2d6d9"
              size="18px"
              @change="checkChange(1)"
            />
          </div>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <div class="d-flex ai-center">
            <span class="fs-38 text-black-31 fw-6">消息到达通知</span>
          </div>
        </template>
        <template #right-icon>
          <div class="d-flex ai-center">
            <van-switch
              v-model="checkedMsgArrivals"
              active-color="#45db5e"
              inactive-color="#d2d6d9"
              size="18px"
              @change="checkChange(2)"
            />
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group :border="false" title="安全保护">
      <van-cell is-link to="/changePassword">
        <template #title>
          <div class="d-flex ai-center">
            <span class="fs-38 text-black-31 fw-6">修改登录密码</span>
          </div>
        </template>
        <template #right-icon>
          <div class="d-flex ai-center">
            <van-icon name="arrow" class="arrow" />
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell class="mt-100" @click="showDialogCache = true">
      <template #title>
        <div class="d-flex ai-center">
          <span class="fs-38 text-black-31 fw-6">清除缓存</span>
        </div>
      </template>
      <template #right-icon>
        <div class="d-flex ai-center">
          <span class="mr-10 text-black-91">7.01KB</span>
          <van-icon name="arrow" class="arrow" />
        </div>
      </template>
    </van-cell>
    <div class="mt-100">
      <van-button
        block
        color="#f94846"
        type="info"
        native-type="button"
        @click="showDialogLogout = true"
        >退出登录</van-button
      >
    </div>
    <!-- Dialog清除缓存弹框 -->
    <van-dialog
      v-model="showDialogCache"
      show-cancel-button
      show-confirm-button
      confirm-button-color="#239688"
      :overlay-style="{ 'background-color': 'rgba(0, 0, 0, 0.2)' }"
      message="将清除本地图片等缓存数据"
      @confirm="confirmDialogCache"
    >
      <template #title>
        <div class="d-flex ai-center jc-center">
          <span class="myIcon-DialogSigh"></span>
          <span class="ml-20">确认要清除缓存吗？</span>
        </div>
      </template>
    </van-dialog>
    <!-- Dialog注销登录弹框 -->
    <van-dialog
      v-model="showDialogLogout"
      show-cancel-button
      show-confirm-button
      confirm-button-color="#239688"
      :overlay-style="{ 'background-color': 'rgba(0, 0, 0, 0.2)' }"
      message="请您确认是否退出登录"
      @confirm="confirmDialogLogout"
    >
      <template #title>
        <div class="d-flex ai-center jc-center">
          <span class="myIcon-DialogSigh"></span>
          <span class="ml-20">退出登录</span>
        </div>
      </template>
    </van-dialog>
  </div>
</template>
<script>
export default {
  name: "SystemSettings",
  data() {
    return {
      // 新消息通知
      checkedNewMsg: false,
      // 消息到达通知
      checkedMsgArrivals: false,
      // 清除缓存弹框
      showDialogCache: false,
      // 退出登录弹框
      showDialogLogout: false,
    };
  },
  computed: {},
  methods: {
    // ------------------清除缓存确定按钮
    confirmDialogCache() {
      console.log("清除缓存的操作");
    },
    // ------------------退出登录确定按钮
    confirmDialogLogout() {
      console.log("注销登录，并跳转到登录页");
      this.$router.push("/home");
    },
    // ------------------checkbox切换的事件
    checkChange(num) {
      if (num == 1) {
        // 新消息通知
        console.log("请求信消息通知的接口",this.checkedNewMsg)
      } else {
        // 消息到达通知
        console.log("请求消息到达通知的接口",this.checkedMsgArrivals)
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.systemSettings {
  .van-cell-group__title {
    padding-left: 0;
  }
  .arrow {
    font-size: 62px;
    color: #919191;
  }
}
</style>
