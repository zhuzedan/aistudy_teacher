<template>
  <div class="course_container">
    <!--顶部筛选栏-->
    <div class="header_tab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="课程完成情况" name="first">
          <course-complete></course-complete>
        </el-tab-pane>
        <el-tab-pane label="学生信息" name="second">
          <student-information></student-information>
        </el-tab-pane>
        <el-tab-pane label="作业评分" name="third">
          <home-work></home-work>
        </el-tab-pane>
        <el-tab-pane label="试卷设计" name="fourth">试卷设计</el-tab-pane>
        <el-tab-pane label="AI形象" name="fifth">
          <ai-figure></ai-figure>
        </el-tab-pane>
      </el-tabs>
    </div>


  </div>
</template>

<script>
import CourseComplete from "@/views/course/CourseComplete";
import HomeWork from "@/views/course/HomeWork";
import AiFigure from "@/views/course/AiFigure.vue";
import StudentInformation from "@/views/course/StudentInformation.vue";

export default {
  name: "Course",
  components: {
    CourseComplete,
    HomeWork,
    AiFigure,
    StudentInformation
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

.course_container {
  padding: 10px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  background-color: @primaryBackgroundColor;
  height: calc(100vh - 100px);

  .header_tab {
    //background-color: greenyellow;
    height: 40px;
  }
}

/deep/ .el-tabs__item {
  font-size: 14px !important;
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

</style>
