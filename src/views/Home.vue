<template>
  <div class="home">
    <div><span class="iconfont icon-shouye"></span>Home</div>
    <VanCalendar msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import VanCalendar from "@/components/VanCalendar.vue";

export default {
  name: "Home",
  components: {
    VanCalendar,
  },
  methods: {},
  mounted() {},
};
</script>
