<template>
  <div class="register">
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
        <van-field
          label-width="1.6rem"
          v-model="password"
          name="password"
          type="password"
          label="登录密码"
          placeholder="由6-16位字母、数字或符号组成"
          :rules="[
            { required: true, message: '请填写密码' },
            {
              pattern: /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,16}$/,
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
          :disabled="!checked"
          block
          color="#00b96b"
          native-type="submit"
          >注册</van-button
        >
      </div>
      <!-- 确认协议 -->
      <div class="d-flex ai-center mt-60">
        <van-checkbox v-model="checked">
          <template #icon="props">
            <span
              :class="
                props.checked ? 'myIcon-checkBoxYes' : 'myIcon-checkBoxNo'
              "
            ></span>
          </template>
        </van-checkbox>
        <div class="d-flex fs-36 ml-26">
          <span class="text-black-31">我已阅读并同意</span>
          <router-link tag="span" to="" class="text-green-88"
            >使用协议和隐私政策</router-link
          >
        </div>
      </div>
    </van-form>
    <!-- 验证码发送成功弹框 -->
    <SimpleBox :show="sendCodeBool" textStr="验证码发送成功" status="code"></SimpleBox>
    <!-- 注册成功弹框 -->
    <SimpleBox :show="showRegisterBox" textStr="注册成功" status="register"></SimpleBox>
  </div>
</template>
<script>
import SimpleBox from "../components/SimpleBox.vue";
export default {
  name: "Register",
  data() {
    return {
      phone: "",
      code: "",
      password: "",
      againPassword: "",
      // 是否勾选协议
      checked: false,
      // 是否第一次已发送了验证码
      sendCodeBoolOne: false,
      // 是否点击发送验证码按钮
      sendCodeBool: false,
      // 显示注册成功弹框
      showRegisterBox: false,
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
    // 校验函数返回 true 表示校验通过，false 表示不通过
    againPassWord(val) {
      let bool = false;
      if (this.password && this.password === val) {
        bool = true;
      }
      return bool;
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
      if (this.checked) {
        console.log("submit", values);
        this.showRegisterBox = true;
      } else {
        this.$Toast({
          message: "请勾选使用协议和隐私政策",
          position: "bottom",
        });
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.register {
  .van-cell {
    align-items: center;
    &:last-child {
      &::after {
        border-bottom: none;
      }
    }
  }
}
</style>
