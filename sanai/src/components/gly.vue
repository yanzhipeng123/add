<template>
  <div class="sjlb">
        <el-table
    :data="tableData"
    style="width:96%"
    :border="true"
    >
     <el-table-column
      type="selection"
      width="45">
    </el-table-column>
    <el-table-column
      label="编号"
      align="center"
      prop="id"
      width="100">
    </el-table-column>
    <el-table-column
      label="品牌名称"
      align="center"
      prop="name">
    </el-table-column>
    <el-table-column
      align="center"
      label="品牌首字母"
      prop="firstLetter"
      width="100">
    </el-table-column>
    <el-table-column
      label="排序"
      align="center"
      prop="sort">
    </el-table-column>
    <el-table-column
      label="品牌制造商"
      align="center"
      prop="rating">
       <template slot-scope="scope">
          <el-switch class="top" v-model="scope.row.factoryStatus"></el-switch>
        </template>
    </el-table-column>
    <el-table-column
      label="是否显示"
      align="center"
      prop="rating">
        <template slot-scope="scope">
          <el-switch class="top" v-model="scope.row.showStatus"></el-switch>
        </template>
    </el-table-column>
   
    <el-table-column
      label="相关"
      align="center"
      width="180">
      <template slot-scope="scope">
        商品:<span style="margin-left:10px;color:deepskyblue">{{scope.row.productCommentCount}}</span>
        评价：<span style="margin-left:10px;color:deepskyblue">{{scope.row.productCount}}</span>
      </template>
    </el-table-column>
      <el-table-column
      align="center"
      label="操作" width="160">
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
            lim:10,
            tableData:[],
            cc:0
        }
    },
        methods:{
      handleCurrentChange(value){
        this.num = value
        request.gly(this.num,this.lim).then(msg=>{
      this.cc = msg.data.data.total
      // console.log(msg.data)
            this.tableData = msg.data.data.list
            this.tableData.forEach(mss=>{
        if(mss.factoryStatus==1){
          mss.factoryStatus = true
        }
      })
    })
      },
    },
  created(){
    request.gly(this.num,this.lim).then(msg=>{
      console.log(msg.data.data.list)
      this.cc = msg.data.data.total
      this.tableData = msg.data.data.list
      this.tableData.forEach(mss=>{
        if(mss.factoryStatus==1){
          mss.factoryStatus = true
        }
      })
    })
  }
}
</script>

<style>
.el-table{
  margin-left: 2%;
  border: 1px solid #cccc;
}
.el-pagination{
  margin-left: 2%;
}
.gly .el-form-item{
  width:40%;
}
.el-form-item  .el-form-item__label{
  color:#99a9bf;
}
.el-submenu{
  overflow:hidden;
}
</style>