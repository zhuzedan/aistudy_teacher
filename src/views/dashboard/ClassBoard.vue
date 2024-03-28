<template>
  <div class="board_container">
    <div class="board_box">
      <!--整个左栏学生列表-->
      <div class="stu_list">
        <el-tree
            :data="treeData"
            :default-expand-all=true
            :props="defaultProps"
            node-key="id"
            :render-content="renderTreeNode"
            @node-click="handleNodeClick"
        />
      </div>
      <div class="right_box">
        <div class="right_top_box">
          <div class="learning_time">
            <div class="information_box">
              <div class="one_avatar">
                <el-avatar :size="80" :src="circleUrl"></el-avatar>
              </div>
              <div class="num_and_name">
                <div class="name">数据结构</div>
                <div class="class_num">22媒体技术1</div>
              </div>
            </div>
            <div class="learning_time_chart">
              <v-chart :option="option"/>
            </div>
            <div class="study_time">
              <div>最短学习时长  15min</div>
              <div>最长学习时长  2h</div>
              <div>平均学习时长  56min</div>
            </div>
          </div>
          <div class="learning_situation">
            <div class="learn_title">知识点错误率</div>
            <div class="situation_chart">
              <v-chart :option="knowledgeOption"/>
            </div>
          </div>
        </div>
        <div class="right_bottom_box">
          <div class="true_rate">
            <div class="learn_title">学习时间热力图</div>
            <div class="learn_chart">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassBoard",
  data() {
    return {
      option: {
        title: [
          {
          }
        ],
        polar: {
          radius: [30, '80%']
        },
        angleAxis: {
          max: 4,
          startAngle: 75
        },
        radiusAxis: {
          type: 'category',
          data: ['a', 'b', 'c', 'd']
        },
        tooltip: {},
        series: {
          type: 'bar',
          data: [2, 1.2, 2.4, 3.6],
          coordinateSystem: 'polar',
          label: {
            show: true,
            position: 'middle',
            formatter: '{b}: {c}'
          }
        }
      },
      knowledgeOption: {
        title: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
        },
        series: [
          {
            name: '2011',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: '2012',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      },
      treeData: [
        {
          id: 1,
          label: '第一章：生命之美',
          children: [
            {
              id: 74,
              label: '二级 1-1',
              children: [
                {
                  id: 11,
                  label: '资料',
                },
                {
                  id: 10,
                  label: '习题',
                },
              ],
            },
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 11,
                  label: '资料',
                },
                {
                  id: 10,
                  label: '习题',
                },
              ],
            }
            // 更多第二级节点...
          ],
        },
        {
          id: 61,
          label: '第一章：生命之美',
          children: [
            {
              id: 64,
              label: '二级 1-1',
              children: [
                {
                  id: 611,
                  label: '资料',
                },
                {
                  id: 610,
                  label: '习题',
                },

              ],
            },
            // 更多第二级节点...
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
      circleUrl: ''
    }
  },
  methods: {
    handleNodeClick() {
      if (data.label === '习题') {
      }
    },
    renderTreeNode(h, {node, data, store}) {
      const hasChildren = node.childNodes && node.childNodes.length;

      return (
          <span>
          {node.level === 2 && (
              <i class="el-icon-folder-opened"></i>
          )}
            {node.level === 3 && (
                <i class="el-icon-document"></i>
            )}
            {node.label}
        </span>
      );
    }
  }
}
</script>

<style lang="less" scoped>
.board_container {
  display: flex;
  width: 100%;
  height: 100%;

  .board_box {
    margin: 20px;
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;

    .stu_list {
      width: 22%;
      height: calc(100vh - 140px);
      padding: 20px;
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
            height: 55%;
          }

          .study_time {
            padding: 20px;
            line-height: 1.7;
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
          width: 100%;
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

      }
    }
  }
}
</style>
