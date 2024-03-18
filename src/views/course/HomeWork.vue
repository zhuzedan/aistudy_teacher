<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
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
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
    handleNodeClick(data) {
      console.log(data);
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{name: 'region1'}, {name: 'region2'}]);
      }
      if (node.level > 3) return resolve([]);

      var hasChild;
      if (node.data.name === 'region1') {
        hasChild = true;
      } else if (node.data.name === 'region2') {
        hasChild = false;
      } else {
        hasChild = Math.random() > 0.5;
      }

      setTimeout(() => {
        var data;
        if (hasChild) {
          data = [{
            name: 'zone' + this.count++
          }, {
            name: 'zone' + this.count++
          }];
        } else {
          data = [];
        }

        resolve(data);
      }, 500);
    }
  }
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

.grid-content {
  background: #ffffff;
  border-radius: 4px;
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