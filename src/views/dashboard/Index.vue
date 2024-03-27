<template>
  <div class="index_container">
    <div class="container_box">
      <div class="course_box" v-for="index in 12">
        <div class="course_three_btn">
          <div class="btn_style">班级看板</div>
          <div class="btn_style">学生详情</div>
          <div class="btn_style">进入备课</div>
        </div>
        <!--班级及进度-->
        <div class="course_top">
          <div class="course_name">数据结构</div>
          <div class="course_class">22媒体技术1(52人)</div>
          <div class="course_process">课程进度</div>
          <el-progress :percentage="50"></el-progress>
          <div class="course_class">正在进行二分查找</div>
        </div>
        <!--薄弱点分析-->
        <div class="course_analysis">
          <div style="display: flex">
            <div class="course_analysis_title">学习智慧分析薄弱点</div>
            <el-select v-model="value" size="small" placeholder="请选择">
              <el-option
                  v-for="item in selectDate"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="analysis_detail_box">
            <div class="analysis_detail" v-for="index in 3">1. 顺序存储与链式存储优缺点</div>
            <div class="analysis_detail">1. 顺序存储与链式存储优缺点</div>
            <div class="analysis_detail">1. 顺序存储与链式存储优缺点</div>
            <div class="analysis_detail">1. 顺序存储与链式存储优缺点</div>
          </div>
        </div>
        <!--注意事项-->
        <div class="course_bottom">
          <div style="display: flex">
            <div class="attention">注意事项</div>
            <div class="remind_box">
              <i class="el-icon-finished"></i>
              <div class="remind_one">一键提醒</div>
            </div>
          </div>
          <div class="attention_text">xx进度已严重落后于班级进度</div>
          <div class="attention_text">xx的作业情况堪忧</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selectDate: [{
        value: '选项1',
        label: '近一周'
      }, {
        value: '选项2',
        label: '近两周'
      }, {
        value: '选项3',
        label: '近一月'
      }, {
        value: '选项4',
        label: '进一学期'
      }],
      value: '',
      courseBoxCount: 5,
      chartInstance: null,
      options: { // 这里放置你的图表配置项
        title: {
          text: ''
        },
        tooltip: {},
        xAxis: {
          data: ['0星', '10星', '20星', '30星', '40星']
        },
        yAxis: {},
        series: [{
          data: [10, 22, 28, 23, 19],
          type: 'line',
          smooth: true
        }]
      }
    };
  },
  computed: {
    containerWidth() {
      return (300 + 20) * this.courseBoxCount + 20; // 计算总宽度（每个course_box宽度300px，间距20px，除去最后一个box的右边距）
    },
  },
  mounted() {

  },
  methods: {},
};
</script>
<style lang="less" scoped>
.index_container {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  .container_box {
    position: relative;
    display: flex;
    align-items: center;

    //background-color: palegreen;

    .course_box {
      display: flex;
      flex-direction: column; /* 确保子元素在垂直方向堆叠 */
      align-items: center; /* 垂直居中 */
      width: 310px;
      height: 660px;
      opacity: 1;
      border-radius: 8px;
      background: rgba(168, 168, 255, 1);
      margin: 20px 0 20px 20px; /* 取消左侧margin，让第一个盒子直接靠左 */

      .course_three_btn {
        display: flex;
        align-items: center;
        text-align: center;
        position: relative;
        justify-content: space-between;
        width: 90%;
        padding: 10px;

        .btn_style {
          width: 80px;
          line-height: 30px;
          border-radius: 70px;
          background: rgba(255, 255, 255, 1);
          border: 1.5px solid rgba(124, 124, 191, 1);
          color: rgba(124, 124, 191, 1);
          align-items: center;
          text-align: center;
          position: relative;
          justify-content: space-between;
        }
      }

      .course_top {
        width: 84%;
        height: 150px;
        padding: 10px;
        background-color: #ffffff;
        border-radius: 8px;
        margin-bottom: 16px;

        .course_name {
          font-weight: bold;
          font-size: 16px;
        }

        .course_process {
          margin-top: 16px;
          font-weight: bold;
          font-size: 16px;
        }

        .course_class {
          font-size: 14px;
          margin-top: 8px;
        }
      }

      .course_analysis {
        width: 84%;
        height: 250px;
        padding: 10px;
        background-color: #ffffff;
        border-radius: 8px;
        margin-bottom: 16px;
        overflow-y: auto;

        .course_analysis_title {
          font-weight: bold;
          font-size: 16px;
          width: 80%;
          display: flex;
          align-items: center;
          line-height: 40px;
        }

        .el-select {
          width: 120px;
          font-size: 12px;
        }

        .analysis_detail_box {
          .analysis_detail {
            margin-top: 8px;
          }
        }


      }

      .course_bottom {
        width: 84%;
        height: 220px;
        padding: 10px;
        background-color: #ffffff;
        border-radius: 8px;
        margin-bottom: 16px;
        overflow-y: auto;

        .attention {
          font-weight: bold;
          font-size: 16px;
          width: 80%;
          display: flex;
          align-items: center;
          line-height: 40px;
        }

        .remind_box {
          display: flex;
          flex-direction: column;
          text-align: center;
          align-items: center;

          .i {
            color: @primaryNoSelected;
          }

          .remind_one {
            color: @primaryNoSelected;
          }
        }

        .attention_text {
          margin-top: 8px;
        }

      }
    }
  }
}
</style>
