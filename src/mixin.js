let MIXIN = {
  data() {
    return {
      // 手机号校验规则
      patternPhone: /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/,
      // 密码校验规则
      patternPassword: /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,16}$/,
      // 身份证校验规则
      patternIdNumber:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
export default MIXIN;
