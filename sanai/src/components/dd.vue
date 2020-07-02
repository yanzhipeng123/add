<template>
  <div class="sp">
   <el-table
    :data="tableData"
     style="width:96%"
     :border="true"
     @expand-change="open"
    >
    <el-table-column
      label="编号"
      align="center"
      prop="id"
      width="100">
    </el-table-column>
    <el-table-column
      label="类型名称"
      align="center"
      prop="name">
    </el-table-column>
    <el-table-column
      align="center"
      label="属性数量"
      prop="attributeCount">
    </el-table-column>
    <el-table-column
      label="参数数量"
      align="center"
      prop="paramCount">
    </el-table-column>
    <el-table-column
      label="设置"
      align="center"
      prop="rating">
        <template>
            <el-button size="small">查看下级</el-button>  <el-button size="small">转移商品</el-button>
        </template>
    </el-table-column>
      <el-table-column
      align="center"
      label="操作">
      <template>
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
  background
  @current-change="handleCurrentChange"
  :current-page.sync="num"
  :page-size="5"
  layout="total,prev, pager, next"
  :total="cc">
</el-pagination>
  </div>
</template>

<script>
import request from './../api/back'
export default {
  data(){
    return {
      num:1,
      lim:5,
      tableData:[],
      cc:0
    }
  },
    methods:{
      handleCurrentChange(value){
        this.num = value
         request.dd(this.num,this.lim).then(msg=>{
         this.tableData = msg.data.data.list
       })
      },
      open(r){
        console.log(r)
      }
    },
  created(){
     request.dd(this.num,this.lim).then(msg=>{
        this.cc = msg.data.data.total
      console.log(msg.data.data.list)
      this.tableData = msg.data.data.list
    })
  }
}
</script>

<style>

</style>