<template>
  <div class="login">
    <van-form @submit="onSubmit" validate-first class="px-62 pt-80">
      <van-cell-group>
        <van-field
          v-model="phone"
          name="phone"
          type="tel"
          placeholder="请输入手机号"
          :rules="[
            { required: true, message: '请填写手机号' },
            {
              pattern: /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/,
              message: '手机号格式不正确',
            },
          ]"
        >
          <template #left-icon>
            <span class="myIcon-loginUser mr-20"></span>
          </template>
        </van-field>
        <van-field
          v-model="password"
          type="password"
          name="password"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        >
          <template #left-icon>
            <span class="myIcon-loginPassWord mr-20"></span>
          </template>
        </van-field>
      </van-cell-group>
      <div class="mt-100">
        <van-button block color="#00b96b" type="info" native-type="submit"
          >登录</van-button
        >
      </div>
      <div class="mt-56 d-flex jc-between ai-center text-green-88 fs-36">
        <router-link tag="div" to="/register">注册账号</router-link>
        <router-link tag="div" to="/retrievePassword">忘记密码？</router-link>
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  computed: {},
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.login {
  .van-cell {
    &:last-child {
      &::after {
        border-bottom: none;
      }
    }
  }
}
</style>
