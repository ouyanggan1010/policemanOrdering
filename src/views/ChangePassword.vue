<template>
  <div class="changePassword">
    <van-form @submit="onSubmit" validate-first class="px-62 pt-80">
      <van-field
        v-model="oldPassword"
        name="oldPassword"
        placeholder="请输入原密码"
        :rules="[{ required: true, message: '请填写原密码' }]"
      />
      <van-cell-group :border="false" class="mt-26">
        <van-field
          v-model="newPassword"
          name="newPassword"
          type="password"
          placeholder="请设置6-16位字母、数字或符号组成的新密码"
          :rules="[
            { required: true, message: '请填写新密码' },
            {
              pattern: patternPassword,
              message: '密码格式不正确',
            },
          ]"
        />
        <van-field
          v-model="againPassword"
          name="againPassword"
          type="password"
          placeholder="请再次输入新密码"
          :rules="[
            { required: true, message: '请填写密码' },
            {
              validator: againPassWord,
              message: '两次密码不相同',
            },
          ]"
        />
      </van-cell-group>
      <div class="mt-100">
        <van-button block color="#00b96b" type="info" native-type="submit"
          >重置</van-button
        >
      </div>
    </van-form>
    <!-- 密码重置成功弹框 -->
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
  name: "ChangePassword",
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      againPassword: "",
      // 显示密码重置成功弹框
      showRegisterBox: false,
    };
  },
  components: {
    // 弹框组件
    SimpleBox,
  },
  computed: {},
  methods: {
    // 点击密码重置成功弹框的确定按钮
    registerBtn() {
      this.$router.replace("/my");
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
      console.log("submit", values);
      this.showRegisterBox = true;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
