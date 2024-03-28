<template>
  <div class="class_container">
    <div class="class_board">
      <!--整个左栏学生列表-->
      <div class="stu_list">
        <div class="function_tab">
          <el-input size="small" v-model="inputName" placeholder="请输入姓名"></el-input>
          <i class="el-icon-search"></i>
          <i class="el-icon-sort"></i>
        </div>
        <div style="display: flex;flex-direction: column" v-for="item in 12">
          <div class="class_account">
            <div class="sort_num">{{ item }}</div>
            <el-avatar :size="50" :src="circleUrl"></el-avatar>
            <div class="num_and_name">
              <div class="class_num">1922540044</div>
              <div class="name">张望里</div>
            </div>
            <div class="star_box">
              <div class="star_count">已获58星</div>
              <div class="all_star_count">共60星</div>
            </div>
          </div>
          <div class="horizontal_center_wrapper">
            <div class="separation_line"></div>
          </div>
        </div>
      </div>
      <div class="right_box">右边盒子</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputName: '',
      circleUrl: '',
    }
  }
}
</script>


<style scoped lang="less">
.class_container {
  display: flex;
  width: 100%;
  background-color: yellow;

  .class_board {
    margin: 20px;
    width: 100%;
    height: calc(100vh - 100px);
    background-color: pink;
    border-radius: 4px;
    display: flex;

    .stu_list {
      width: 22%;
      height: 100%;
      background-color: #fff;
      overflow-y: auto;
      border-radius: 4px;
      display: flex;
      flex-direction: column;

      .function_tab {
        display: flex;
        position: relative;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin-top: 10px;

        .el-input {
          width: 80%;
          margin-right: 10px;
          margin-left: 10px;
        }

        i {
          text-align: center;
          align-items: center;
          justify-content: center;
          color: @primaryNoSelected;
          display: flex;
          margin-right: 10px;
          height: 32px;
        }
      }

      .class_account {
        display: flex;
        align-items: center;
        margin: 10px;

        .el-avatar {
          margin-left: 10px;
        }

        .num_and_name {
          margin-left: 10px;
        }

        .star_box {
          margin-left: 10px;
        }

      }

      .horizontal_center_wrapper {
        display: flex;
        justify-content: center;
        width: 100%;

        .separation_line {
          height: 1px;
          width: 80%;
          background-color: @primaryNoSelected;
          opacity: 0.2;

        }
      }

    }
  }

}
</style>
