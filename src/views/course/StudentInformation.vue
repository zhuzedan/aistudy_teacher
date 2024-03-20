<template>
  <div class="body_container">
    <div class="function_frame">
      <el-input v-model="input" suffix-icon="el-icon-search" placeholder="请输入学号或姓名"></el-input>
      <i class="el-icon-s-operation" style="font-size: 24px;margin-left: 10px"></i>
    </div>
    <div class="student_container">
      <div class="block" v-for="(student, index) in students" :key="index">
        <el-avatar :size="70" :src="student.avatarUrl || circleUrl"></el-avatar>
        <div class="name">{{ student.name }}</div>
        <div class="class_num">{{ student.classNum }}</div>
        <i class="el-icon-star-off"></i>
      </div>
    </div>
    <div class="pagination-container">
      <el-pagination
          layout="prev, pager, next"
          :total="50">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "StudentInformation",
  data() {
    return {
      studentCount: '30',
      students: [], // 新增：初始化一个空数组存放学生数据
      input: '',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  },
  created() {
    // 在组件创建时填充学生数据，这里仅作示例，实际应用中应从API获取数据或预设数据
    for (let i = 0; i < this.studentCount; i++) {
      this.students.push({
        name: '王五六',
        classNum: '1922540044',
        avatarUrl: this.circleUrl,
      });
    }
  }
}
</script>

<style scoped lang="less">
.body_container {
  background-color: #fff;
  overflow-y: auto;
  border-radius: 8px;
  min-height: calc(100vh - 100px - 60px);
  flex-direction: column;
}

.function_frame {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end; // 新增：右对齐子元素
  padding: 10px;
  align-items: center;

  .el-input {
    width: 220px;
  }
}

.student_container {
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  height: 500px;

  .block {
    width: calc(10% - 2px); /* 计算宽度以便每行可容纳10个元素，并减去左右间隔（这里假设间隔为1px，可以根据实际需求调整） */
    height: 140px;
    margin: 10px 1px 10px; /* 上下外边距为0，左右外边距为1px，底部外边距为10px，同样可以根据实际情况调整 */
    text-align: center;

    .name {
      font-size: 14px;
      margin-bottom: 5px;
    }

    .class_num {
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
}

.pagination-container {
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 1;
}
</style>
