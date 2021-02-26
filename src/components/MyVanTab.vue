<template>
  <div class="myVanTab">
    <!-- 有子标签 -->
    <van-tabs
      class="tabTitleClass"
      title-inactive-color="#313131"
      title-active-color="#00b96b"
      line-width="75"
      color="#00b96b"
      v-model="active"
      v-if="tab.children.length > 0"
      animated
    >
      <van-tab
        v-for="item in tab.children"
        :key="item.id"
        :title="item.title"
        :name="item.id"
      >
        <NewsList :pId="tab.id" :cId="item.id" :sort="item.title"></NewsList>
      </van-tab>
    </van-tabs>
    <!-- 无子标签 -->
    <NewsList v-else :pId="tab.id" :sort="tab.title"></NewsList>
  </div>
</template>
<script>
import NewsList from "../components/NewsList.vue";
export default {
  name: "MyVanTab",
  props: {
    tab: Object,
    cIdActive: String,
  },
  data() {
    return {
      active: "",
    };
  },
  components: {
    NewsList,
  },
  computed: {},
  methods: {
    // 初始化
    initChildTab() {
      if (this.cIdActive) {
        this.active = this.cIdActive;
      }
    },
  },
  mounted() {
    this.initChildTab();
  },
};
</script>
<style lang="scss" rel="stylesheet/scss">
.myVanTab {
  .tabTitleClass {
    .van-tabs__wrap {
      padding-left: 20px;
      padding-right: 20px;
      height: 120px !important;
    }
    .van-tabs__nav {
      // border-top: 1px solid #e5e5e5 !important;
      &::after {
        position: absolute;
        box-sizing: border-box;
        content: " ";
        pointer-events: none;
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        border: 0 solid #ebedf0;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        border-top-width: 0.02667rem;
      }
    }
    .van-tab {
      font-weight: 600;
    }
  }
}
</style>
