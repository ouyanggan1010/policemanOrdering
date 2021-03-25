<template>
  <div class="selectDate bg-white box-b py-28 d-flex jc-around">
    <div
      class="item"
      :class="{ active: index == currentIndex }"
      v-for="(list, index) in lists"
      :key="index"
      @click="changeRes(index, list)"
    >
      {{ list.cnt }}
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectDate",
  data() {
    return {
      currentIndex: 0,
      lists: [
        {
          type: "0",
          cnt: "今日实时",
        },
        {
          type: "1",
          cnt: "昨日",
        },
        {
          type: "2",
          cnt: "本周",
        },
        {
          type: "3",
          cnt: "本月",
        },
      ],
    };
  },
  computed: {},
  methods: {
    changeRes(index, list) {
      this.currentIndex = index;
      this.$emit('event_getDate',list);
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.selectDate {
  > .item {
    width: 215px;
    height: 68px;
    border-radius: 20px;
    color: #313131;
    font-size: 35px;
    font-weight: 600;
    text-align: center;
    line-height: 68px;
    &.active {
      background-color: #00b96b;
      color: #ffffff;
    }
  }
}
</style>
