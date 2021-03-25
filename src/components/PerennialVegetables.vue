<template>
  <div class="perennialVegetables">
    <DropDownMenu
      :dataOne="popoverArryOne"
      :dataTwo="popoverArryTwo"
      :nameOne="popoverNameOne"
      :nameTwo="popoverNameTwo"
      @event_arry="onPopover"
    />
    <!-- 日期 -->
    <DateLinkage @event_search="onDateSearch" />
    <!-- 表格 -->
    <div class="py-50 box-b px-30 tableHight" v-if="tableList.length > 0">
      <div>
        <div class="minH box-b py-10 px-8 bg-green-6b d-flex fs-32 text-white">
          <div
            class="d-flex ai-center flex-column jc-center widthP1 text-center"
          >
            市县名称
          </div>
          <div
            class="d-flex ai-center flex-column jc-center widthP2 text-center"
          >
            名称
          </div>
          <div class="d-flex ai-center flex-column jc-center widthP3">
            <div class="text-center">价格</div>
            <div class="text-center">(元/公斤)</div>
          </div>
          <div
            class="d-flex ai-center flex-column jc-center widthP2 text-center"
          >
            上市量
          </div>
        </div>
        <div class="box-b py-14 px-8 borderTab bg-white">
          <div
            class="minH box-b py-10 d-flex fs-36 text-black-31"
            v-for="list in tableList"
            :key="list.id"
          >
            <div
              class="d-flex ai-center flex-column jc-center widthP1 text-center box-b px-8"
            >
              {{ list.cityCountyName }}
            </div>
            <div
              class="d-flex ai-center flex-column jc-center widthP2 text-center box-b px-8"
            >
              {{ list.varietyName }}
            </div>
            <div
              class="d-flex ai-center flex-column jc-center widthP3 text-center box-b px-8"
            >
              {{ list.price }}
            </div>
            <div
              class="d-flex ai-center flex-column jc-center widthP4 text-center box-b px-8"
            >
              {{ list.listingsNum }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容为空 -->
    <van-empty v-else description="内容为空，请重新搜索" />
  </div>
</template>
<script>
import DropDownMenu from "../components/DropDownMenu.vue";
import DateLinkage from "../components/DateLinkage.vue";
export default {
  name: "PerennialVegetables",
  components: {
    DropDownMenu,
    DateLinkage,
  },
  data() {
    return {
      // ------------------下拉菜单1数据
      popoverArryOne: ["琼中", "儋州", "白沙"],
      popoverNameOne: "市县名称",
      // ------------------下拉菜单2数据
      popoverArryTwo: ["木瓜", "番石榴", "莲雾"],
      popoverNameTwo: "名称",
      // ------------------表格内容
      tableList: [
        {
          id: "id_01",
          cityCountyName: "泡椒",
          varietyName: "合肥周谷堆市场",
          price: "3",
          listingsNum: "4.6",
        },
      ],
    };
  },
  computed: {},
  methods: {
    // --------------------------下拉菜单选中提交请求
    onPopover(data) {
      console.log(data);
    },
    // --------------------------日期范围搜索提交请求
    onDateSearch(data) {
      console.log(data);
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.perennialVegetables {
  .tableHight{
    height: calc(100vh - 132.47px - 126.72px - 125px - 140.13px - 24px);
    overflow-y: auto;
  }
  .minH {
    min-height: 88px;
  }
  .widthP1 {
    width: 24%;
  }
  .widthP2 {
    width: 30%;
  }
  .widthP3 {
    width: 23%;
  }
  .widthP4 {
    width: 23%;
  }
  .borderTab {
    border-left: 0.028rem dashed #239688;
    border-right: 0.028rem dashed #239688;
    border-bottom: 0.028rem dashed #239688;
    > div {
      &:nth-child(odd) {
        background-color: #ffffff;
      }
      &:nth-child(even) {
        background-color: #f2f2f2;
      }
    }
  }
}
</style>
