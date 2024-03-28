<template>
  <div class="course_container">
    <!--顶部筛选栏-->
    <div class="header_tab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="资源管理" name="first">
          <recourse-management></recourse-management>
        </el-tab-pane>
        <el-tab-pane label="作业管理" name="third">
          <home-work></home-work>
        </el-tab-pane>
        <el-tab-pane label="试卷管理" name="fourth">试卷设计</el-tab-pane>
        <el-tab-pane label="AI形象" name="fifth">
          <ai-figure></ai-figure>
        </el-tab-pane>
      </el-tabs>
    </div>


  </div>
</template>

<script>
import RecourseManagement from "@/views/course/Recourse.vue";
import HomeWork from "@/views/course/HomeWork";
import AiFigure from "@/views/course/AiFigure.vue";

export default {
  name: "Course",
  components: {
    RecourseManagement,
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
