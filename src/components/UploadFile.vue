<template>
  <div class="uploadFile">
    <van-action-sheet :round="false" close-on-popstate v-model="actionShow">
      <!-- 拍照 -->
      <van-uploader
        capture="camera"
        :before-read="beforeReadPhotoEvt"
        :after-read="afterReadPhotoEvt"
        class="d-flex jc-center box-b py-40 borderB"
      >
        <div class="fs-42 text-black-31 fw-6">拍照</div>
      </van-uploader>
      <!-- 从相册中选择 -->
      <van-uploader
        :before-read="beforeReadPhotoEvt"
        :after-read="afterReadPhotoEvt"
        class="d-flex jc-center box-b py-40"
      >
        <div class="fs-42 text-black-31 fw-6">从相册中选择</div>
      </van-uploader>
      <div class="line"></div>
      <div
        class="fs-42 text-black-31 fw-6 box-b py-40 text-center"
        @click="actionShow = false"
      >
        取消
      </div>
    </van-action-sheet>
  </div>
</template>
<script>
export default {
  name: "UploadFile",
  props: {
    show: Boolean,
  },
  data() {
    return {
      actionShow: false,
    };
  },
  watch: {
    // 监听父组件值的改变
    show() {
      this.actionShow = this.show;
    },
  },
  computed: {},
  methods: {
    afterReadPhotoEvt(file) {
      this.$emit("after_read",file)
    },
    beforeReadPhotoEvt(file) {
      this.$emit("before_read",file);
      return true;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
