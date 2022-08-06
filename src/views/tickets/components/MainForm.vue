<template>
  <div class="app">
    <div class="button">
      <el-button type="primary" icon="el-icon-circle-plus">新建</el-button>
      <el-button type="warning">工单配置</el-button>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, next"
      :background="true"
      prev-text="上一页"
      next-text="下一页"
      :total="1000"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 5
    }
  },

  created() {},

  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped lang="scss">
.app {
  background-color: #fff;

  .button {
    display: flex;
  }
  .el-pagination {
    .btn-prev,
    .btn-next {
      width: 70px;
      height: 32px;
      margin: 0 16px;
      border-radius: 2px;
      background-color: #d5ddf8;
      z-index: 999;
    }
  }
  .el-button--primary {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px !important;
    height: 36px;
    padding: 0;
    background: linear-gradient(135deg, #ff9743, #ff5e20) !important;
    border: none;
  }
  .el-button--warning {
    background-color: #fbf4f0 !important;
    border: none;
    color: #655b56 !important;
    width: 80px !important;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
