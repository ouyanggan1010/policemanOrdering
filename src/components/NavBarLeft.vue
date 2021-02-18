<template>
  <div class="">
    <!-- 已登录的状态 -->
    <router-link to="/my" tag="div" v-if="loginNoOrYes" class="homeLeft avatar">
      <van-image
        width="100%"
        height="100%"
        fit="cover"
        round
        :src="users.avatar"
      />
    </router-link>
    <!-- 未登录的状态 -->
    <router-link to="/login" tag="div" v-else class="text-white fs-32"
      >登录/注册</router-link
    >
  </div>
</template>
<script>
export default {
  name: "NavBarLeft",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
