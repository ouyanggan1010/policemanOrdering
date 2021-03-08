<template>
  <div class="serviceSearch">
    <!-- 器具信息 -->
    <div class="mt-50">
      <div
        class="top bg-green-6b heightDiv-88 fs-36 text-white fw-6 d-flex ai-center jc-center"
      >
        器具信息
      </div>
      <div class="bg-white box-b px-8 py-12 borderLists">
        <!-- 机具大类 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            机具大类
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ machineInformation.bigCategory }}
          </div>
        </div>
        <!-- 机具小类 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            机具小类
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ machineInformation.subCategory }}
          </div>
        </div>
        <!-- 机具品目 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            机具品目
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ machineInformation.items }}
          </div>
        </div>
        <!-- 分档名称 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            分档名称
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ machineInformation.binName }}
          </div>
        </div>
        <!-- 产品名称 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            产品名称
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ machineInformation.productName }}
          </div>
        </div>
        <!-- 规格型号 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            规格型号
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ machineInformation.specificationModel }}
          </div>
        </div>
        <!-- 功率（kw） -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            功率（kw）
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ machineInformation.power }}
          </div>
        </div>
        <!-- 中央补贴额 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            中央补贴额
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ machineInformation.centralSubsidy }}
          </div>
        </div>
        <!-- 特殊县省补贴额 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            特殊县省补贴额
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ machineInformation.specialSubsidiesP }}
          </div>
        </div>
        <!-- 市补贴额 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            市补贴额
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ machineInformation.citySubsidy }}
          </div>
        </div>
        <!-- 特殊县市补贴额 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            特殊县市补贴额
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ machineInformation.specialSubsidiesC }}
          </div>
        </div>
        <!-- 县补贴额 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            县补贴额
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ machineInformation.provinceSubsidy }}
          </div>
        </div>
        <!-- 特殊县县补贴额 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            特殊县县补贴额
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ machineInformation.specialSubsidiesCy }}
          </div>
        </div>
      </div>
    </div>
    <!-- 证书信息 -->
    <div class="mt-50">
      <div
        class="top bg-green-6b heightDiv-88 fs-36 text-white fw-6 d-flex ai-center jc-center"
      >
        证书信息
      </div>
      <div class="bg-white box-b px-8 py-12 borderLists">
        <!-- 推广证书编号 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            推广证书编号
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ certificateInformation.certificateNumber }}
          </div>
        </div>
        <!-- 证书有效期截止日 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            证书有效期截止日
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ certificateInformation.deadline }}
          </div>
        </div>
      </div>
    </div>
    <!-- 生产企业信息 -->
    <div class="mt-50">
      <div
        class="top bg-green-6b heightDiv-88 fs-36 text-white fw-6 d-flex ai-center jc-center"
      >
        生产企业信息
      </div>
      <div class="bg-white box-b px-8 py-12 borderLists">
        <!-- 企业名称 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            企业名称
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ companyInformation.companyName }}
          </div>
        </div>
        <!-- 住所(经营场所) -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            住所(经营场所)
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ companyInformation.businessPremises }}
          </div>
        </div>
        <!-- 法人代表姓名 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            法人代表姓名
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ companyInformation.legalName }}
          </div>
        </div>
        <!-- 邮箱 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            邮箱
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ companyInformation.mailbox }}
          </div>
        </div>
        <!-- 销售联系人 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            销售联系人
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ companyInformation.salesContact }}
          </div>
        </div>
        <!-- 销售联系电话 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthDiv-420 border-ld d-flex ai-center jc-center">
            销售联系电话
          </div>
          <div class="flex-1 py-10 px-10 d-flex ai-center jc-center wordWrap">
            {{ companyInformation.salesContactPhone }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServiceSearch",
  data() {
    return {
      // 器具信息
      machineInformation: {
        // 器具大类
        bigCategory: "",
        // 机具小类
        subCategory: "",
        // 机具品目
        items: "",
        // 分档名称
        binName: "",
        // 产品名称
        productName: "",
        // 规格型号
        specificationModel: "",
        // 功率
        power: "",
        // 中央补贴额
        centralSubsidy: "",
        // 特殊县省补贴额
        specialSubsidiesP: "",
        // 市补贴额
        citySubsidy: "",
        // 特殊县市补贴额
        specialSubsidiesC: "",
        // 县补贴额
        provinceSubsidy: "",
        // 特殊县县补贴额
        specialSubsidiesCy: "",
      },
      // 证书信息
      certificateInformation: {
        // 推广证书编号
        certificateNumber: "",
        // 证书有效期截止日
        deadline: "",
      },
      // 生产企业信息
      companyInformation: {
        // 企业名称
        companyName: "",
        // 住所(经营场所)
        businessPremises: "",
        // 法人代表姓名
        legalName: "",
        // 邮箱
        mailbox: "",
        // 销售联系人
        salesContact: "",
        // 销售联系电话
        salesContactPhone: "",
      },
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.serviceSearch {
  padding: 0 32px;
  padding-bottom: 50px;
  box-sizing: border-box;
  .borderLists {
    border-left: 0.028rem dashed #239688;
    border-right: 0.028rem dashed #239688;
    border-bottom: 0.028rem dashed #239688;
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
