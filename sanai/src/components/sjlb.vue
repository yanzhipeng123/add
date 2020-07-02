<template>
  <div class="sjlb">

<div class="form">
  <el-steps :active="active" finish-status="success">
  <el-step title="填写商品信息"></el-step>
  <el-step title="填写商品促销"></el-step>
  <el-step title="填写商品属性"></el-step>
  <el-step title="选择商品相关"></el-step>
</el-steps>
  <el-form style="margin-top:40px"  :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="商品分类:" prop="region" required>
    <el-cascader v-model="value" :options="options"></el-cascader>
  </el-form-item>
  
  <el-form-item label="商品名称:" prop="name" required>
    <el-input v-model="ruleForm.name" style="width:600px"></el-input>
  </el-form-item>
  
  <el-form-item label="副标题:" required>
    <el-input v-model="ruleForm.name" style="width:600px"></el-input>
  
  </el-form-item>
  <el-form-item label="商品品牌:" prop="region" required>
      <el-select v-model="ruleForm.item" placeholder="请选择品牌">
          <el-option v-for="item of list1" :label="item.name" :key="item.id" :value="item.name"></el-option>
      </el-select>
  </el-form-item>
  <el-form-item label="商品介绍:" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc" style="width:600px"></el-input>
  </el-form-item>
    <el-form-item label="商品货号:" prop="name">
    <el-input v-model="ruleForm.name" style="width:600px"></el-input>
  </el-form-item>
  <el-form-item label="商品售价:" prop="name" hide-required-asterisk= "false">
    <el-input v-model="ruleForm.name" hide-required-asterisk style="width:600px"></el-input>
  </el-form-item>
    <el-form-item label="市场价:" prop="name">
    <el-input v-model="ruleForm.name" style="width:600px"></el-input>
  </el-form-item>
  <el-form-item label="商品库存:" prop="name" hide-required-asterisk= "false">
    <el-input v-model="ruleForm.name" hide-required-asterisk style="width:600px"></el-input>
  </el-form-item>
    <el-form-item label="计量单位:" prop="name">
    <el-input v-model="ruleForm.name" style="width:600px"></el-input>
  </el-form-item>
  <el-form-item label="商品重量:" prop="name" hide-required-asterisk= "false">
    <el-input v-model="ruleForm.name" hide-required-asterisk style="width:300px"></el-input><span style="display:inline-block;width:20px;"></span>克
  </el-form-item>
    <el-form-item label="排序" prop="name">
    <el-input v-model="ruleForm.name" style="width:600px"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">下一步，填写商品促销</el-button>
  </el-form-item>

</el-form>
</div>

  </div>
</template>

<script>
import request from './../api/back'
export default {
   data(){
        return {
            num:0,
            lim:20,
            tableData:[],
            cc:0,
            value:'',
            options:[],
            list1:{},
             active: 0,
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          item:''
        },
        list:{},
        }
    },
        methods:{
      handleCurrentChange(value){
        this.num = value
      },
      submitForm(value){
        console.log(value)
      },
      open(r){
        console.log(r)
      }
    },
  created(){
     request.els().then(ssd => {
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
         request.cout().then(asd=>{
          console.log(asd)
          this.list1 = asd.data.data.list
        })
  }
}
</script>

<style>
.form{
  width: 70%;
  padding-left: 50px;
  border: 1px solid #ccc;
  margin-left: 10%;
}
.el-table{
  margin-left: 2%;
  border: 1px solid #cccc;
}
.el-steps{
  width: 90%;
  margin-left: 5%;
  margin-top:30px;
  z-index: 0;
}
.el-form .el-button{
  margin-left: 200px;
}
.sjlb .el-form-item .el-form-item__label{
  color: black;
}
.el-step__title {
  margin-left: -40px;
}
</style>