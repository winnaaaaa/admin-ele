<template>
  <el-container>
    <el-header height="50px">
      <bread-crumd></bread-crumd>
    </el-header>
    <el-aside width="200px">
      <div class="user">
        <span class="headimg" v-bind:style="{backgroundImage:'url(' + userInfo.img + ')'}"></span>
        <span class="name">{{userInfo.name}}</span>
        <span class="job">{{userInfo.job}}</span>
      </div>
      <el-menu
        default-active="defaultActive"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#2f4050"
        text-color="#fff"
        active-text-color="#ffd04b" router>
        <el-menu-item index="home"><i class="el-icon-menu"></i>首页</el-menu-item>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-document"></i>文章管理</template>
          <el-menu-item index="addContent">发布文章</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>

      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-main>
  </el-container>


</template>

<script>
  import breadCrumd from '../components/breadCrumb';
  export default {
    data(){
      return{
        userInfo:{
          name:"winna丽君君君",
          img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2774616704,1367368457&fm=26&gp=0.jpg",
          job:"前端工程师"
        }
      }
    },
    components: {
      breadCrumd
    },
    computed: {
      defaultActive: function(){
        return this.$route.path.replace('/', '')
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="less">
  .el-header{
    z-index: 998;
    position: fixed;
    top: 0;
    left: 0;
    padding: 15px 0 0 240px;
    width: 100%;
    background: #fbfbfb;
    border-bottom: 1px solid #f3f3f3;
  }
  .el-aside{
    z-index: 999;
    position: fixed;
    top: 0;
    left:0;
    height: 100%;
    background: #2f4050;

  }
  .el-main{
    min-height: 2000px;
    padding: 100px 30px 0 240px;

  }
  .el-menu{
    border-right: none;
  }
  .user{
    padding: 30px 0;
  }
  .user span.headimg{
    display: block;
    width: 60px;
    height: 60px;
    margin: 5px auto;
    border-radius: 60px;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .user span.name,.user span.job{
    display: block;
    text-align: center;
    color: #6a7682;
  }
  .user span.name{
    margin: 10px 0 5px 0;
    font-size: 18px;
    color: #c2d3e2;
  }
</style>
