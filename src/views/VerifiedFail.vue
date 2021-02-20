<template>
  <div class="verifiedFail box-b px-32 pt-50">
    <div class="d-flex jc-center ai-center">
      <span class="myIcon-verifiedHookN"></span>
      <span class="fs-42 text-black-31 fw-6 ml-24">您的实名认证未通过</span>
    </div>
    <van-cell-group class="mt-52">
      <van-cell
        title="真实姓名"
        :value="trueName"
        title-class="text-black-31 fw-6"
        value-class="text-black-31 fw-6"
      />
      <van-cell
        title="身份证号"
        :value="idNumber | filtersIdNumber"
        title-class="text-black-31 fw-6"
        value-class="text-black-31 fw-6"
      />
    </van-cell-group>
    <van-cell
      class="mt-24"
      title="认证结果"
      value="未通过"
      title-class="text-black-31 fw-6"
      value-class="text-red-4e fw-6"
    />
    <!-- 按钮 -->
    <div class="mt-100">
      <van-button
        block
        color="#00b96b"
        native-type="button"
        @click="restVerified"
        >重新认证</van-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "VerifiedFail",
  data() {
    return {
      trueName: "欧阳平",
      idNumber: "431126199310023867",
    };
  },
  computed: {},
  filters: {
    filtersIdNumber(val) {
      const newVal = val.replace(
        /^(\w{1})(\w*)(\w{1})$/,
        function (all, u1, u2, u3) {
          return u1 + new Array(u2.length + 1).join("*") + u3;
        }
      );
      return newVal;
    },
  },
  methods: {
    // ----------点击重新认证按钮
    restVerified() {
      this.$router.replace("/verifiedOne");
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
