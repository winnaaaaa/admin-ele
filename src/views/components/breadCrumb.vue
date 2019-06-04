<template>
  <el-breadcrumb  separator="/">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
    export default {
        name: "breadCrumb"
    }
</script>

<style scoped>

</style>
