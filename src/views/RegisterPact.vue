<template>
  <div class="registerPact box-b px-32 py-60">
    <div class="contentH bg-white box-b px-50 py-60 fs-40 text-black-31 fw-6 lineH-70">
      {{ content }}
    </div>
  </div>
</template>
<script>
export default {
  name: "RegisterPact",
  data() {
    return {
      content: "协议的回复回复的积分和恢复交水电费交",
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.registerPact {
  .contentH {
    min-height: calc(100vh - 132.47px - 120px);
  }
}
</style>
