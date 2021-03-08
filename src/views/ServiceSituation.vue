<template>
  <div class="serviceSituation box-b pt-50 pb-34 px-34">
    <div class="bg-white box-b px-8 py-12 borderLists">
      <!-- 市 -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">市</div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ city }}
        </div>
      </div>
      <!-- 县 -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">县</div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ county }}
        </div>
      </div>
      <!-- 投入资金数（中央） -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          投入资金数（中央）
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ investedFundsNum }}
        </div>
      </div>
      <!-- 中央补贴使用资金(含报废) -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">
          中央补贴使用资金(含报废)
        </div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ centralSubsidyUseFunds }}
        </div>
      </div>
      <!-- 中央补贴使用比例(含报废) -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">中央补贴使用比例(含报废)</div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ centralSubsidyUseRatio }}
        </div>
      </div>
      <!-- 中央补贴结算资金(含报废) -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">中央补贴结算资金(含报废)</div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ centralSubsidySettlementFunds }}
        </div>
      </div>
      <!-- 中央补贴结算比例(含报废) -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">中央补贴结算比例(含报废)</div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ centralSubsidySettlementRatio }}
        </div>
      </div>
      <!-- 报废更新使用资金 -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">报废更新使用资金</div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ retirementFunds }}
        </div>
      </div>
      <!-- 投入资金数(省） -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">投入资金数(省)</div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ investedFunds }}
        </div>
      </div>
      <!-- 使用资金(省) -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">使用资金(省)</div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ provinceUseFunds }}
        </div>
      </div>
      <!-- 使用资金比例(省) -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">使用资金比例(省)</div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ provinceUseFundsRatio }}
        </div>
      </div>
      <!-- 结算资金(省） -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">结算资金(省)</div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ provinceSettlementFunds }}
        </div>
      </div>
      <!-- 结算资金比例(省) -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">结算资金比例(省)</div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ provinceSettlementFundsRatio }}
        </div>
      </div>
      <!-- 使用资金(市) -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">使用资金(市)</div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ cityUseFunds }}
        </div>
      </div>
      <!-- 使用资金(县) -->
      <div class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH">
        <div class="widthDiv-450 border-ld d-flex ai-center jc-center">使用资金(县)</div>
        <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
          {{ countyUseFunds }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServiceSituation",
  data() {
    return {
      // 市
      city: "",
      // 县
      county: "",
      // 投入资金数（中央）
      investedFundsNum: "",
      // 中央补贴使用资金(含报废)
      centralSubsidyUseFunds: "",
      // 中央补贴使用比例(含报废)
      centralSubsidyUseRatio: "",
      // 中央补贴结算资金(含报废)
      centralSubsidySettlementFunds: "",
      // 中央补贴结算比例(含报废)
      centralSubsidySettlementRatio: "",
      // 报废更新使用资金
      retirementFunds: "",
      // 投入资金数(省）
      investedFunds: "",
      // 使用资金(省)
      provinceUseFunds: "",
      // 使用资金比例(省)
      provinceUseFundsRatio: "",
      // 结算资金(省）
      provinceSettlementFunds: "",
      // 结算资金比例(省)
      provinceSettlementFundsRatio: "",
      // 使用资金(市)
      cityUseFunds: "",
      // 使用资金(县)
      countyUseFunds: "",
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.serviceSituation {
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
