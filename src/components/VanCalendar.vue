<template>
  <div class="vanCalendar">
    <van-calendar
      :show-title="false"
      :poppable="false"
      :show-confirm="false"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter"
      :default-date = 'null'
      :readonly = 'true'
      :style="{ height: '9.9733rem' }"
      :row-height="50"
    />
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "About",
  data() {
    return {
      minDate: new Date(),
      dateArry: [
        {
          time: "2021/1/29",
          breakfast: true,
          lunch: true,
          dinner: false,
        },
        {
          time: "2021/2/3",
          breakfast: true,
          lunch: false,
          dinner: true,
        },
      ],
    };
  },
  computed: {
    maxDate() {
      const nowDate = new Date();
      const addDay = nowDate.getTime() + 7 * 24 * 3600 * 1000;
      const nextDate = new Date(addDay);
      return nextDate;
    },
  },
  methods: {
    formatter(day) {
      const _this = this;
      const matDate = new Date(day.date).getTime();
      const index = _this.dateArry.findIndex((e) => {
        const arrDate = new Date(e.time).getTime();
        return arrDate == matDate;
      });
      if (index >= 0) {
        day.bottomInfo = "-";
        day.className = "myCalendar";
        setTimeout(() => {
          let str = `<span class="breakfast ${_this.dateArry[index].breakfast ? 'yes' : 'no'}"></span><span class="lunch ${_this.dateArry[index].lunch ? 'yes' : 'no'}"></span><span class="dinner ${_this.dateArry[index].dinner ? 'yes' : 'no'}"></span>`;
          $(".myCalendar .van-calendar__bottom-info").eq(index).html(str);
        }, 50);
      }
      return day;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.myCalendar {
  .van-calendar__bottom-info {
    display: flex;
    justify-content: center;
    align-items: center;
    >span{
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-left: 3px;
      background-color: cadetblue;
      &:first-child{
        margin-left: 0;
      }
      &.no{
        background-color: gray;
      }
    }
    .breakfast.yes{
      background-color: blue;
    }
    .lunch.yes{
      background-color: rgb(255, 0, 255);
    }
    .dinner.yes{
      background-color: rgb(72, 255, 0);
    }
  }
}
</style>
