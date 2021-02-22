<template>
  <div class="personalInformation box-b px-32 pt-50">
    <!-- 单元格 -->
    <div class="mt-26 groupCell">
      <van-cell @click="actionChange(true)">
        <template #title>
          <div class="d-flex ai-center heightPer-1">
            <span class="fs-38 text-black-31 fw-6">头像</span>
          </div>
        </template>
        <template #right-icon>
          <div class="d-flex ai-center">
            <div class="pic mr-10">
              <van-image
                width="100%"
                height="100%"
                fit="cover"
                round
                :src="users.avatar"
              />
            </div>
            <van-icon name="arrow" class="arrow" />
          </div>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <div class="d-flex ai-center">
            <span class="fs-38 text-black-31 fw-6">注册手机号</span>
          </div>
        </template>
        <template #right-icon>
          <span class="text-black-91">{{ users.phone }}</span>
        </template>
      </van-cell>
      <van-cell @click="showDialog = true">
        <template #title>
          <div class="d-flex ai-center">
            <span class="fs-38 text-black-31 fw-6">昵称</span>
          </div>
        </template>
        <template #right-icon>
          <div class="d-flex ai-center">
            <span class="mr-10 text-black-91">{{ users.nickname }}</span>
            <van-icon name="arrow" class="arrow" />
          </div>
        </template>
      </van-cell>
    </div>
    <!-- 相册控制面板 -->
    <UploadFile
      :show="actionShow"
      @after_read="afterReadPhoto"
      @change_status="actionChange"
    ></UploadFile>
    <!-- Dialog设置昵称弹框 -->
    <van-dialog
      v-model="showDialog"
      title="修改昵称"
      show-cancel-button
      show-confirm-button
      confirm-button-color="#239688"
      :overlay-style="{ 'background-color': 'rgba(0, 0, 0, 0.2)' }"
      @confirm="confirmDialog"
      @open="changeNickName = users.nickname"
    >
      <div class="inpDialog">
        <input
          type="text"
          v-model="changeNickName"
          placeholder="昵称不得超过20个字"
        />
      </div>
    </van-dialog>
  </div>
</template>
<script>
import UploadFile from "../components/UploadFile.vue";
export default {
  name: "PersonalInformation",
  data() {
    return {
      users: {
        avatar: "https://img01.yzcdn.cn/vant/cat.jpeg",
        nickname: "ouyanggan1010",
        phone: "13518814469",
      },
      // 动作面板的显示隐藏
      actionShow: false,
      // 设置昵称弹框
      showDialog: false,
      // 修改昵称input值
      changeNickName: "",
    };
  },
  components: {
    // 上传文件组件
    UploadFile,
  },
  computed: {},
  methods: {
    // --------------照片选择后的回调函数
    afterReadPhoto(fileAll) {
      this.actionChange(false);
      console.log(fileAll);
      // 上传头像的请求
      this.users.avatar = fileAll.content;
    },
    // --------------控制面板的显示隐藏
    actionChange(bool) {
      this.actionShow = bool;
    },
    // --------------修改昵称弹框的确认点击事件
    confirmDialog() {
      // 这里需要发送一个修改的请求
      this.users.nickname = this.changeNickName;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.personalInformation {
  .pic {
    width: 190px;
    height: 190px;
  }
  .arrow {
    font-size: 62px;
    color: #919191;
  }
  .inpDialog {
    box-sizing: border-box;
    padding: 70px 60px;
    input {
      width: 100%;
      height: 100px;
      border: 0.02rem solid #919191;
      box-sizing: border-box;
      padding: 0 20px;
      border-radius: 15px;
    }
  }
}
</style>
