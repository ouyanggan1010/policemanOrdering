<template>
  <div class="newsDetails box-b px-32 py-60">
    <div class="contentH bg-white box-b px-40 py-30">
      <div class="fs-42 text-black-31 fw-6 lineH-66">{{ title }}</div>
      <div class="d-flex jc-start ai-center mt-30">
        <div class="d-flex jc-start ai-center iconTitle">
          <span class="myIcon-tipsIcon mr-16"></span>
          <span class="fs-32 text-black-91">{{ sort }}</span>
        </div>
        <div class="d-flex jc-start ai-center">
          <span class="myIcon-date mr-16"></span>
          <span class="fs-32 text-black-91">{{ time }}</span>
        </div>
      </div>
      <div class="fs-36 text-black-31 fw-6 lineH-60 mt-30">{{ content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsDetails",
  data() {
    return {
      title: "习近平出席全国生态环境保护大会并发表重要讲话习近平出席全国生态环境保",
      sort: "政策法规",
      time: "2020-01-05",
      content: "协议的回复回复的积分和恢复交水电费交",
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.newsDetails {
  .contentH {
    min-height: calc(100vh - 132.47px - 120px);
    .iconTitle{
      width: 250px;
    }
  }
}
</style>
