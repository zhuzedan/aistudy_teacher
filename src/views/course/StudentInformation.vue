<template>
  <div style="background-color: #fff;  border-radius: 10px;">
    <div class="student_container">
      <div class="block">
        <el-avatar :size="70" :src="circleUrl"></el-avatar>
        <div class="name">王五六</div>
        <div class="class_num">1922540044</div>
        <i class="el-icon-star-off"></i>
      </div>


    </div>
    <el-pagination
        layout="prev, pager, next"
        :total="50">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "StudentInformation",
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  }
}
</script>

<style scoped lang="less">
.student_container {
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  height: 560px;
}

.student_container .block {
  width: calc(10% - 2px); /* 计算宽度以便每行可容纳10个元素，并减去左右间隔（这里假设间隔为1px，可以根据实际需求调整） */
  height: 160px;
  margin: 10px 1px 10px; /* 上下外边距为0，左右外边距为1px，底部外边距为10px，同样可以根据实际情况调整 */

  //background-color: greenyellow;
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
</style>
