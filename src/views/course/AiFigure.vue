<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "AiFigure",

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
  border-radius: 4px;
  background: #ffffff;
  min-height: calc(100vh - 100px - 60px);
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
