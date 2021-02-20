<template>
  <div class="retrievePasswordTwo">
    <van-form @submit="onSubmit" validate-first class="px-62 pt-80">
      <van-cell-group>
        <van-field
          label-width="1.6rem"
          v-model="newPassword"
          name="newPassword"
          type="password"
          label="登录密码"
          placeholder="由6-16位字母、数字或符号组成"
          :rules="[
            { required: true, message: '请填写密码' },
            {
              pattern: patternPassword,
              message: '密码格式不正确',
            },
          ]"
        />
        <van-field
          label-width="1.6rem"
          v-model="againPassword"
          name="againPassword"
          type="password"
          label="密码确认"
          placeholder="请再次输入密码"
          :rules="[
            { required: true, message: '请填写密码' },
            {
              validator: againPassWord,
              message: '两次密码不相同',
            },
          ]"
        />
      </van-cell-group>
      <!-- 提交按钮 -->
      <div class="mt-100">
        <van-button
          block
          color="#00b96b"
          native-type="submit"
          >重置</van-button
        >
      </div>
    </van-form>
    <!-- 注册成功弹框 -->
    <SimpleBox
      :objBox="{
        show: showRegisterBox,
        overlay: false,
        icon: 'myIcon-registerSuccess',
        textStr: '密码重置成功',
        isBtnOne: true,
        btnOneStr: '确定',
      }"
      @box_determine="registerBtn"
    ></SimpleBox>
  </div>
</template>
<script>
import SimpleBox from "../components/SimpleBox.vue";
export default {
  name: "RetrievePasswordTwo",
  data() {
    return {
      newPassword: "",
      againPassword: "",
      // 显示注册成功弹框
      showRegisterBox: false,
    };
  },
  components: {
    // 弹框组件
    SimpleBox,
  },
  computed: {},
  methods: {
    // 点击注册成功弹框的确定按钮
    registerBtn() {
      this.$router.replace("/login");
      this.$router.go(-2);
    },
    // 两次密码校验函数返回 true 表示校验通过，false 表示不通过
    againPassWord(val) {
      let bool = false;
      if (this.newPassword && this.newPassword === val) {
        bool = true;
      }
      return bool;
    },
    // 提交
    onSubmit(values) {
      console.log("路由传过来的参数", this.$route.query);
      console.log("submit", values);
      this.showRegisterBox = true;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.retrievePasswordTwo {
  .van-cell {
    align-items: center;
  }
}
</style>
