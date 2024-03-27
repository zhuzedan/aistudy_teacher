<template>
  <div class="class_container">
    <div class="class_box">
      <div class="class_box_inner">
        <!--一行筛选栏-->
        <el-row>
          <el-col :span="4">
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
          <el-col :span="4">
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
          <el-col :span="4">
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
          <el-col :span="4">
            <el-button size="small" icon="el-icon-search" type="primary">搜索</el-button>
            <el-button size="small" icon="el-icon-refresh" type="info">重置</el-button>
          </el-col>
        </el-row>
        <!--正文-->
        <div class="main_box">
          <div class="one_course_all" v-for="item in 3">
            <div class="one_course_box">
              <div class="one_course_name">高等数学</div>
              <i class="el-icon-circle-plus-outline" @click="addClassCourse = true"></i>
            </div>
            <div class="discipline_list">
              <div class="discipline_class" v-for="item in 5" @click="gotoCourseIntroduction()">
                <img
                    src="https://img.js.design/assets/img/65af2d2237097e231dfa80dc.webp#cbb5198478492695b7a2299d015d1d3b"
                    alt="">
                <div class="about_course">
                  <div class="avatar">
                    <el-avatar :size="50" :src="circleUrl"></el-avatar>
                  </div>
                  <div class="course_name_teacher">
                    <div class="course_name">数据结构</div>
                    <div class="course_teacher">王富贵</div>
                  </div>
                </div>
                <el-progress :percentage="50"></el-progress>

                <div class="course_description">
                  22 媒体技术（一）
                </div>
              </div>

              <div class="discipline_class" @click="gotoCourseIntroduction()">
                <img
                    src="https://img.js.design/assets/img/65af2d2237097e231dfa80dc.webp#cbb5198478492695b7a2299d015d1d3b"
                    alt="">
                <div class="about_course">
                  <div class="avatar">
                    <el-avatar :size="50" :src="circleUrl"></el-avatar>
                  </div>
                  <div class="course_name_teacher">
                    <div class="course_name">数据结构</div>
                    <div class="course_teacher">王富贵</div>
                  </div>
                </div>
                <el-progress :percentage="50"></el-progress>

                <div class="course_description">
                  22 媒体技术（一）
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    <!--添加课程-->
    <el-dialog title="添加班级" :visible.sync="addClassCourse">
      <el-input
          size="small"
          placeholder="请输入关键词"
          prefix-icon="el-icon-search"
          v-model="dialogSearch">
      </el-input>
      <el-table :data="gridData">
        <el-table-column property="className" label="班级全称"></el-table-column>
        <el-table-column property="dept" label="所属学院"></el-table-column>
        <el-table-column property="count" label="人数"></el-table-column>
        <el-table-column property="startSchool" label="入学日期"></el-table-column>
        <el-table-column property="members" label="班级成员" width="400" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作">
          <el-button type="primary" size="small" @click="insertThisClass">添加</el-button>
        </el-table-column>
      </el-table>
      <el-pagination
          layout="prev, pager, next"
          :total="50">
      </el-pagination>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 添加课程弹窗显示
      addClassCourse: false,
      dialogSearch: '',
      gridData: [{
        className: '23数字媒体技术',
        dept: '数字技术与工程学院',
        count: '32人',
        startSchool: '2023年9月15日',
        members: '张毅、网易、利尔、詹姆斯、Jack、张毅、网易、利尔、詹姆斯、Jack、张毅、网易、利尔、詹姆斯、Jack、张毅、网易、利尔、詹姆斯、Jack'
      }, {
        className: '23数字媒体技术',
        dept: '数字技术与工程学院',
        count: '32人',
        startSchool: '2023年9月15日'
      }, {
        className: '23数字媒体技术',
        dept: '数字技术与工程学院',
        count: '32人',
        startSchool: '2023年9月15日'
      }, {
        className: '23数字媒体技术',
        dept: '数字技术与工程学院',
        count: '32人',
        startSchool: '2023年9月15日'
      }],
      circleUrl: '',
      selectTerm: '',
      selectDept: '',
      selectClass: '',
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
      ]
    }
  },
  methods: {
    insertThisClass() {
      this.$confirm('是否添加此班级', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '添加成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消添加'
        });
      });
    }
  }
}
</script>


<style scoped lang="less">
.class_container {
  display: flex;
  //background-color: #b77eea;
  flex-direction: column;
  height: calc(100vh - 60px);
  overflow-y: auto;

  .class_box {
    background-color: @primaryBackgroundColor;

    .class_box_inner {
      padding: 20px 40px;

      .el-row {
        background-color: #fff;
        border-radius: 4px;
        padding: 20px 0;

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

      .main_box {
        flex-wrap: wrap;
        display: flex;
        justify-content: center;

        .one_course_all {
          margin-top: 20px;
          background-color: #fff;
          border-radius: 4px;
          width: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;

          .one_course_box {
            display: flex;
            margin-left: 20px;
            margin-top: 20px;

            .one_course_name {
              font-size: 16px;
              font-weight: bold;
            }

            i {
              font-size: 20px;
              margin-left: 10px;
              color: @primaryNoSelected;
              text-align: center;
              display: flex;
              position: relative;
              align-items: center;
            }

          }

          .discipline_list {
            display: flex;
            flex-wrap: wrap;
            //background-color: palegreen;
            width: 94%;
            position: relative;

            .discipline_class {
              width: 220px;
              height: 280px;
              border-radius: 8px;
              background-color: #fff;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
              display: flex;
              margin: 20px;
              flex-direction: column;
              overflow-y: auto;

              img {
                width: 100%;
                border-radius: 8px 8px 0 0;
              }

              .about_course {
                display: flex;
                margin: 10px 10px 0 10px;

                .course_name_teacher {
                  margin-left: 10px;

                  .course_name {
                    font-size: 16px;
                    font-family: HanSansBold;
                  }

                  .course_teacher {
                    font-size: 14px;
                  }
                }
              }

              .el-progress {
                margin: 10px;

              }

              .course_description {
                margin-left: 10px;
                font-size: 14px;
              }
            }

          }
        }


      }

    }
  }

  // 自定义一些element样式
  ::v-deep .el-dialog__header {
    padding: 20px 20px 0 20px;
  }

  ::v-deep .el-dialog__body {
    padding: 20px;
  }

  .el-input {
    width: 200px;
  }
}
</style>
