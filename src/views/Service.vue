<template>
  <div class="service d-flex ai-center">
    <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
      <swiper-slide
        class="swiper-slide d-flex ai-center jc-center flex-column"
        :class="item.bgColor"
        v-for="(item, index) in iconsText"
        :key="index"
      >
        <van-image width="5rem" height="5rem" fit="contain" :src="item.pic" />
        <div class="fs-72 text-white mt-120">{{item.title}}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      // 轮播
      swiperOption: {
        // 设置slider容器能够同时显示的slides数量
        slidesPerView: "auto",
        loop: true,
        // 居中
        centeredSlides: true,
      },
      // 图片与文字
      iconsText: [
        {
          title: "农机驾驶证",
          pic: require("../assets/images/driverLicense.png"),
          bgColor:"bg-yellow-4b",
          link:""
        },
        {
          title: "农机购置补贴",
          pic: require("../assets/images/subsidy.png"),
          bgColor:"bg-blue-e5",
          link:""
        },
        {
          title: "农机档案",
          pic: require("../assets/images/file.png"),
          bgColor:"bg-red-84",
          link:""
        },
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style lang="scss" rel="stylesheet/scss">
.service {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .swiperItem {
    height: 1106px;
  }
  .swiper-container {
    width: 100%;
    height: 1238px;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    width: 70% !important;
    transition: 300ms;
    transform: scale(0.8);
    border-radius: 20px;
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1);
  }
}
</style>
