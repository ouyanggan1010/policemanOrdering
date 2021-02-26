<template>
  <div class="qaAsking mt-50 px-30 pb-60">
    <!-- 下拉菜单 -->
    <van-popover
      class="widthPer-1"
      v-model="showPopover"
      trigger="click"
      overlay
    >
      <template #reference>
        <div
          class="d-flex ai-center jc-between box-b bg-white widthPer-1 heightDiv-124 px-34"
        >
          <div class="fs-36 fw-6 text-black-31">
            {{ selected ? selected : "请选择类别" }}
          </div>
          <van-icon class="text-gray-c8 fs-52" name="arrow-down" />
        </div>
      </template>
      <div class="popoverclassLists box-b px-24 py-20">
        <div
          class="popoverList van-hairline--top popoverWidth2 fs-36 fw-6 text-black-31 d-flex jc-between ai-center px-22"
          v-for="(popover, i) in popoverArry"
          :key="popover"
          @click="changePopover(i)"
        >
          <div>{{ popover }}</div>
          <span
            v-if="popoverActive && popoverActive == i"
            class="myIcon-checkBlue"
          ></span>
        </div>
      </div>
    </van-popover>
    <!-- 标题与答案 -->
    <van-form @submit="onSubmit" validate-first class="pt-24">
      <van-cell-group :border="false">
        <van-field
          v-model="title"
          name="title"
          placeholder="请输入标题"
          :rules="[{ required: true, message: '请填写标题' }]"
        >
        </van-field>
        <van-field
          v-model="question"
          name="question"
          rows="6"
          autosize
          type="textarea"
          placeholder="请输入问题"
          :rules="[{ required: true, message: '请填写问题' }]"
        >
        </van-field>
      </van-cell-group>
      <div class="mt-100">
        <van-button block color="#00b96b" type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
    <!-- 认证完成弹框 -->
    <SimpleBox
      :objBox="{
        show: showRegisterBox,
        overlay: false,
        icon: 'myIcon-registerSuccess',
        textStr: '提交成功',
        isBtnOne: true,
        btnOneStr: '确定',
      }"
      @box_determine="registerBtn"
    ></SimpleBox>
  </div>
</template>
<script>
import SimpleBox from "../components/SimpleBox.vue";
export default {
  name: "QaAsking",
  data() {
    return {
      // 下拉气泡
      showPopover: false,
      popoverActive: "",
      popoverArry: ["全部", "类别一", "类别二", "类别三"],
      selected: "",
      // 表单项
      title: "",
      question: "",
      // 完成弹框
      showRegisterBox: false,
    };
  },
  components: {
    // 弹框组件
    SimpleBox,
  },
  computed: {},
  methods: {
    // 下来菜单选项的点击事件
    changePopover(index) {
      this.popoverActive = index;
      this.showPopover = false;
      this.selected = this.popoverArry[index];
    },
    // 提交按钮
    onSubmit(values) {
      if (!this.selected) {
        this.$Toast({ message: "请选择类别", position: "bottom" });
        return false;
      }
      console.log("submit", values);
      this.showRegisterBox = true;
    },
    // --------------点击弹框的确定按钮
    registerBtn() {
      this.$router.replace("/qaMyCnt");
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
