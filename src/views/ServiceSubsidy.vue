<template>
  <div class="serviceSubsidy">
    <van-tabs
      class="tabTitleClass"
      title-inactive-color="#313131"
      title-active-color="#00b96b"
      line-width="75"
      color="#00b96b"
      v-model="active"
      animated
    >
      <van-tab title="补贴情况公告" name="announcement">
        <ServiceAnnouncement />
      </van-tab>
      <van-tab title="资金使用情况" name="situation">
        <ServiceFundUsage />
      </van-tab>
      <van-tab title="补贴产品查询" name="search">
        <ServiceProductSearch />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import ServiceAnnouncement from "../components/ServiceAnnouncement.vue";
import ServiceFundUsage from "../components/ServiceFundUsage.vue";
import ServiceProductSearch from "../components/ServiceProductSearch.vue";

export default {
  name: "ServiceSubsidy",
  components: {
    ServiceAnnouncement,
    ServiceFundUsage,
    ServiceProductSearch,
  },
  data() {
    return {
      active: "announcement",
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
