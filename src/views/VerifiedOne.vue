<template>
  <div class="verifiedOne">
    <van-form @submit="onSubmit" validate-first class="px-62 pt-80">
      <van-cell-group>
        <van-field
          v-model="trueName"
          name="trueName"
          placeholder="请输入真实姓名"
          :rules="[{ required: true, message: '请填写真实姓名' }]"
        >
        </van-field>
        <van-field
          v-model="idNumber"
          name="idNumber"
          placeholder="请输入身份证号"
          :rules="[
            { required: true, message: '请填写身份证号' },
            {
              pattern: patternIdNumber,
              message: '身份证号格式不正确',
            },
          ]"
        >
        </van-field>
      </van-cell-group>
      <div class="mt-100">
        <van-button block color="#00b96b" type="info" native-type="submit"
          >下一步</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  name: "VerifiedOne",
  data() {
    return {
      trueName: "",
      idNumber: "",
    };
  },
  computed: {},
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      this.$router.push({
        path: "/verifiedTwo",
        query: values,
      });
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
