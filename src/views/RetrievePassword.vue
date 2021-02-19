<template>
  <div class="retrievePassword">
    <van-form @submit="onSubmit" validate-first class="px-62 pt-80">
      <van-cell-group>
        <van-field
          label-width="1.6rem"
          v-model="phone"
          name="phone"
          type="tel"
          label="手机号码"
          placeholder="请输入手机号"
          :rules="[
            { required: true, message: '请填写手机号' },
            {
              pattern: /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/,
              message: '手机号格式不正确',
            },
          ]"
        />
        <van-field
          label-width="1.6rem"
          v-model="code"
          name="code"
          label="验证码"
          placeholder="请输入验证码"
          :rules="[{ validator: validatorCode, message: '请填写验证码' }]"
        >
          <template #button>
            <van-button
              size="small"
              color="#00b96b"
              v-show="!sendCodeBool"
              @click="sendCode"
              >发送验证码</van-button
            >
            <van-count-down
              v-show="sendCodeBool"
              :time="60 * 1000"
              format="ss"
              @finish="timeFinish"
              ref="countDown"
            >
              <template #default="timeData">
                <span class="fs-25 text-black-91"
                  >{{ timeData.seconds }}s后重置</span
                >
              </template>
            </van-count-down>
          </template>
        </van-field>
      </van-cell-group>
      <!-- 提交按钮 -->
      <div class="mt-100">
        <van-button block color="#00b96b" native-type="submit"
          >下一步</van-button
        >
      </div>
    </van-form>
    <!-- 验证码发送成功弹框 -->
    <SimpleBox :show="sendCodeBool" textStr="验证码发送成功" status="code"></SimpleBox>
  </div>
</template>
<script>
import SimpleBox from "../components/SimpleBox.vue";
export default {
  name: "RetrievePassword",
  data() {
    return {
      phone: "",
      code: "",
      // 是否第一次已发送了验证码
      sendCodeBoolOne: false,
      // 是否点击发送验证码按钮
      sendCodeBool: false,
    };
  },
  components: {
    SimpleBox,
  },
  computed: {},
  methods: {
    // 倒计时结束
    timeFinish() {
      this.sendCodeBool = false;
      this.$refs.countDown.reset();
    },
    // 校验验证码是否在发送后有填写
    validatorCode(val) {
      let bool = false;
      if (this.sendCodeBoolOne) {
        if (val) {
          bool = true;
        } else {
          bool = false;
        }
      } else {
        bool = true;
      }
      return bool;
    },
    // 发送验证码
    sendCode() {
      if (this.phone) {
        this.sendCodeBool = true;
        this.sendCodeBoolOne = true;
        console.log(this.sendCodeBool);
      }
    },
    // 提交
    onSubmit(values) {
      console.log("submit", values);
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
