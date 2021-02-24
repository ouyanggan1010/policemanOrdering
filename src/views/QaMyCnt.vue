<template>
  <div class="qaMyCnt box-b pt-50 px-36">
    <div
      class="d-flex ai-center jc-between fs-42 fw-6 text-black31 bg-white px-28 box-b heightDiv-124"
    >
      <div class="d-flex ai-center">
        <span class="myIcon-myQa"></span>
        <span class="ml-28">我的提问数：</span>
      </div>
      <div>
        <span class="text-green-88">{{ count }}</span
        >个
      </div>
    </div>
    <!-- 列表 -->
    <AskList type="qaMyCnt"></AskList>
  </div>
</template>
<script>
import AskList from "../components/AskList.vue";
export default {
  name: "QaMyCnt",
  components: {
    AskList,
  },
  data() {
    return {
      count: 10,
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.qaMyCnt{
  height: calc(100vh - 132.47px - 143.98px);
}
</style>
