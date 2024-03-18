<template>
  <div class="container" :style="{ width: containerWidth + 'px' }">
    <div class="course_box">
      <div class="course_top">
        <div class="course_name">数据结构</div>
        <div class="course_class">22媒体技术1</div>
        <!--        <div ref="chartContainer" :style="{width: '100%', height: '250px'}"></div>-->
      </div>
      <div class="course_bottom">
        <div class="attention">注意事项</div>
        <div class="attention_text">xx进度已严重落后于班级进度</div>
        <div class="attention_text">xx的作业情况堪忧</div>
      </div>
    </div>
    <div class="course_box">
      <div class="course_top">
        <div class="course_name">数据结构</div>
        <div class="course_class">22媒体技术1</div>
        <!--        <div ref="chartContainer" :style="{width: '100%', height: '250px'}"></div>-->
      </div>
      <div class="course_bottom">
        <div class="attention">注意事项</div>
        <div class="attention_text">xx进度已严重落后于班级进度</div>
      </div>
    </div>
    <div class="course_box">
      <div class="course_top">
        <div class="course_name">数据结构</div>
        <div class="course_class">22媒体技术1</div>
        <!--        <div ref="chartContainer" :style="{width: '100%', height: '250px'}"></div>-->
      </div>
      <div class="course_bottom">
        <div class="attention">注意事项</div>
        <div class="attention_text">xx进度已严重落后于班级进度</div>
      </div>
    </div>
    <div class="course_box">
      <div class="course_top">
        <div class="course_name">数据结构</div>
        <div class="course_class">22媒体技术1</div>
        <!--        <div ref="chartContainer" :style="{width: '100%', height: '250px'}"></div>-->
      </div>
      <div class="course_bottom">
        <div class="attention">注意事项</div>
        <div class="attention_text">xx进度已严重落后于班级进度</div>
      </div>
    </div>
    <div class="course_box">
      <div class="course_top">
        <div class="course_name">数据结构</div>
        <div class="course_class">22媒体技术1</div>
        <!--        <div ref="chartContainer" :style="{width: '100%', height: '250px'}"></div>-->
      </div>
      <div class="course_bottom">
        <div class="attention">注意事项</div>
        <div class="attention_text">xx进度已严重落后于班级进度</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
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
    this.initChart();
  },
  methods: {
    initChart() {
      // 获取DOM容器
      const container = this.$refs.chartContainer;
      // 初始化echarts实例
      this.chartInstance = echarts.init(container);
      // 载入图表配置项
      this.chartInstance.setOption(this.options);
    }
  },
  beforeDestroy() {
    // 在组件销毁前清理echarts实例
    if (this.chartInstance) {
      this.chartInstance.dispose();
      this.chartInstance = null;
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  position: relative;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  .course_box {
    display: flex;
    flex-direction: column; /* 确保子元素在垂直方向堆叠 */
    align-items: center; /* 垂直居中 */
    width: 300px;
    height: 610px;
    opacity: 1;
    border-radius: 30px;
    background: rgba(168, 168, 255, 1);
    margin: 20px 0 0 20px; /* 取消左侧margin，让第一个盒子直接靠左 */


    .course_top {
      position: relative;
      width: 260px;
      height: 330px;
      margin-top: 20px;
      background-color: #ffffff;
      border-radius: 20px;

      .course_name {
        font-weight: bold;
        font-size: 18px;
        margin-left: 24px;
        margin-top: 10px;
      }

      .course_class {
        margin-left: 24px;
        margin-top: 6px;
        font-size: 12px;
      }
    }

    .course_bottom {
      position: relative;
      width: 260px;
      height: 220px;
      background-color: #ffffff;
      border-radius: 20px;
      margin-top: 20px;

      .attention {
        font-weight: bold;
        font-size: 18px;
        margin-left: 24px;
        margin-top: 10px;
        margin-bottom: 10px;
      }

      .attention_text {
        font-size: 14px;
        margin-left: 24px;
        margin-top: 5px;
      }
    }
  }
}
</style>
