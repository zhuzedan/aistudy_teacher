<template>
  <div class="course_container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="课程完成情况" name="first">
        <course-complete></course-complete>
      </el-tab-pane>
      <el-tab-pane label="学生信息" name="second">学生信息</el-tab-pane>
      <el-tab-pane label="作业评分" name="third">
        <home-work></home-work>
      </el-tab-pane>
      <el-tab-pane label="试卷设计" name="fourth">试卷设计</el-tab-pane>
      <el-tab-pane label="AI形象" name="fifth">
        <ai-figure></ai-figure>
      </el-tab-pane>

    </el-tabs>

  </div>
</template>

<script>
import CourseComplete from "@/views/course/CourseComplete";
import HomeWork from "@/views/course/HomeWork";
import AiFigure from "@/views/course/AiFigure.vue";
export default {
  name: "Course",
  components: {
    CourseComplete,
    HomeWork,
    AiFigure
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="less" scoped>

.course_container{
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: calc(100vh - 100px);
}
/deep/ .el-tabs__item {
  /* 修改为您想要的文字大小 */
  font-size: 16px !important;
}

.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>
