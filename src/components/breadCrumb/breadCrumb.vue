<template>
  <div class="bottom">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu icon-breadcrumb"></i>{{firstTitle}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{secondTitle}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  props: {
    firstTitle: {
      type: String,
      default: ''
    },
    secondTitle: {
      type: String,
      default: ''
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
 .bottom {
    margin-bottom:20px;
  }
  .icon-breadcrumb {
    margin-right: 10px;
  }
</style>
