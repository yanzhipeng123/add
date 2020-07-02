<template>
  <div class="yhlb">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <div class="form-div">
        <p>
          <i class="el-icon-search"></i>
          筛选搜索
        </p>
        <p>
          <el-form-item>
            <el-button>重置</el-button>
            <el-button type="primary">查询结果</el-button>
          </el-form-item>
        </p>
      </div>
      <el-form-item label="输入搜索">
        <el-input v-model="form.name" placeholder="商品名称"></el-input>
      </el-form-item>
      <el-form-item label="商品货号">
        <el-input v-model="form.id" placeholder="商品货号"></el-input>
      </el-form-item>
      <el-form-item label="商品分类">
        <el-cascader v-model="value" :options="options"></el-cascader>
      </el-form-item>
      <el-form-item label="商品品牌">
        <el-select v-model="form.brand" placeholder="请选择品牌">
          <el-option v-for="item of list1" :label="item.name" :key="item.id" :value="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上架状态">
        <el-select v-model="form.brand1" placeholder="请选择品牌">
          <el-option v-for="(item,index) of Sj" :key="index" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="审核状态">
        <el-select v-model="form.brand2" placeholder="请选择品牌">
          <el-option v-for="(item,index) of Sh" :key="index" :value="item"></el-option>
        </el-select>
      </el-form-item>
    </el-form>

  <div class="commod-content">
      <p>
        <i class="el-icon-tickets"></i>数据列表
      </p>
      <el-button size="small" @click="upAddition">添加</el-button>
    </div>


    <el-table :data="tableData" style="width:96%">
      <el-table-column
      type="selection"
      width="45">
    </el-table-column>
      <el-table-column prop="id" label="编号" width="100"></el-table-column>
      <el-table-column prop="registe_time" label="商品图片" width="120">
        <template slot-scope="scope">
          <img :src="scope.row.pic" alt class="imgs" />
        </template>
      </el-table-column>
      <el-table-column prop="username" label="商品名称" width="100">
        <template slot-scope="scope">
          {{scope.row.name}}
          <br />
          <span class="top">品牌：{{scope.row.brandName}}</span>
        </template>
      </el-table-column>
      <el-table-column label="价格/货号" width="120">
        <template slot-scope="scope">
          价格：{{scope.row.price}}
          <br />
          <span class="top">货号：{{scope.row.productSn}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="city" label="标签" width="120">
        <template  slot-scope="scope">
        <el-switch
         inactive-text="上架："
  class="top"
  v-model="scope.row.publishStatus">
</el-switch>
  <br/>
<el-switch
  v-model="scope.row.newStatus"
  class="top"
   inactive-text="新品："
  >
</el-switch>
  <br/>
<el-switch
  inactive-text="推荐："
  class="top"
  v-model="scope.row.recommendStatus">
</el-switch>
        </template>

      </el-table-column>
      <el-table-column prop="sort" label="排序"></el-table-column>
      <el-table-column prop="city" label="SKU库存" width="78">
        <template>
          <p class="polp"><i class="el-icon-edit"></i></p>
        </template>
      </el-table-column>
      <el-table-column prop="sale" label="销量"></el-table-column>
      <el-table-column label="审核状态">
        <template>
          未审核
          <br />
          <span class="top" style="color:deepskyblue">审核详情</span>
        </template>
      </el-table-column>
      <el-table-column prop="city" label="操作" width="160">
        <template>
          <el-button size="small">查看</el-button>
          <el-button size="small">编辑</el-button>
          <el-button size="small" id="top">日志</el-button>
          <el-button size="small" type="danger" id="top">删除</el-button>
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
import test from "./../api/test";
import back from "./../api/back";
export default {
  data() {
    return {
      num: 1,
      list: {},
      lim: 5,
      value:'',
      tableData: [],
      list1: {},
      cc: 0,
      formInline: {
        user: "",
        region: ""
      },
      Sj: ["上架", "下架"],
      Sh: ["审核通过", "未审核"],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      options: [],
      list1: {}
    };
  },
  methods: {
    handleCurrentChange(value) {
      this.num = value;
      test
      .home(this.num, this.lim)
      .then(msg => {
        console.log(msg.data.data.list);
        this.tableData = msg.data.data.list;
                this.tableData.forEach(mss => {
          if (mss.publishStatus == 1) {
            mss.publishStatus = true;
          }
          if (mss.newStatus == 1) {
            mss.newStatus = true;
          }
          if (mss.recommandStatus == 1) {
            mss.recommandStatus = true;
          }
        });
        back.cout().then(asd=>{
          console.log(asd)
          this.list1 = asd.data.data.list
        })
        back.els().then(ssd => {
          console.log(ssd.data.data);
          this.list = ssd.data.data;
          const res = ssd.data.data;
          const a = [];
          var obj = {};
          var obj1 = {};
          res.forEach((v, i) => {
            a.length = i;
            obj = {
              value: v.id,
              label: v.name,
              children: []
            };
            a[i] = { ...obj };
            v.children.forEach((b, c) => {
              obj.children.length = c;
              obj1 = {
                value: b.id,
                label: b.name
              };
              obj.children[c] = { ...obj1 };
            });
          });
          this.options = a;
        });
        this.cc = msg.data.data.total
      })
    },
    upAddition(){
      this.$router.push('/shouy/sjlb')
    }
  },
  created() {
    test
      .home(this.num, this.lim)
      .then(msg => {
        console.log(msg.data.data.list);
        this.tableData = msg.data.data.list;
        
        this.tableData.forEach(mss => {
          if (mss.publishStatus == 1) {
            mss.publishStatus = true;
          }
          if (mss.newStatus == 1) {
            mss.newStatus = true;
          }
          if (mss.recommandStatus == 1) {
            mss.recommandStatus = true;
          }
        });
        back.cout().then(asd=>{
          console.log(asd)
          this.list1 = asd.data.data.list
        })
        back.els().then(ssd => {
          console.log(ssd.data.data);
          this.list = ssd.data.data;
          const res = ssd.data.data;
          const a = [];
          var obj = {};
          var obj1 = {};
          res.forEach((v, i) => {
            a.length = i;
            obj = {
              value: v.id,
              label: v.name,
              children: []
            };
            a[i] = { ...obj };
            v.children.forEach((b, c) => {
              obj.children.length = c;
              obj1 = {
                value: b.id,
                label: b.name
              };
              obj.children[c] = { ...obj1 };
            });
          });
          this.options = a;
        });
        this.cc = msg.data.data.total
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang='scss'>
.top {
  margin-top: 10px;
  display: inline-block;
}
.el-table {
  margin-left: 2%;
  border: 1px solid #cccc;
}
#top {
  margin-top: 6px;
}
#app .yhlb .el-table .el-button + .el-button {
  margin-left: 2px;
}
.el-switch__label{
  span{
    color: black;
  }
}
.box {
  width: 96%;
  margin-left: 2%;
  border-radius: 5px;
  height: 300px;
  border: 1px solid #ccc;
}
.polp{
  width: 50px;
  height: 50px;
  background-color: deepskyblue;
  font-size: 26px;
  i{
    display: inline-block;
    margin-top: 10px;
  }
  color: white;
  border-radius: 50%;
}
#app .is-leaf {
  background: #eef1f6;
  color: #323541;
}
.el-pagination {
  margin-left: 2%;
}

.imgs {
  width: 50px;
  height: 50px;
}
#app .el-table td {
  text-align: center;
}
#app .el-table th {
  text-align: center;
}
.demo-form-inline {
  padding: 20px;
  width: 91%;
  min-height: 30px;
  border: 1px solid #ebeef5;
  margin-left: 2%;
  border-radius: 5px;
  .form-div {
    width: 100%;
    justify-content: space-between;
    display: flex;
  }

  .el-form-item {
    margin-right: 50px;
    margin-left: 70px;
  }
}
.commod-content {
  width: 96%;
  margin-left: 2%;
  border: 1px solid #ebeef5;
  height: 60px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
  text-indent: 10px;

  p {
    i {
      margin-right: 10px;
    }
  }
  .el-button {
    margin-right: 20px;
  }
}

#app .yhlb .el-input {
  width: 220px;
}
</style>