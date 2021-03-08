<template>
  <div class="serviceAnnouncement box-b pt-50 pb-34 px-34">
    <div class="bg-white box-b px-8 py-12 borderLists">
      <!-- 购机者姓名 -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          购机者姓名
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ buyerName }}
        </div>
      </div>
      <!-- 所在市 -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          所在市
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ city }}
        </div>
      </div>
      <!-- 所在乡 -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          所在乡
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ hometown }}
        </div>
      </div>
      <!-- 村组 -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          村组
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ villageGroup }}
        </div>
      </div>
      <!-- 机具品目 -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          机具品目
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ machineItem }}
        </div>
      </div>
      <!-- 机具型号 -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          机具型号
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ machineModel }}
        </div>
      </div>
      <!-- 分档名称 -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          分档名称
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ binName }}
        </div>
      </div>
      <!-- 购机数量（台） -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          购机数量（台）
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ purchasesNum }}
        </div>
      </div>
      <!-- 生产企业 -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          生产企业
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ manufacturer }}
        </div>
      </div>
      <!-- 销售总价（元） -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          销售总价（元）
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ totalSalePrice }}
        </div>
      </div>
      <!-- 经销商 -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          经销商
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ dealer }}
        </div>
      </div>
      <!-- 中央补贴（元） -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          中央补贴（元）
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ centralSubsidy }}
        </div>
      </div>
      <!-- 省级补贴（元） -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          省级补贴（元）
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ provincialSubsidy }}
        </div>
      </div>
      <!-- 市级补贴（元） -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          市级补贴（元）
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ municipalSubsidy }}
        </div>
      </div>
      <!-- 县级补贴（元） -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          县级补贴（元）
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ countySubsidy }}
        </div>
      </div>
      <!-- 状态 -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          状态
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ status }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServiceAnnouncement",
  data() {
    return {
      // 购机者姓名
      buyerName: "",
      // 所在市
      city: "",
      // 所在乡
      hometown: "",
      // 村组
      villageGroup: "",
      // 机具品目
      machineItem: "",
      // 机具型号
      machineModel: "",
      // 分档名称
      binName: "",
      // 购机数量（台）
      purchasesNum: "",
      // 生产企业
      manufacturer: "",
      // 销售总价（元）
      totalSalePrice: "",
      // 经销商
      dealer: "",
      // 中央补贴（元）
      centralSubsidy: "",
      // 省级补贴（元）
      provincialSubsidy: "",
      // 市级补贴（元）
      municipalSubsidy: "",
      // 县级补贴（元）
      countySubsidy: "",
      // 状态
      status: "",
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.serviceAnnouncement {
  .borderLists {
    border: 0.028rem dashed #239688;
    > div {
      .border-ld {
        border-right: 0.028rem dashed #d0d0d0;
      }
      &:nth-child(odd) {
        background-color: #ffffff;
      }
      &:nth-child(even) {
        background-color: #f2f2f2;
      }
    }
    .minH {
      min-height: 88px;
    }
    .wordWrap {
      word-wrap: break-word;
      word-break: break-all;
    }
  }
}
</style>
