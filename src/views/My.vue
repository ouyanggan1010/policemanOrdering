<template>
  <div class="my box-b px-32 pt-50">
    <!-- 用户 -->
    <van-cell class="picCell" is-link to="/personalInformation">
      <template #title>
        <div class="d-flex ai-center">
          <div class="pic">
            <van-image
              width="100%"
              height="100%"
              fit="cover"
              round
              :src="users.avatar"
            />
          </div>
          <div class="d-flex jc-center flex-column ml-68 posR">
            <div class="fs-42 text-black-31 fw-6">
              {{ users.nickname ? users.nickname : "暂未设置昵称" }}
            </div>
            <div class="mt-20 fs-36 text-black-91 fw-6">
              注册号码：{{ users.phone | filtersPhone }}
            </div>
            <div class="text-red-4e fs-36 fw-5 tips">（头像审核未通过）</div>
          </div>
        </div>
      </template>
      <!-- <template #right-icon>
        <div class="d-flex ai-center">
          <span class="myIcon-myArrowG"></span>
        </div>
      </template> -->
      <template #right-icon>
        <div class="d-flex ai-center">
          <van-icon name="arrow" class="arrow" />
        </div>
      </template>
    </van-cell>
    <!-- 分组 -->
    <div class="mt-26 groupCell">
      <van-cell :is-link="users.verified !== '2'" :to="verifiedPath">
        <template #title>
          <div class="d-flex ai-center">
            <span class="myIcon-myVerified mr-56"></span>
            <span class="fs-38 text-black-31 fw-6">实名认证</span>
            <!-- 三个状态：等待审核0 /messageList、未认证1 /VerifiedOne、已认证2 text-black-91 text-red-4e text-green-88 -->
            <span class="fs-38 text-black-31 fw-6"
              >（<span
                :class="{
                  'text-black-91': users.verified == '0',
                  'text-red-4e': users.verified == '1',
                  'text-green-88': users.verified == '2',
                }"
                >{{ users.verified | filtersVerified }}</span
              >）</span
            >
          </div>
        </template>
        <template #right-icon>
          <div class="d-flex ai-center">
            <van-icon name="arrow" class="arrow" />
          </div>
        </template>
      </van-cell>
      <van-cell is-link to="/qaMyCnt">
        <template #title>
          <div class="d-flex ai-center">
            <span class="myIcon-myQa mr-56"></span>
            <span class="fs-38 text-black-31 fw-6">我的问答</span>
          </div>
        </template>
        <template #right-icon>
          <div class="d-flex ai-center">
            <van-icon name="arrow" class="arrow" />
          </div>
        </template>
      </van-cell>
      <van-cell is-link to="/fpCollectInformation">
        <template #title>
          <div class="d-flex ai-center">
            <span class="myIcon-myfpCollectInformation mr-56"></span>
            <span class="fs-38 text-black-31 fw-6">农户种植信息采集</span>
          </div>
        </template>
        <template #right-icon>
          <div class="d-flex ai-center">
            <van-icon name="arrow" class="arrow" />
          </div>
        </template>
      </van-cell>
      <van-cell is-link to="/systemSettings">
        <template #title>
          <div class="d-flex ai-center">
            <span class="myIcon-mySystemSet mr-56"></span>
            <span class="fs-38 text-black-31 fw-6">系统设置</span>
          </div>
        </template>
        <template #right-icon>
          <div class="d-flex ai-center">
            <van-icon name="arrow" class="arrow" />
          </div>
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
export default {
  name: "My",
  data() {
    return {
      // 用户基本信息
      users: {
        avatar: "https://img01.yzcdn.cn/vant/cat.jpeg",
        nickname: "ouyanggan1010",
        phone: "13518814469",
        verified: "1", //三种状态：0表示等待审核，1表示未认证，2表示已认证
      },
    };
  },
  filters: {
    // 过滤手机号
    filtersPhone(val) {
      const newVal = val.replace(
        /^(\w{3})(\w{4})(\w*)$/,
        function (all, u1, u2, u3) {
          return u1 + new Array(u2.length + 1).join("*") + u3;
        }
      );
      return newVal;
    },
    // 过滤认证状态
    filtersVerified(val) {
      let str = "";
      switch (val) {
        case "0":
          str = "等待审核";
          break;
        case "1":
          str = "未认证";
          break;
        default:
          str = "已认证";
          break;
      }
      return str;
    },
  },
  computed: {
    verifiedPath() {
      if (this.users.verified == "0") {
        return "/messageList";
      } else if (this.users.verified == "1") {
        return "/verifiedOne";
      }else{
        return "";
      }
    },
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.my {
  .arrow {
    font-size: 62px;
    color: #8e8e8e;
  }
  .pic {
    width: 186px;
    height: 186px;
    border: 1px solid #c8c8c8;
    border-radius: 50%;
  }
  .picCell {
    &::after {
      border-bottom: none;
    }
  }
  .groupCell {
    .van-cell {
      &::after {
        border-bottom: 0.028rem solid #ebedf0;
      }
    }
  }
  .tips{
    position: absolute;
    bottom: -50px;
    left: 0;
  }
}
</style>
