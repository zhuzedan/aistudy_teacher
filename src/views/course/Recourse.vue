<template>
  <div class="recourse_container">
    <div class="recourse_management">
      <!--左栏自定义目录-->
      <div class="left_category">
        <div class="category_list">
          <el-button type="primary" @click="addNewRecord()">新建章节</el-button>
          <custom-tree ref="customTree" :tree-data="treeData" :tree-expand-all="treeExpandAll"
                       :tree-node-key="treeNodeKey" @addItem="addTreeItem" @deleteItem="deleteTreeItem"
                       @editItem="editTreeItem"/>
          <!-- 地点弹窗 -->
          <place-dialog ref="placeDialog" @addData="addData" @editData="editData"/>
        </div>
      </div>
      <!--右栏资源列表-->
      <div class="right_recourse">
        <div class="recourse_list">
          <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
              :limit="3">
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
            <!--            <div slot="tip" class="el-upload__tip">可上传pdf,word,excel等文件，且不超过2mb</div>-->
          </el-upload>
          <el-table
              :data="tableData"
              style="width: 100%">
            <el-table-column
                prop="name"
                label="文件名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="date"
                label="上传时间"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="操作">
              <el-button type="text">预览</el-button>
              <el-button type="text">删除</el-button>
            </el-table-column>
          </el-table>
          <el-pagination
              layout="prev, pager, next"
              :total="50">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlaceDialog from "@/components/treedialog/PlaceDialog.vue";
import CustomTree from "@/components/treedialog/CustomTree.vue";

export default {
  name: "CourseComplete",
  components: {
    PlaceDialog,
    CustomTree
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '传播学.doc',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: 'Java开发手册.doc',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '大话设计模式',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: 'C语言',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      treeData: [],
      treeExpandAll: true,
      treeNodeKey: 'id'
    }
  },

  created() {
    this.initTreeData()
  },

  methods: {
    // 初始化列表
    initTreeData() {
      this.treeData = [
        {
          children: [
            {
              children: [],
              name: '1.1 生物和生物界的一般定义',
              desc: '这是教学楼1楼',
              parentId: '1',
              id: '2'
            },
            {
              children: [],
              name: '1.2 现代生物学与人类社会',
              desc: '这是教学楼1楼',
              parentId: '1',
              id: '3'
            },
            {
              children: [],
              name: '3楼',
              desc: '这是教学楼3楼',
              parentId: '1',
              id: '4'
            }
          ],
          name: '第一章：生命之美',
          parentId: '',
          id: '1'
        },

        {
          children: [
            {
              children: [],
              name: '动物熊猫',
              desc: '这是办公楼',
              parentId: '5',
              id: '6'
            }
          ],
          name: '第二章：动物',
          parentId: '',
          id: '5'
        }
      ]
    },

    // 添加新记录
    addNewRecord() {
      this.$refs.placeDialog.openDialog(false)
    },

    // 新增表单数据
    addData(data) {
      // 新增树节点
      this.$refs.customTree.treeAddItem(data)
    },

    // 修改表单数据
    editData(data) {
      // 修改树节点
      this.$refs.customTree.treeEditItem(data)
    },

    // 增加树节点
    addTreeItem(data) {
      // 打开地点弹窗，设置默认父级节点
      this.$refs.placeDialog.openDialog(false, data.id)
    },

    // 删除树节点
    deleteTreeItem(data) {
      this.$confirm('确定删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 删除树节点
        this.$refs.customTree.treeDeleteItem(data)
        // 提示
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },

    // 修改树节点
    editTreeItem(data) {
      // 打开地点编辑弹窗
      this.$refs.placeDialog.openDialog(true, data.parentId, data)
    }

  }
}
</script>

<style lang="less" scoped>
.recourse_container {
  .recourse_management {
    display: flex;
    width: 100%;
    height: calc(100vh - 140px);
    overflow-y: auto;
    border-radius: 4px;

    .left_category {
      width: 30%;
      height: 100%;
      background-color: #fff;
      overflow-y: auto;

      .category_list {
        padding: 20px;
        overflow-x: auto;

        .el-button {
          margin-bottom: 10px;
        }
      }
    }

    .right_recourse {
      width: 70%;
      height: 100%;
      background-color: #fff;
      overflow-y: auto;
      margin-left: 20px;
      border-radius: 4px;

      .recourse_list {
        margin: 20px;
      }
    }
  }

  .el-button {
    line-height: 10px;
  }
}
</style>
