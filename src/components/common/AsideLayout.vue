<template>
  <div class="aside">
    <el-col :span="12">
      <el-menu
          text-color="#fff"
          unique-opened
          router
          :collapse="isCollapse"
          :default-active="activeIndex"
          @select="handleSelect"
          @open="handleOpen"
          @close="handleClose">
        <a href="/" class="logo">
          <img src="@/assets/logo.png" alt=""/>
          <h1 v-if="!isCollapse">AiStudy</h1>
        </a>
        <div>数据结构</div>
        <div>数据结构</div>
        <div>数据结构</div>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "AsideLayout",
  data() {
    return {
      activeIndex: this.$route.path
    }
  },
  watch: {
    '$route'(to, from) {
      // 监听路由的变化  如果路由发生改变则当前tab栏默认值也相应改变
      this.activeIndex = to.path
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.collapse.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.logo {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: rgb(49, 101, 246);

  img {
    width: 50px;
    margin: 10px;
  }

  h1 {
    font-size: 30px;
  }
}

.el-menu {
  box-shadow: inset -3px 3px 11px rgba(0, 0, 0, 0.15), 0px 10px 15px rgba(14, 54, 199, 0.6);
  width: 240px;
  height: 100vh;
  padding: 0;
  margin: 0;
}

.el-menu--collapse {
  width: 64px;
}

.el-menu-item-group {
  .el-menu-item-group__title {
    padding: 0;
  }
}
</style>
