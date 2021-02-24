<template>
  <div class="questionDetails pt-50 px-36 pb-26">
    <!-- 问题部分 -->
    <div class="questionCnt px-28">
      <div class="cntOne pt-30 d-flex flex-column jc-between">
        <div class="title fs-42 fw-6 text-black-31">
          {{ title }}
        </div>
        <div class="question fs-36 fw-6 text-black-61 mt-20">
          {{ question }}
        </div>
        <div class="fs-36 fw-6 text-black-61 py-20">
          {{ sort }}
        </div>
      </div>
      <div
        class="cntTwo d-flex jc-between ai-center py-20 fs-30 text-black-61 fw-6"
      >
        <div class="d-flex ai-center">
          <div class="images">
            <van-image
              width="100%"
              height="100%"
              fit="cover"
              round
              :src="ueser.pic"
            />
          </div>
          <div class="ml-36">用户：{{ ueser.phone }}</div>
        </div>
        <div class="d-flex ai-center">
          <span>{{ date }}</span
          ><span class="ml-20">{{ time }}</span>
        </div>
      </div>
    </div>
    <!-- 回答部分 -->
    <div class="fs-36 text-black-61 fw-6 pl-32 pt-46">2个回答</div>
    <div class="mt-26">
      <!-- 回答列表 -->
      <div
        class="questionCnt pb-40 px-28 mb-24"
        v-for="(item, index) in answersLists"
        :key="index"
      >
        <div
          class="cntTwo d-flex jc-between ai-center py-30 fs-30 text-black-61 fw-6"
        >
          <div class="d-flex ai-center">
            <div class="images">
              <van-image
                width="100%"
                height="100%"
                fit="cover"
                round
                :src="item.ueser.pic"
              />
            </div>
            <div class="ml-36">用户：{{ item.ueser.phone }}</div>
          </div>
          <div class="d-flex ai-center">
            <span>{{ item.date }}</span
            ><span class="ml-20">{{ item.time }}</span>
          </div>
        </div>
        <div class="fs-36 text-black-31 fw-6 lineH-66">{{ item.constnt }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "QuestionDetails",
  data() {
    return {
      title: "《海南省植物检疫实施办法》",
      question:
        "想了解《海南省植物检疫实施办法》内容，请问主要实施办法有哪些？",
      sort: "政策法规",
      ueser: {
        pic: "https://img01.yzcdn.cn/vant/cat.jpeg",
        phone: "178****8187",
      },
      date: "2018-01-01",
      time: "13:30",
      // 回答列表
      answersLists: [
        {
          id:"id_01",
          ueser: {
            pic: "https://img01.yzcdn.cn/vant/cat.jpeg",
            phone: "178****8187",
          },
          date: "2018-01-01",
          time: "13:30",
          constnt:
            "种子、苗木和其他繁殖材料的繁育单位所繁殖的种子、苗木和其他繁殖材料，应当向当地植物检疫机构申请产地检疫，经检疫合格的发给产地检疫合格证。调运时凭产地检疫合格证换取植物检疫证书，方可调运。",
        },
        {
          id:"id_02",
          ueser: {
            pic: "https://img01.yzcdn.cn/vant/cat.jpeg",
            phone: "178****8187",
          },
          date: "2018-01-01",
          time: "13:30",
          constnt:
            "种子、苗木和其他繁殖材料的繁育单位所繁殖的种子、苗木和其他繁殖材料，应当向当地植物检疫机构申请产地检疫，经检疫合格的发给产地检疫合格证。调运时凭产地检疫合格证换取植物检疫证书，方可调运。",
        },
        {
          id:"id_03",
          ueser: {
            pic: "https://img01.yzcdn.cn/vant/cat.jpeg",
            phone: "178****8187",
          },
          date: "2018-01-01",
          time: "13:30",
          constnt:
            "种子、苗木和其他繁殖材料的繁育单位所繁殖的种子、苗木和其他繁殖材料，应当向当地植物检疫机构申请产地检疫，经检疫合格的发给产地检疫合格证。调运时凭产地检疫合格证换取植物检疫证书，方可调运。",
        },
      ],
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.questionDetails {
  .questionCnt {
    background-color: white;
    box-sizing: border-box;
    .cntOne {
      border-bottom: 1px solid #e5e5e5;
      min-height: 260px;
    }
    .cntTwo {
      .images {
        width: 72px;
        height: 72px;
      }
    }
  }
}
</style>
