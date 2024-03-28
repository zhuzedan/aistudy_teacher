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
            <div class="one_avatar">
              <el-avatar :size="50" :src="circleUrl"></el-avatar>
            </div>
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
      <div class="right_box">
        <div class="right_top_box">
          <div class="learning_time">
            <div class="information_box">
              <div class="one_avatar">
                <el-avatar :size="80" :src="circleUrl"></el-avatar>
              </div>
              <div class="num_and_name">
                <div class="name">张望里</div>
                <div class="class_num">1922540044</div>
              </div>
            </div>
            <div class="learning_time_chart">
              <v-chart :option="option"/>
            </div>
          </div>
          <div class="learning_situation">
            <div class="learn_title">学习状况波动</div>
            <div class="situation_chart">
              <v-chart :option="situationOption"/>
            </div>
          </div>
        </div>
        <div class="right_bottom_box">
          <div class="true_rate">
            <div class="learn_title">知识点学习时长对比</div>
            <div class="learn_chart">
              <v-chart :option="rateOption"/>
            </div>
          </div>
          <div class="intelligence_remind">
            <div class="learn_title">智能学情总结</div>
            <div class="summary_study">
              <div class="summary_point">该学生主要集中在截止日期前完成作业</div>
              <div class="summary_point">该学生在二叉树的顺序存储、二叉树的先序遍历的方面该学生在二叉树的顺序存储、二叉树的先序遍历的方面</div>
              <div class="summary_point">该学生主要集中在截止日期前完成作业</div>
              <div class="summary_point">该学生主要集中在截止日期前完成作业</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    //学习时长图表
    const rawData = [
      [100, 302, 301, 334, 390, 330, 320],
      [320, 132, 101, 134, 90, 230, 210],
      [220, 182, 191, 234, 290, 330, 310],
      [150, 212, 201, 154, 190, 330, 410],
      [820, 832, 901, 934, 1290, 1330, 1320]
    ];
    const totalData = [];
    for (let i = 0; i < rawData[0].length; ++i) {
      let sum = 0;
      for (let j = 0; j < rawData.length; ++j) {
        sum += rawData[j][i];
      }
      totalData.push(sum);
    }

    const option = {
      legend: {
        selectedMode: false
      },
      grid: {
        left: 100,
        right: 100,
        top: 50,
        bottom: 50
      },
      yAxis: {
        type: 'value'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      series: [
        'Direct',
        'Mail Ad',
        'Affiliate Ad',
        'Video Ad',
        'Search Engine'
      ].map((name, sid) => ({
        name,
        type: 'bar',
        stack: 'total',
        barWidth: '60%',
        label: {
          show: true,
          formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
        },
        data: rawData[sid].map((d, did) =>
            totalData[did] <= 0 ? 0 : d / totalData[did]
        )
      }))
    };
    // 学习折线图

    return {
      inputName: '',
      circleUrl: '',
      option,
      situationOption: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      },
      rateOption: {
        title: {
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    }
  },

}
</script>


<style scoped lang="less">
.class_container {
  display: flex;
  width: 100%;

  .class_board {
    margin: 20px;
    width: 100%;
    height: calc(100vh - 100px);
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

        .sort_num {
          width: 10%;
          text-align: center;
        }

        .one_avatar {
          width: 20%;
        }

        .num_and_name {
          width: 40%;
        }

        .star_box {
          width: 30%;
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

    .right_box {
      width: 100%;
      height: 100%;

      .right_top_box {
        height: 50%;
        margin-left: 20px;
        display: flex;
        margin-bottom: 20px;

        .learning_time {
          width: 40%;
          height: 100%;
          background-color: #fff;
          border-radius: 8px;

          .information_box {
            display: flex;
            align-items: center;
            position: relative;
            padding-top: 20px;
            padding-left: 20px;

            .one_avatar {
              width: 20%;
              position: relative;
              justify-content: center;
              align-items: center;
            }

            .num_and_name {
              position: relative;
              display: flex;
              flex-direction: column;

              .name {
                font-weight: bold;
                font-size: 16px;
              }
            }
          }

          .learning_time_chart {
            margin-top: 20px;
            width: 100%;
            height: 70%;
          }
        }

        .learning_situation {
          margin-left: 20px;
          border-radius: 8px;
          width: 60%;
          height: 100%;
          background-color: #fff;

          .learn_title {
            font-size: 16px;
            font-weight: bold;
            padding: 20px;
          }

          .situation_chart {
            width: 100%;
            height: 400px;
          }
        }
      }

      .right_bottom_box {
        height: calc(50% - 20px);
        width: 100%;
        display: flex;

        .true_rate {
          width: 70%;
          height: 100%;
          margin-left: 20px;
          border-radius: 4px;
          background-color: #fff;

          .learn_title {
            font-size: 16px;
            font-weight: bold;
            padding: 20px;
          }

          .learn_chart {
            width: 100%;
            height: calc(100% - 60px);
          }
        }

        .intelligence_remind {
          width: 30%;
          height: 100%;
          margin-left: 20px;
          background-color: #fff;
          border-radius: 8px;
          overflow-y: auto;

          .learn_title {
            font-size: 16px;
            font-weight: bold;
            padding: 20px;
          }

          .summary_study {
            padding: 0 20px;

            .summary_point {
              margin: 6px 0;
            }
          }
        }
      }
    }
  }

}
</style>
