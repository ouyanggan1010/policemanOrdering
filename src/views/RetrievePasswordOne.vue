<template>
  <div class="retrievePasswordOne">
    <van-form @submit="onSubmit" validate-first class="px-62 pt-80">
      <div>
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
              pattern: patternPhone,
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
              native-type="button"
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
      </div>
      <!-- 提交按钮 -->
      <div class="mt-100">
        <van-button block color="#00b96b" native-type="submit"
          >下一步</van-button
        >
      </div>
    </van-form>
    <!-- 验证码发送成功弹框 -->
    <SimpleBox
      :objBox="{
        show: sendCodeBool,
        overlay: true,
        icon: 'myIcon-codeSuccess',
        textStr: '验证码发送成功',
        isBtnOne: false,
      }"
    ></SimpleBox>
  </div>
</template>
<script>
import SimpleBox from "../components/SimpleBox.vue";
export default {
  name: "RetrievePasswordOne",
  data() {
    return {
      phone: "",
      code: "",
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
      if (val) {
        bool = true;
      }
      return bool;
    },
    // 发送验证码
    sendCode() {
      if (this.phone && this.patternPhone.test(this.phone)) {
        this.sendCodeBool = true;
      } else {
        this.$Toast({
          message: "手机号错误",
          position: "bottom",
        });
      }
    },
    // 提交
    onSubmit(values) {
      console.log("submit", values);
      this.$router.push({
        path: "/retrievePasswordTwo",
        query: { phone: values.phone },
      });
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.retrievePasswordOne {
  .van-cell {
    align-items: center;
  }
}
</style>
