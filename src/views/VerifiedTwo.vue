<template>
  <div class="verifiedTwo">
    <van-form @submit="onSubmit" validate-first class="px-62 pt-50">
      <!-- 身份证正面 -->
      <van-field
        v-model="idNumberPositive"
        @click="transferAction(1)"
        name="idNumberPositive"
      >
        <template #input>
          <!-- 未上传图片 -->
          <div
            class="d-flex flex-column ai-center widthPer-1 box-b pt-80 pb-50"
            v-if="!idNumberPositive"
          >
            <span class="myIcon-verifiedCamera"></span>
            <div class="fs-36 text-black-61 fw-6 mt-50">
              点击上传身份证正面照
            </div>
          </div>
          <!-- 已上传图片 -->
          <div class="uploadImg" v-else>
            <span class="myIcon-verifiedAngleTL"></span>
            <span class="myIcon-verifiedAngleBL"></span>
            <span class="myIcon-verifiedAngleTR"></span>
            <span class="myIcon-verifiedAngleBR"></span>
            <van-image
              width="100%"
              height="100%"
              fit="cover"
              :src="idNumberPositive"
            />
          </div>
        </template>
      </van-field>
      <!-- 身份证反面 -->
      <van-field
        v-model="idNumberNegative"
        name="idNumberNegative"
        class="mt-30"
        @click="transferAction(2)"
      >
        <template #input>
          <!-- 未上传图片 -->
          <div
            class="d-flex flex-column ai-center widthPer-1 box-b pt-80 pb-50"
            v-if="!idNumberNegative"
          >
            <span class="myIcon-verifiedCamera"></span>
            <div class="fs-36 text-black-61 fw-6 mt-50">
              点击上传身份证反面照
            </div>
          </div>
          <!-- 已上传图片 -->
          <div class="uploadImg" v-else>
            <span class="myIcon-verifiedAngleTL"></span>
            <span class="myIcon-verifiedAngleBL"></span>
            <span class="myIcon-verifiedAngleTR"></span>
            <span class="myIcon-verifiedAngleBR"></span>
            <van-image
              width="100%"
              height="100%"
              fit="cover"
              :src="idNumberNegative"
            />
          </div>
        </template>
      </van-field>
      <!-- 提交按钮 -->
      <div class="mt-100">
        <van-button block color="#00b96b" type="info" native-type="submit"
          >完成</van-button
        >
      </div>
    </van-form>
    <!-- 动作面板 -->
    <UploadFile
      :show="actionShow"
      @after_read="afterReadPhoto"
      @change_status="actionChange"
    ></UploadFile>
    <!-- 认证完成弹框 -->
    <SimpleBox
      :objBox="{
        show: showRegisterBox,
        overlay: false,
        icon: 'myIcon-registerSuccess',
        textStr: '认证完成',
        isBtnOne: true,
        btnOneStr: '确定',
      }"
      @box_determine="registerBtn"
    ></SimpleBox>
  </div>
</template>
<script>
import SimpleBox from "../components/SimpleBox.vue";
import UploadFile from "../components/UploadFile.vue";
export default {
  name: "VerifiedTwo",
  props: ["trueName", "idNumber"],
  data() {
    return {
      // 图片预览
      idNumberPositive: "",
      idNumberNegative: "",
      // file数据
      idNumberPositiveFile: "",
      idNumberNegativeFile: "",
      // 动作面板的显示隐藏
      actionShow: false,
      // 由哪一面调用的 1正面，2反面
      isAction: 1,
      // 自定义弹框
      showRegisterBox: false,
    };
  },
  components: {
    // 弹框组件
    SimpleBox,
    // 上传文件组件
    UploadFile,
  },
  computed: {},
  methods: {
    // --------------点击弹框的确定按钮
    registerBtn() {
      this.$router.replace("/my");
    },
    // --------------调起控制面板
    transferAction(num) {
      this.actionShow = true;
      this.isAction = num;
    },
    // --------------照片选择后的回调函数
    afterReadPhoto(fileAll) {
      this.actionChange(false);
      if (this.isAction == "1") {
        this.idNumberPositive = fileAll.content;
        this.idNumberPositiveFile = fileAll.file;
      } else {
        this.idNumberNegative = fileAll.content;
        this.idNumberNegativeFile = fileAll.file;
      }
    },
    // --------------控制面板的显示隐藏
    actionChange(bool) {
      this.actionShow = bool;
    },
    // --------------提交
    onSubmit() {
      if (this.idNumberPositive && this.idNumberNegative) {
        console.log("路由传过来的参数");
        console.log(this.trueName);
        console.log(this.idNumber);
        console.log("正面图片", this.idNumberPositiveFile);
        console.log("反面图片", this.idNumberNegativeFile);
        this.showRegisterBox = true;
      } else {
        this.$Toast("请上传身份证的正反面");
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.verifiedTwo {
  .uploadImg {
    width: 647px;
    height: 414px;
    position: relative;
    box-sizing: border-box;
    padding: 28px;
    margin: 20px auto;
    .myIcon-verifiedAngleTL {
      position: absolute;
      top: 0;
      left: 0;
    }
    .myIcon-verifiedAngleBL {
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .myIcon-verifiedAngleTR {
      position: absolute;
      top: 0;
      right: 0;
    }
    .myIcon-verifiedAngleBR {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
