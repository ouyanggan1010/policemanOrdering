<template>
  <div class="productPrices">
    <van-tabs
      class="tabTitleClass"
      title-inactive-color="#313131"
      title-active-color="#00b96b"
      line-width="75"
      color="#00b96b"
      v-model="active"
      animated
      sticky
      offset-top="1.22667rem"
    >
      <van-tab title="检查信息" name="checkMsg">
        <CheckMsg />
      </van-tab>
      <van-tab title="抽检信息" name="spotMsg">
        <SpotMsg />
      </van-tab>
      <van-tab title="出岛信息" name="dejimaMsg">
        <DejimaMsg />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import CheckMsg from "../components/CheckMsg.vue";
import SpotMsg from "../components/SpotMsg.vue";
import DejimaMsg from "../components/DejimaMsg.vue";

export default {
  name: "ProductPrices",
  components: {
    CheckMsg,
    SpotMsg,
    DejimaMsg,
  },
  data() {
    return {
      active: "checkMsg",
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.ProductPrices {
}
</style>
