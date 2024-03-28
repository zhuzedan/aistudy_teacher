<template>
  <div class="index_container">
    <!--一行筛选栏-->
    <el-row :span="24">
      <el-col :span="6">
        <div class="select_words">学期</div>
        <el-select v-model="selectTerm" size="small" placeholder="请选择学期">
          <el-option
              v-for="item in termList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <div class="select_words">学院</div>
        <el-select v-model="selectDept" size="small" placeholder="请选择学院">
          <el-option
              v-for="item in deptList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <div class="select_words">班级</div>
        <el-select v-model="selectClass" size="small" placeholder="请选择班级">
          <el-option
              v-for="item in classList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-button size="small" icon="el-icon-search" type="primary">搜索</el-button>
        <el-button size="small" icon="el-icon-refresh" type="info">重置</el-button>
      </el-col>
    </el-row>
    <div class="container_box" :style="{width: totalCourseBoxWidth}">
      <!--班级分析开始-->
      <div class="course_box" :style="{ height: courseBoxHeight, width: courseBoxWidth }"
           v-for="index in courseBoxCount">
        <div class="course_three_btn">
          <div class="btn_style" @click="gotoClassBoard">班级看板</div>
          <div class="btn_style">学生详情</div>
          <div class="btn_style">进入备课</div>
        </div>
        <!--班级及进度-->
        <div class="course_top">
          <div class="course_name">数据结构</div>
          <div class="course_class">22媒体技术1(52人)</div>
          <div class="course_process">课程进度</div>
          <el-progress :percentage="50"></el-progress>
<!--          <div class="course_class">正在进行二分查找</div>-->
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
      <!--班级分析结束-->
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selectTerm: '',
      selectDept: '',
      selectClass: '',
      deptList: [{
        value: '选项1',
        label: '数字技术与工程学院'
      }, {
        value: '选项2',
        label: '人文学院'
      }, {
        value: '选项3',
        label: '金融与信息学院'
      }, {
        value: '选项4',
        label: '艺术设计学院'
      }, {
        value: '选项5',
        label: '基础学院'
      }],
      classList: [
        {
          value: '选项5',
          label: '23计科1'
        },
        {
          value: '选项123',
          label: '23计科2'
        }
      ],
      termList: [
        {
          value: '选项1',
          label: '2023-2024-01'
        },
        {
          value: '选项2',
          label: '2023-2024-02'
        },
        {
          value: '选项3',
          label: '2022-2023-01'
        },
        {
          value: '选项4',
          label: '2022-2023-02'
        }
      ],
      scrollTimer: null, // 新增用于滚动事件延时执行的定时器
      //响应式box高度
      courseBoxHeight: '660px',
      courseBoxWidth: '310px',
      totalCourseBoxWidth: '330px',
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
      courseBoxCount: 12,
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
  computed: {},
  mounted() {
    this.setCourseBoxSize();
    window.addEventListener('resize', this.setCourseBoxSize);
    document.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setCourseBoxSize);
    document.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    gotoClassBoard() {
      this.$router.push('/classBoard')
    },
    setCourseBoxSize() {
      const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      const windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
      console.log('windowWidth', windowWidth)
      // 根据你的设计需求计算合适的高度值(header60+上边距20+下边距20)
      const calculatedHeight = windowHeight - 210;
      const calculatedWidth = windowWidth * 0.2;
      console.log('calculateHeight', calculatedHeight)
      console.log('windowHeight', windowHeight)
      // this.courseBoxHeight = `${calculatedHeight}px`;
      this.courseBoxWidth = `${calculatedWidth}px`;
      const totalCourseBoxWidth = calculatedWidth * this.courseBoxCount;
      this.totalCourseBoxWidth = `${totalCourseBoxWidth}px`;
    },
    handleScroll() {
      // 在滚动事件中只计算一次，避免过于频繁
      clearTimeout(this.scrollTimer);
      this.scrollTimer = setTimeout(() => {
        this.setCourseBoxSize();
      }, 100); // 延迟100ms执行，可以根据实际情况调整
    },
  },
};
</script>
<style lang="less" scoped>
.index_container {
  //position: relative;
  //display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  overflow-x: auto;
  overflow-y: auto;
  white-space: nowrap;

  .el-row {
    border-radius: 4px;
    padding: 20px;
    background-color: #fff;
    margin: 20px 20px 0 20px;

    .el-col {
      display: flex;

      .select_words {
        margin-left: 20px;
        display: flex;
        align-items: center;
      }
    }
  }

  .el-select {
    margin-left: 10px;
  }

  .container_box {
    display: flex;

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
        cursor: pointer;
        width: 90%;
        height: 5%;
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
        height: 20%;
        padding: 10px;
        background-color: #ffffff;
        border-radius: 8px;
        margin-bottom: 16px;
        overflow-y: auto;

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
        height: 30%;
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
        height: 35%;
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
