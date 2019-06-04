<template>

  <div>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">4</div></el-col>
    </el-row>
    <canvas id="myChart2" width="400px" height="400px"></canvas>
  </div>
</template>

<script>
import breadCrumd from '../components/breadCrumb';
import Chart from 'chart.js'


export default{
  data(){
    return{

    }
  },
  components:{
    breadCrumd
  },
  mounted() {


    var ctx2 = document.getElementById("myChart2");

    var myChart2 = new Chart(ctx2, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            label: "test1",
            backgroundColor: "rgba(225,10,10,0.3)",
            borderColor: "rgba(225,103,110,1)",
            borderWidth: 1,
            pointStrokeColor: "#fff",
            pointStyle: "crossRot",
            data: [65, 59, 0, 81, 56, 10, 40, 22, 32, 54, 10, 30],
            cubicInterpolationMode: "monotone",
            spanGaps: "false",
            fill: "false"
          }
        ]
      },
      options: {

      }

    });
  },
  methods: {

  }
}
</script>

<style scoped lang="less">

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
