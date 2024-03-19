<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content">
          <div class="students">
            <div class="student_box">
              <div class="block">
                <el-avatar :size="54" :src="circleUrl"></el-avatar>
              </div>
              <div>李四五</div>
            </div>
            <div class="student_box">
              <div class="block">
                <el-avatar :size="54" :src="circleUrl"></el-avatar>
              </div>
              <div>李四五</div>
            </div>
            <div class="student_box">
              <div class="block">
                <el-avatar :size="54" :src="circleUrl"></el-avatar>
              </div>
              <div>李四五</div>
            </div>
          </div>
          <div class="question">
            <div>设0< X1< 3 , Xn+1=Xn(3-Xn)^1/2 (n=1、2...) 证明数列{Xn} 的极限存在，并求此极限.</div>
          </div>
          <div class="answer">答案</div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content_right">
          <el-button type="primary" round>AI批改</el-button>
          <el-tree
              class="chapter_catalogue"
              :data="data"
              show-checkbox
              node-key="id"
              default-expand-all
              :props="defaultProps">
          </el-tree>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HomeWork",
  data() {
    return {
      courseBoxCount: 11,
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      data: [{
        id: 1,
        label: '第一张啥',
        children: [{
          id: 4,
          label: '二级 1-1',
        }, {
          id: 3,
          label: '二级 1-1212',
        }]
      }, {
        id: 2,
        label: '第二章啥',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  computed: {},
  methods: {}
}
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.el-avatar {
  box-sizing: border-box;
  border: 3px solid rgba(124, 158, 252, 1);
}

.grid-content {
  background: #f5f5f5;
  border-radius: 8px;
  min-height: calc(100vh - 100px - 60px);

  .students {
    display: flex;
    position: relative;
    width: 100%;
    height: 100px;
    border-radius: 8px;
    background-color: rgba(245, 247, 254, 1);

    .student_box {
      display: flex;
      flex-direction: column;
      width: 75px;
      justify-content: center;
      align-items: center;
    }
  }

  .question {
    display: flex;
    position: relative;
    width: 100%;
    height: 250px;
    border-radius: 8px;
    margin-top: 16px;
    background-color: rgba(245, 247, 254, 1);
  }

  .answer {
    background-color: #fff;
    margin-top: 20px;
    border-radius: 8px;
    min-height: calc(100vh - 100px - 60px - 386px);
    border: 1px solid rgba(102, 135, 255, 1);
  }
}

.grid-content_right {
  background: #fff;
  border-radius: 8px;
  min-height: calc(100vh - 100px - 60px);
}

.el-button {
  margin-left: 20px;
  margin-top: 20px;
}

.chapter_catalogue {
  position: relative;
  padding: 20px;
}

</style>
