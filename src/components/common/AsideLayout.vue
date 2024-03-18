<template>
  <div class="aside">
    <el-col :span="12">
      <el-menu
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose">
        <a href="/" class="logo">
          <img src="@/assets/logo.png" alt=""/>
          <div class="logo_text" v-if="!isCollapse">AiStudy</div>
        </a>
        <!-- 使用v-for遍历课程列表 -->
        <div
            v-for="(course, index) in courses"
            :key="index"
            :class="['source_frame', { 'source_frame_select': course.isActive }]"
            @mouseover="setActiveCourse(index)"
            @mouseleave="resetActiveCourse"
            @click="goToCourse(course)"
        >
          <div class="partial-border-left" v-if="course.isActive"></div>
          <img src="../../assets/class_avatar.png" alt=""/>
          <div class="course">
            <div class="course_name">{{ course.name }}</div>
            <div class="course_class_name">{{ course.className }}</div>
          </div>
        </div>
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
    setActiveCourse(index) {
      this.courses.forEach((course, i) => {
        if (i === index) {
          course.isActive = true;
        } else {
          course.isActive = false;
        }
      });
      this.activeCourseIndex = index;
    },
    resetActiveCourse() {
      this.courses.forEach(course => {
        course.isActive = false;
      });
      this.activeCourseIndex = -1;
    },
    goToCourse(course) { // 新增方法处理点击事件
      this.$router.push(`/course/${course.name}`); // 假设将课程名称作为参数传递给 /course 路由
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
    font-weight: bold;
  }
}

.el-menu-item {
  color: #0177FD;
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
    background-color: #0177FD;
    border-radius: 0 3.66px 3.66px 0;
  }

  img {
    width: 50px;
    margin-left: 20px;
  }

  .course {
    color: #0177FD;
    margin-left: 20px;

    .course_name {
      font-weight: bold;
    }

    .course_class_name {
      margin-top: 5px;
      font-size: 12px;
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
      font-size: 12px;
    }
  }
}

.source_frame_select {
  background-color: #E5F1FF;
  color: #0177FD;

  .course_name,
  .course_class_name {
    color: #0177FD;
  }

  .partial-border-left {
    background-color: #0177FD;
  }
}

.source_frame {
  cursor: pointer;

  &:hover {
    background-color: #E5F1FF;
  }

  /* 当前选中项之外的其他项的默认样式 */

  &.source_frame:not(.source_frame_select):hover {
    .course_name,
    .course_class_name {
      color: #0177FD;
    }
  }
}
</style>
