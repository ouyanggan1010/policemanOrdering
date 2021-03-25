<template>
  <div class="productPrices" ref="container">
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
      <van-tab title="冬季瓜菜" name="melons">
        <WinterMelons />
      </van-tab>
      <van-tab title="常年蔬菜" name="vegetables">
        <PerennialVegetables />
      </van-tab>
      <van-tab title="畜禽产品" name="livestock">
        <LivestockProducts />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import WinterMelons from "../components/WinterMelons.vue";
import PerennialVegetables from "../components/PerennialVegetables.vue";
import LivestockProducts from "../components/LivestockProducts.vue";

export default {
  name: "ProductPrices",
  components: {
    WinterMelons,
    PerennialVegetables,
    LivestockProducts,
  },
  data() {
    return {
      active: "melons",
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
