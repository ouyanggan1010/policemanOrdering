<template>
  <div class="serviceDriveBasic">
    <!-- 驾驶员 -->
    <div class="mt-50">
      <div
        class="top bg-green-6b heightDiv-88 fs-36 text-white fw-6 d-flex ai-center jc-center"
      >
        驾驶员
      </div>
      <div class="bg-white box-b px-8 py-12 borderLists">
        <!-- 姓名/联系电话 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthPer-2 p-10 border-ld d-flex ai-center box-b">
            姓名：{{ driver.userName }}
          </div>
          <div class="widthPer-2 p-10 d-flex ai-center box-b">
            性别：{{ driver.sex }}
          </div>
        </div>
        <!-- 出生日期/籍贯 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthPer-2 p-10 border-ld d-flex ai-center box-b">
            出生日期：{{ driver.birthday }}
          </div>
          <div class="widthPer-2 p-10 d-flex ai-center box-b">
            籍贯：{{ driver.hometown }}
          </div>
        </div>
        <!-- 联系电话 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="d-flex ai-center box-b p-10 wordWrap">
            联系电话：{{ driver.phone }}
          </div>
        </div>
        <!-- 住所地址 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="d-flex ai-center box-b p-10 wordWrap">
            住所地址：{{ driver.address }}
          </div>
        </div>
        <!-- 身份证号 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="d-flex ai-center box-b p-10 wordWrap">
            身份证号：{{ driver.idNumber }}
          </div>
        </div>
      </div>
    </div>
    <!-- 证件信息 -->
    <div class="mt-50">
      <div
        class="top bg-green-6b heightDiv-88 fs-36 text-white fw-6 d-flex ai-center jc-center"
      >
        证件信息
      </div>
      <div class="bg-white box-b px-8 py-12 borderLists">
        <!-- 驾驶证号/状态 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthPer-2 p-10 border-ld d-flex ai-center box-b">
            驾驶证号：{{ identityInformaiton.driverLicenseNumber }}
          </div>
          <div class="widthPer-2 p-10 d-flex ai-center box-b">
            状态：<span class="text-red-4e">{{
              identityInformaiton.status
            }}</span>
          </div>
        </div>
        <!-- 初次受理日期/农机类型 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthPer-2 p-10 border-ld d-flex ai-center box-b">
            初次受理日期：{{ identityInformaiton.initialActDate }}
          </div>
          <div class="widthPer-2 p-10 d-flex ai-center box-b">
            农机类型：{{ identityInformaiton.machineryType }}
          </div>
        </div>
        <!-- 原档案号/档案号 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthPer-2 p-10 border-ld d-flex ai-center box-b">
            原档案号：{{ identityInformaiton.originalFileNumber }}
          </div>
          <div class="widthPer-2 p-10 d-flex ai-center box-b">
            档案号：{{ identityInformaiton.fileNumber }}
          </div>
        </div>
        <!-- 管辖区（代码）/初次领证日期 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthPer-2 p-10 border-ld d-flex ai-center box-b">
            管辖区（代码）：{{ identityInformaiton.jurisdictions }}
          </div>
          <div class="widthPer-2 p-10 d-flex ai-center box-b">
            初次领证日期：{{ identityInformaiton.firstCollectionDate }}
          </div>
        </div>
        <!-- 准驾机型/有效期 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="widthPer-2 p-10 border-ld d-flex ai-center box-b">
            准驾机型：{{ identityInformaiton.quasiDrivingModel }}
          </div>
          <div class="widthPer-2 p-10 d-flex ai-center box-b">
            有效期：{{ identityInformaiton.validPeriod }}
          </div>
        </div>
        <!-- 有效起始日期 -->
        <div
          class="d-flex jc-between fs-36 text-black-31 fw-6 text-center minH"
        >
          <div class="d-flex ai-center box-b p-10 wordWrap">
            <!-- 距离年审时间还有30天/已超过年审30天 -->
            有效起始日期：{{ identityInformaiton.effectiveStartDate }}(<span
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
  name: "ServiceDriveBasic",
  data() {
    return {
      // 驾驶员
      driver: {
        // 姓名
        userName: "",
        // 性别
        sex: "",
        // 出生日期
        birthday: "",
        // 籍贯
        hometown: "",
        // 联系电话
        phone:"",
        // 住所地址
        address:"",
        // 身份证号
        idNumber:""
      },
      // 证件信息
      identityInformaiton: {
        // 驾驶证号
        driverLicenseNumber: "",
        // 状态
        status: "",
        // 初次受理日期
        initialActDate: "",
        // 农机类型
        machineryType: "",
        // 原档案号
        originalFileNumber: "",
        // 档案号
        fileNumber: "",
        // 管辖区（代码）
        jurisdictions: "",
        // 初次领证日期
        firstCollectionDate: "",
        // 准驾机型
        quasiDrivingModel: "",
        // 有效期
        validPeriod: "",
        // 有效起始日期
        effectiveStartDate: "",
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
.serviceDriveBasic {
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
