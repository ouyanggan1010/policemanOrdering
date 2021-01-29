<template>
  <div id="app">
    <!-- 头部导航栏 -->
    <van-nav-bar
      :title="$route.meta.headTitle"
      fixed
      placeholder
      @click-left="$router.back()"
      v-if="$route.meta.headShow"
    >
      <!-- 自定义返回图标 -->
      <template #left>
        <span class="iconfont icon-tupian mycss-fs-40 text-black"></span>
      </template>
    </van-nav-bar>
    <!-- 路由切换 -->
    <router-view />
    <!-- 底部导航栏 -->
    <van-tabbar
      route
      fixed
      placeholder
      v-model="active"
      v-if="$route.meta.footShow"
      active-color="#ee0a24"
      inactive-color="#000"
    >
      <van-tabbar-item replace to="/home" name="home" icon="home-o"
        >首页
        <template #icon="props">
          <span
            v-if="props.active"
            class="iconfont icon-tupian mycss-fs-40 text-black"
          ></span>
          <span
            v-else
            class="iconfont icon-sousuo mycss-fs-40 text-black"
          ></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/preOrder" name="preOrder" icon="search"
        >预订餐</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: "home",
    };
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style>
</style>
