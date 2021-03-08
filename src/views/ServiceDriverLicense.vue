<template>
  <div class="serviceFile">
    <van-tabs
      class="tabTitleClass"
      title-inactive-color="#313131"
      title-active-color="#00b96b"
      line-width="75"
      color="#00b96b"
      v-model="active"
      animated
    >
      <van-tab title="基础信息">
        <ServiceDriveBasic />
      </van-tab>
      <van-tab title="违法违章">
        <ServiceFileIllegal />
      </van-tab>
      <van-tab title="业务记录">
        <ServiceFileBusiness />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import ServiceDriveBasic from "../components/ServiceDriveBasic.vue";
import ServiceFileIllegal from "../components/ServiceFileIllegal.vue";
import ServiceFileBusiness from "../components/ServiceFileBusiness.vue";
export default {
  name: "ServiceFile",
  components: {
    ServiceDriveBasic,
    ServiceFileIllegal,
    ServiceFileBusiness
  },
  data() {
    return {
      active: 0,
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
