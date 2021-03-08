<template>
  <div class="serviceFileBasic">
    <!-- 所有人信息 -->
    <div class="mt-50">
      <div
        class="top bg-green-6b heightDiv-88 fs-36 text-white fw-6 d-flex ai-center jc-center"
      >
        所有人信息
      </div>
      <div class="bg-white box-b px-8 py-12 borderLists">
        <!-- 姓名/联系电话 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthPer-2 p-10 border-ld d-flex ai-center box-b">
            姓名：{{ ownerInformation.userName }}
          </div>
          <div class="widthPer-2 p-10 d-flex ai-center box-b">
            联系电话：{{ ownerInformation.phone }}
          </div>
        </div>
        <!-- 住所地址 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="d-flex ai-center box-b p-10 wordWrap">
            住所地址：{{ ownerInformation.address }}
          </div>
        </div>
        <!-- 身份证号 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="d-flex ai-center box-b p-10 wordWrap">
            身份证号：{{ ownerInformation.idNumber }}
          </div>
        </div>
      </div>
    </div>
    <!-- 农机信息 -->
    <div class="mt-50">
      <div
        class="top bg-green-6b heightDiv-88 fs-36 text-white fw-6 d-flex ai-center jc-center"
      >
        农机信息
      </div>
      <div class="bg-white box-b px-8 py-12 borderLists">
        <!-- 号牌号码/状态 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthPer-2 p-10 border-ld d-flex ai-center box-b">
            号牌号码：{{ machineryInformation.plateNumber }}
          </div>
          <div class="widthPer-2 p-10 d-flex ai-center box-b">
            状态：<span class="text-red-4e">{{
              machineryInformation.status
            }}</span>
          </div>
        </div>
        <!-- 农机类型/品牌型号 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthPer-2 p-10 border-ld d-flex ai-center box-b">
            农机类型：{{ machineryInformation.types }}
          </div>
          <div class="widthPer-2 p-10 d-flex ai-center box-b">
            品牌型号：{{ machineryInformation.brandModel }}
          </div>
        </div>
        <!-- 机身颜色/发动机型号 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthPer-2 p-10 border-ld d-flex ai-center box-b">
            机身颜色：{{ machineryInformation.bodyColor }}
          </div>
          <div class="widthPer-2 p-10 d-flex ai-center box-b">
            发动机型号：{{ machineryInformation.engineModel }}
          </div>
        </div>
        <!-- 发动机号码/机身(底盘)号码 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthPer-2 p-10 border-ld d-flex ai-center box-b">
            发动机号码：{{ machineryInformation.engineNumber }}
          </div>
          <div class="widthPer-2 p-10 d-flex ai-center box-b">
            机身(底盘)号码：{{ machineryInformation.bodyNumber }}
          </div>
        </div>
        <!-- 挂车架号码/出厂日期 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthPer-2 p-10 border-ld d-flex ai-center box-b">
            挂车架号码：{{ machineryInformation.trailerNumber }}
          </div>
          <div class="widthPer-2 p-10 d-flex ai-center box-b">
            出厂日期：{{ machineryInformation.manufactureDate }}
          </div>
        </div>
        <!-- 检验证合格编号/获得方式 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthPer-2 p-10 border-ld d-flex ai-center box-b">
            检验证合格编号：{{ machineryInformation.inspectionNumber }}
          </div>
          <div class="widthPer-2 p-10 d-flex ai-center box-b">
            获得方式：{{ machineryInformation.obtainWays }}
          </div>
        </div>
        <!-- 登记证书编号 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="d-flex ai-center box-b p-10 wordWrap">
            登记证书编号：{{ machineryInformation.certificateNumber }}
          </div>
        </div>
        <!-- 检验有效期 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="d-flex ai-center box-b p-10 wordWrap">
            <!-- 距离年审时间还有30天/已超过年审30天 -->
            检验有效期：{{ machineryInformation.validityPeriod }}(<span
              class="text-red-4e"
              >已超过年审30天</span
            >)
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServiceFileBasic",
  data() {
    return {
      // 所有人信息
      ownerInformation: {
        // 姓名
        userName: "",
        // 联系电话
        phone: "",
        // 住所地址
        address: "",
        // 身份证号
        idNumber: "",
      },
      // 农机信息
      machineryInformation: {
        // 号牌号码
        plateNumber: "",
        // 状态
        status: "",
        // 农机类型
        types: "",
        // 品牌型号
        brandModel: "",
        // 机身颜色
        bodyColor: "",
        // 发动机型号
        engineModel: "",
        // 发动机号码
        engineNumber: "",
        // 机身(底盘)号码
        bodyNumber: "",
        // 挂车架号码
        trailerNumber: "",
        // 出厂日期
        manufactureDate: "",
        // 检验证合格编号
        inspectionNumber: "",
        // 获得方式
        obtainWays: "",
        // 登记证书编号
        certificateNumber: "",
        // 检验有效期
        validityPeriod: "",
        // 年审
        yearReview: "",
      },
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.serviceFileBasic {
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
