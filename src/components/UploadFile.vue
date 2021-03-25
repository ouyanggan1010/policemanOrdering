<template>
  <div class="uploadFile">
    <van-action-sheet
      :round="false"
      close-on-popstate
      v-model="actionShowInside"
      get-container="body"
      class="uploadFileSheet"
    >
      <!-- 拍照 -->
      <van-uploader
        capture="camera"
        :after-read="afterReadPhotoEvt"
        class="d-flex jc-center box-b py-40 van-hairline--bottom"
      >
        <div class="fs-42 text-black-31 fw-6">拍照</div>
      </van-uploader>
      <!-- 从相册中选择 -->
      <van-uploader
        :after-read="afterReadPhotoEvt"
        class="d-flex jc-center box-b py-40"
      >
        <div class="fs-42 text-black-31 fw-6">从相册中选择</div>
      </van-uploader>
      <div class="lineDiv"></div>
      <div
        class="fs-42 text-black-31 fw-6 box-b py-40 text-center"
        @click="actionShowInside = false"
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
    return {};
  },
  watch: {},
  computed: {
    actionShowInside: {
      get() {
        return this.show;
      },
      set(oldVal, newVal) {
        this.$emit("change_status", newVal);
      },
    },
  },
  methods: {
    afterReadPhotoEvt(file) {
      this.$emit("after_read", file);
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.uploadFileSheet {
  .van-overlay {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .lineDiv {
    width: 100%;
    height: 24px;
    background-color: #f2f2f2;
  }
}
</style>
