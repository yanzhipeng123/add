<template>
  <div class="dd">
    <el-table :data="tableData" style="width:96%" :border="true" @expand-change="open">
      <el-table-column label="编号" align="center" type="index" width="100"></el-table-column>
      <el-table-column label="分类名称" align="center" prop="name" width="80"></el-table-column>
      <el-table-column align="center" label="级别" width="100">
        <template>
          <span>一级</span>
        </template>
      </el-table-column>
      <el-table-column label="商品数量" align="center" prop="productCount" width="100"></el-table-column>
      <el-table-column label="数量单位" align="center" prop="productUnit" width="100"></el-table-column>
      <el-table-column label="导航栏" align="center" prop="rating" width="100">
        <template slot-scope="scope">
          <el-switch class="top" v-model="scope.row.navStatus"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="是否显示" align="center" prop="rating" width="100">
        <template slot-scope="scope">
          <el-switch class="top" v-model="scope.row.showStatus"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="排序" align="center" prop="sort" width="100"></el-table-column>
      <el-table-column label="设置" align="center" prop="rating" width="240">
        <template>
            <el-button size="small">查看下级</el-button>  <el-button size="small">转移商品</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
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
      :total="cc"
    ></el-pagination>
  </div>
</template>

<script>
import request from "./../api/back";
export default {
  data() {
    return {
      num: 1,
      lim: 5,
      tableData: [],
      cc: 0
    };
  },
  methods: {
    handleCurrentChange(value) {
      this.num = value;
      request.sp(this.num, this.lim).then(msg => {
        this.tableData = msg.data;
      });
    },
    open(r) {
      console.log(r);
    }
  },
  created() {
    request.sp(this.num, this.lim).then(msg => {
      this.cc = msg.data.data.total;
      console.log(msg.data.data.list);
      this.tableData = msg.data.data.list;
    });
  }
};
</script>

<style>
</style>