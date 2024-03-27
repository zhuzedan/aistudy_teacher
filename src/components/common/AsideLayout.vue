<template>
  <div class="aside">
    <el-col :span="12">
      <el-menu
          :collapse="isCollapse"
          class="el-menu-vertical-demo"
          unique-opened
          router
          @open="handleOpen"
          @close="handleClose">
        <router-link to="/" class="logo">
          <img src="@/assets/logo.png" alt=""/>
          <div class="logo_text" v-if="!isCollapse">iStudy</div>
        </router-link>
        <el-menu-item index="/">
          <i class="el-icon-folder-opened"></i>
          <span slot="title">智能助教</span>
        </el-menu-item>
        <el-menu-item index="class">
            <i class="el-icon-postcard"></i>
            <span slot="title">班级管理</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">课程管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">账户管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "AsideLayout",
  data() {
    return {
      activeCourseIndex: -1,
      courses: [
        {
          name: '数据结构',
          className: '22媒体技术1',
          avatarSrc: '../../assets/class_avatar.png',
          isActive: false,
        },
        {
          name: '程序设计基础',
          className: '22媒体技术1',
          avatarSrc: '@/assets/class_avatar.png',
          isActive: false,
        },
      ],
    };
  },
  watch: {
    '$route'(to, from) {
      // 监听路由的变化  如果路由发生改变则当前tab栏默认值也相应改变
      this.activeIndex = to.path
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
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
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: rgb(49, 101, 246);

  img {
    width: 50px;
  }

  .logo_text {
    margin-left: 10px;
    font-size: 30px;
    //font-weight: bold;
    font-family: HanSansBold,serif;
  }
}

.el-menu {
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

.source_frame_select {
  background-color: #E5F1FF;
  height: 70px;
  display: flex;
  align-items: center;
  border-radius: 8px;

  .partial-border-left {
    position: relative; /* 确保伪元素基于此元素定位 */
    width: 3px;
    height: 34px;
    background-color: @primaryColor;
    border-radius: 0 3.66px 3.66px 0;
  }

  img {
    width: 50px;
    margin-left: 20px;
  }

  .course {
    color: @primaryColor;
    margin-left: 20px;

    .course_name {
      font-weight: bold;
    }

    .course_class_name {
      margin-top: 5px;
      font-size: 14px;
    }
  }

}

.source_frame {
  background-color: #fff;
  height: 70px;
  display: flex;
  align-items: center;
  border-radius: 8px;

  .partial-border-left {
    position: relative; /* 确保伪元素基于此元素定位 */
    width: 3px;
    height: 34px;
    background-color: #fff;
    border-radius: 0 3.66px 3.66px 0;
  }

  img {
    width: 50px;
    margin-left: 20px;
  }

  .course {
    color: #000;
    margin-left: 20px;

    .course_name {
      font-weight: bold;
    }

    .course_class_name {
      margin-top: 5px;
      font-size: 14px;
    }
  }
}

.source_frame {
  cursor: pointer;

  &:hover {
    background-color: #E5F1FF;
  }

}
</style>
