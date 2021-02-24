<template>
  <div class="qa mt-80 box-b px-50">
    <router-link tag="div" to="/qaMyCnt" class="divBlock yellow d-flex ai-center">
      <span class="myIcon-qaMyqa"></span>
      <div class="fs-66 text-white">我的问答</div>
    </router-link>
    <router-link tag="div" to="/qaList" class="divBlock blue mt-40 d-flex ai-center">
      <span class="myIcon-qaComList"></span>
      <div class="fs-66 text-white">常见问题列表</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Qa",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.qa {
  .divBlock {
    width: 100%;
    height: 410px;
    border-radius: 15px;
    &.yellow {
      background-color: #f2ba49;
    }
    &.blue {
      background-color: #4db3d0;
    }
    >span{
      margin-left: 160px;
      margin-right: 100px;
    }
  }
}
</style>
