<template>
  <div class="home pb-40">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" class="swipeImages" indicator-color="white">
      <van-swipe-item v-for="image in images" :key="image.id">
        <van-image
          lazy-load
          width="100%"
          height="100%"
          fit="contain"
          :src="image.pic"
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 四宫格 -->
    <van-grid :border="false" :column-num="4" class="mt-26">
      <van-grid-item :to="item.link" v-for="(item, i) in gridsFour" :key="i">
        <template #icon>
          <span :class="item.icon"></span>
        </template>
        <template #text>
          <span class="fs-32 text-black-31">{{ item.title }}</span>
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 两宫格 -->
    <van-grid
      direction="horizontal"
      :border="false"
      :column-num="2"
      class="mt-24"
    >
      <van-grid-item :to="item.link" v-for="(item, j) in gridsTwo" :key="j">
        <template #icon>
          <div class="gridsTwoIcon"><span :class="item.icon"></span></div>
        </template>
        <template #text>
          <div class="gridsTwoText ml-36">
            <span class="fs-42 text-black-31">{{ item.title }}</span>
            <span class="fs-30 text-black-91 mt-6">{{ item.tips }}</span>
          </div>
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 卡片 -->
    <div class="cardLists mt-24">
      <div class="head">
        <div class="d-flex jc-between ai-center">
          <div class="line"></div>
          <div class="fs-36 text-black-31 ml-26">最新资讯</div>
        </div>
        <router-link tag="div" to="" class="fs-30 text-black-61"
          >查看更多</router-link
        >
      </div>
      <div class="cards">
        <router-link
          tag="div"
          to=""
          class="card d-flex"
          v-for="item in latestNews"
          :key="item.id"
        >
          <div class="image">
            <van-image
              lazy-load
              width="100%"
              height="100%"
              fit="contain"
              :src="item.pic"
            />
          </div>
          <div class="ml-26 mr-10 d-flex flex-column jc-between">
            <div class="fs-36 text-black-31 fw-6">{{ item.title }}</div>
            <div class="d-flex jc-end ai-center">
              <span class="myIcon-date mr-16"></span>
              <span class="fs-32 text-black-91">{{ item.date }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      // 轮播图片数组
      images: [
        {
          id: "swiper_01",
          pic: "https://img01.yzcdn.cn/vant/apple-1.jpg"
        },
        {
          id: "swiper_02",
          pic: "https://img01.yzcdn.cn/vant/apple-2.jpg"
        },
        {
          id: "swiper_03",
          pic: "https://img01.yzcdn.cn/vant/apple-3.jpg"
        },
      ],
      // 政策法规、通知公告、强农惠农、应急管理列表数组
      gridsFour: [
        {
          title: "政策法规",
          icon: "myIcon-policies",
          link: "/service",
        },
        {
          title: "通知公告",
          icon: "myIcon-notice",
          link: "/",
        },
        {
          title: "强农惠农",
          icon: "myIcon-farmer",
          link: "/",
        },
        {
          title: "应急管理",
          icon: "myIcon-emergency",
          link: "/",
        },
      ],
      // 农产品价格、农产品检测列表数组
      gridsTwo: [
        {
          title: "农产品价格",
          tips: "每日农产品价格信息",
          icon: "myIcon-agriculturalPrice",
          link: "/service",
        },
        {
          title: "农产品检测",
          tips: "农产品质量安全检测",
          icon: "myIcon-agriculturalTesting",
          link: "/",
        },
      ],
      // 最新资讯
      latestNews: [
        {
          id: "news_01",
          pic: "https://img01.yzcdn.cn/vant/apple-1.jpg",
          title: "为了“中国饭碗”的底座更坚实——国家南繁基地",
          date: "2018-01-01",
        },
        {
          id: "news_02",
          pic: "https://img01.yzcdn.cn/vant/apple-2.jpg",
          title: "产业扶贫政策落地组第一次会议在省农业厅召开",
          date: "2018-04-01",
        },
      ],
    };
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>
