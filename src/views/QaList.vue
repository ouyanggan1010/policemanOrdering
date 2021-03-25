<template>
  <div class="qaList box-b pt-50 px-36">
    <!-- 搜索 -->
    <van-search v-model="serchValue" shape="round" placeholder="关键字搜索" />
    <!-- 下拉菜单 -->
    <DropDownMenu
      :dataOne="popoverArryOne"
      :dataTwo="popoverArryTwo"
      :nameOne="popoverNameOne"
      :nameTwo="popoverNameTwo"
      @event_arry="onPopover"
    />
    <!-- 列表部分 -->
    <AskList type="qaList"></AskList>
  </div>
</template>
<script>
import AskList from "../components/AskList.vue";
import DropDownMenu from "../components/DropDownMenu.vue";
export default {
  name: "QaList",
  components: {
    AskList,
    DropDownMenu
  },
  data() {
    return {
      serchValue: "",
      // ------------------下拉菜单1数据
      popoverArryOne: ["全部", "类型一", "类型二"],
      popoverNameOne: "按问答类型筛选",
      // ------------------下拉菜单2数据
      popoverArryTwo: ["全部", "已回答", "未回答"],
      popoverNameTwo: "按问答状态筛选",
    };
  },
  computed: {},
  methods: {
    // --------------------------下拉菜单选中提交请求
    onPopover(data) {
      console.log(data);
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.qaList {
  height: calc(100vh - 132.47px - 143.98px);
}
</style>
