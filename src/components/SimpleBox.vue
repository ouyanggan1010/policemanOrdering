<template>
  <div class="simpleBox">
    <van-popup
      class="fs-20 pb-30"
      :style="{ width: '170px' }"
      round
      :close-on-click-overlay="status === 'code'"
      v-model="showBool"
      @opened="timeClose"
    >
      <div class="icon">
        <span class="myIcon-codeSuccess" v-if="status === 'code'"></span>
        <span class="myIcon-registerSuccess" v-else></span>
      </div>
      <div
        class="textCont fs-42 text-black-31 d-flex jc-center ai-center flex-column mt-30"
      >
        <div class="fw-6">
          {{ textStr }}
        </div>
        <van-button
          color="#239688"
          class="mt-34"
          style="width: 132px; height: 25px"
          v-if="status === 'register'"
          @click="$router.replace('/login')"
          >确定</van-button
        >
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "SimpleBox",
  props: {
    show: Boolean,
    textStr: String,
    status: String,
  },
  data() {
    return {
      showBool: false,
    };
  },
  computed: {},
  methods: {
    timeClose() {
      if (this.status === "code") {
        setTimeout(() => {
          this.showBool = false;
        }, 500);
      }
    },
  },
  watch: {
    // 监听父组件值的改变
    show() {
      this.showBool = this.show;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.simpleBox {
  .icon {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding-top: 60px;
  }
  .textCont {
    height: 161px;
  }
  .van-overlay {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>
