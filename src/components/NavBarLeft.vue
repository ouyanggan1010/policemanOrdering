<template>
  <!-- 登录的右侧 -->
  <div class="d-flex ai-center jc-center">
    <!-- 头部右侧返回箭头 -->
    <!-- <span
      class="myIcon-returnArrow"
      v-if="leftContent === '1'"
      @click="$router.back()"
    ></span> -->
    <van-icon
      name="arrow-left"
      v-if="leftContent === '1'"
      @click="$router.back()"
      color="#fff"
      size="20"
    />
    <!-- 已登录的状态 -->
    <router-link
      to="/my"
      tag="div"
      v-if="leftContent === '2' && loginNoOrYes"
      class="homeLeft avatar"
    >
      <van-image
        width="100%"
        height="100%"
        fit="cover"
        round
        :src="users.avatar"
      />
    </router-link>
    <!-- 未登录的状态 -->
    <router-link
      to="/login"
      tag="div"
      v-if="leftContent === '2' && !loginNoOrYes"
      class="text-white fs-32"
      >登录/注册</router-link
    >
    <!-- 左侧无 -->
    <span v-if="leftContent === '3'"></span>
  </div>
</template>
<script>
export default {
  name: "NavBarLeft",
  data() {
    return {
      // 判断是否登录
      loginNoOrYes: false,
      // 用户基本信息
      users: {
        avatar: "https://img01.yzcdn.cn/vant/cat.jpeg",
      },
    };
  },
  computed: {
    leftContent() {
      const n = this.$route.name;
      let m = "1";
      if (n === "Home") {
        m = "2";
      } else if (n === "Service" || n === "Qa" || n === "My") {
        m = "3";
      }
      return m;
    },
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
