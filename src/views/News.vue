<template>
  <div class="news">
    <van-tabs
      color="#00b96b"
      title-inactive-color="#313131"
      class="tabsTitleClass"
      type="card"
      v-model="active"
    >
      <van-tab
        v-for="tabs in tabsOne"
        title-class="titleClass"
        :key="tabs.id"
        :title="tabs.title"
        :name="tabs.id"
      >
        <MyVanTab :tab="tabs" :cIdActive="cIdActive"></MyVanTab>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import MyVanTab from "../components/MyVanTab.vue";
export default {
  name: "News",
  props: ["pIdActive", "cIdActive"],
  data() {
    return {
      active: "",
      tabsOne: [],
    };
  },
  components: {
    MyVanTab,
  },
  computed: {},
  methods: {
    // 初始化请求
    getTabList() {
      this.tabsOne = [
        {
          id: "id_01",
          title: "政策法规",
          children: [
            {
              id: "id_0101",
              title: "政策法规",
            },
            {
              id: "id_0102",
              title: "重要决策",
            },
            {
              id: "id_0103",
              title: "政策解读",
            },
          ],
        },
        {
          id: "id_02",
          title: "新闻动态",
          children: [
            {
              id: "id_0201",
              title: "政务动态",
            },
            {
              id: "id_0202",
              title: "关注热点",
            },
            {
              id: "id_0203",
              title: "市县联播",
            },
            {
              id: "id_0204",
              title: "专题报道",
            },
          ],
        },
        {
          id: "id_03",
          title: "通知公告",
          children: [
            {
              id: "id_0301",
              title: "公告告示",
            },
            {
              id: "id_0302",
              title: "行政通知",
            },
          ],
        },
        {
          id: "id_04",
          title: "强农惠农",
          children: [],
        },
        {
          id: "id_05",
          title: "应急管理",
          children: [],
        },
      ];
      // 初始化选中项
      this.active = this.pIdActive ? this.pIdActive : "";
    },
  },
  mounted() {
    this.getTabList();
  },
};
</script>
<style lang="scss" rel="stylesheet/scss">
.news {
  .tabsTitleClass {
    height: 100%;
    $hieght: 145px;
    .van-tabs__wrap {
      height: $hieght;
      background-color: #fff;
    }
    .van-tabs__nav--card {
      height: $hieght;
      border: none;
      margin: 0 20px;
      padding: 33px 0;
      box-sizing: border-box;
      .titleClass {
        border-right: none;
        font-weight: 600;
        &.van-tab--active {
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
