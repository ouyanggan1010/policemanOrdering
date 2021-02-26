<template>
  <div class="messageDetails pt-50 box-b px-30">
    <div class="bg-white box-b px-60">
      <div class="van-hairline--bottom fs-48 text-black-31 fw-6 py-38">
        {{title}}
      </div>
      <div class="py-38">
        <div class="fs-36 text-black-61 fw-6" style="min-height:50px">
          {{content}}
        </div>
        <div class="fs-30 text-black-61 fw-6 text-right mt-30">
          <span>{{date}}</span>
          <span class="ml-10">{{time}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MessageDetails",
  data() {
    return {
      title:"头像审核不通过！",
      content:"头像存在反共信息，请重新上传头像。",
      time:"13:30",
      date:"2018-07-28"
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
