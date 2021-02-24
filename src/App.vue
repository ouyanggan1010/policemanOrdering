<template>
  <div id="app" v-cloak>
    <!-- 头部导航栏 @click-left="$router.back()" -->
    <van-nav-bar
      :title="$route.meta.headTitle"
      fixed
      placeholder
      v-if="$route.meta.headShow"
    >
      <!-- 自定义左侧图标 -->
      <template #left>
        <NavBarLeft></NavBarLeft>
      </template>
    </van-nav-bar>
    <!-- 路由切换 -->
    <router-view />
    <!-- 公用底部导航栏 -->
    <van-tabbar
      route
      fixed
      placeholder
      v-model="activeOne"
      v-if="$route.meta.footShow"
      active-color="#239688"
      inactive-color="#c8c8c8"
    >
      <van-tabbar-item replace to="/home" name="home"
        >首页
        <template #icon="props">
          <span v-if="props.active" class="myIcon-footIndexB"></span>
          <span v-else class="myIcon-footIndexG"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/service" name="service"
        >服务
        <template #icon="props">
          <span v-if="props.active" class="myIcon-footServiceB"></span>
          <span v-else class="myIcon-footServiceG"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/qa" name="qa"
        >问答
        <template #icon="props">
          <span v-if="props.active" class="myIcon-footQaB"></span>
          <span v-else class="myIcon-footQaG"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/my" name="my"
        >我的
        <template #icon="props">
          <span v-if="props.active" class="myIcon-footMyB"></span>
          <span v-else class="myIcon-footMyG"></span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
    <!-- 我的问答底部导航栏 -->
    <van-tabbar
      route
      fixed
      placeholder
      v-model="activeTwo"
      v-if="$route.meta.QafootShow"
      active-color="#239688"
      inactive-color="#c8c8c8"
    >
      <van-tabbar-item replace to="/qaList" name="qaList"
        >问题列表
        <template #icon="props">
          <span v-if="props.active" class="myIcon-qaFootQaListB"></span>
          <span v-else class="myIcon-qaFootQaListG"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/qaAsking" name="qaAsking"
        >提问
        <template #icon>
          <span class="myIcon-qaFootAskG"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/qaMyCnt" name="qaMyCnt"
        >我的问答
        <template #icon="props">
          <span v-if="props.active" class="myIcon-qaFootMyQaB"></span>
          <span v-else class="myIcon-qaFootMyQaG"></span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import NavBarLeft from "./components/NavBarLeft.vue";
export default {
  name: "App",
  data() {
    return {
      activeOne: "home",
      activeTwo: "qaAsking",
    };
  },
  components: {
    NavBarLeft,
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" rel="stylesheet/scss">
#app {
  .van-nav-bar__title {
    font-weight: 600;
  }
}
.van-overlay {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
