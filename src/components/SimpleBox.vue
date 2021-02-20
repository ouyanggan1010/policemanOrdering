<template>
  <div class="simpleBox">
    <van-popup
      class="fs-20 pb-30"
      :style="{ width: '170px' }"
      round
      :close-on-click-overlay="objBox.overlay"
      v-model="showBool"
      @opened="timeClose"
    >
      <div class="icon">
        <!-- myIcon-codeSuccess myIcon-registerSuccess -->
        <span :class="objBox.icon"></span>
      </div>
      <div
        class="textCont fs-42 text-black-31 d-flex jc-center ai-center flex-column mt-30"
      >
        <div class="fw-6">
          {{ objBox.textStr }}
        </div>
        <van-button
          color="#239688"
          class="mt-34 d-flex jc-center ai-center"
          style="width: 132px; height: 25px"
          v-if="objBox.isBtnOne"
          @click="btnOneEvent"
          >{{ objBox.btnOneStr }}</van-button
        >
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "SimpleBox",
  props: {
    objBox: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      showBool: false,
    };
  },
  computed: {},
  methods: {
    timeClose() {
      if (this.objBox.overlay) {
        setTimeout(() => {
          this.showBool = false;
        }, 500);
      }
    },
    // 按钮一的事件
    btnOneEvent(){
      this.$emit("box_determine")
    }
  },
  watch: {
    // 监听父组件值的改变
    "objBox.show"() {
      this.showBool = this.objBox.show;
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
