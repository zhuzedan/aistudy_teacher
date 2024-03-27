<template>
  <div id="app">
    <!-- 路由出口 -->
    <router-view/>
  </div>
</template>
<script>
// Vue 2.x 版本
export default {
  data() {
    return {
      screenWidth: 0,
      screenHeight: 0,
    };
  },
  mounted() {
    this.updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenSize);
  },
  methods: {
    updateScreenSize() {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
      // console.log(this.screenWidth)
      // console.log(this.screenHeight)
    },
  },
};

</script>
<style lang="less">
body {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: HanSans, serif;
  background-color: #f5f6f8;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
}
</style>
