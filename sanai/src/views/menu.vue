<template>
  <div class="menu">
       <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#324157"
      text-color="#bfcbd9"
      menu-trigger="click"
      :router="true"
      active-text-color="deepskyblue">
      <el-menu-item index="/shouy/syy">
        <i class="el-icon-document"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">

    <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品</span>
        </template>
          <el-menu-item index="/shouy/yhlb" style="backgroundColor:#1f2d3d">商品列表</el-menu-item>
          <el-menu-item index="/shouy/sjlb" style="backgroundColor:#1f2d3d">添加商品</el-menu-item>
          <el-menu-item index="/shouy/sp" style="backgroundColor:#1f2d3d">商品分类</el-menu-item>
          <el-menu-item index="/shouy/dd" style="backgroundColor:#1f2d3d">商品类型</el-menu-item>
          <el-menu-item index="/shouy/gly" style="backgroundColor:#1f2d3d">品牌管理</el-menu-item>
          
      </el-submenu>
      
     <el-submenu index="3">

    <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单</span>
        </template>
          <el-menu-item index="3-1">订单列表</el-menu-item>
          <el-menu-item index="3-2">订单设置</el-menu-item>
          <el-menu-item index="3-2">退货申请处理</el-menu-item>
          <el-menu-item index="3-2">退货原因设置</el-menu-item>
          
      </el-submenu>
           <el-submenu index="4">

    <template slot="title">
          <i class="el-icon-location"></i>
          <span>营销</span>
        </template>
          <el-menu-item index="4-1" style="backgroundColor:#1f2d3d">秒杀活动列表</el-menu-item>
          <el-menu-item index="4-1" style="backgroundColor:#1f2d3d">优惠券列表</el-menu-item>
          <el-menu-item index="4-1" style="backgroundColor:#1f2d3d">品牌推荐</el-menu-item>
          <el-menu-item index="4-1" style="backgroundColor:#1f2d3d">新品推荐</el-menu-item>
          <el-menu-item index="4-1" style="backgroundColor:#1f2d3d">人气推荐</el-menu-item>
          <el-menu-item index="4-1" style="backgroundColor:#1f2d3d">专题推荐</el-menu-item>
          <el-menu-item index="4-1" style="backgroundColor:#1f2d3d">广告列表</el-menu-item>
          
      </el-submenu>
           <el-submenu index="5">

    <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限</span>
        </template>
          <el-menu-item index="5-1" style="backgroundColor:#1f2d3d">用户列表</el-menu-item>
          <el-menu-item index="5-1" style="backgroundColor:#1f2d3d">角色列表</el-menu-item>
          <el-menu-item index="5-1" style="backgroundColor:#1f2d3d">菜单列表</el-menu-item>
          <el-menu-item index="5-1" style="backgroundColor:#1f2d3d">资源列表</el-menu-item>
          
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  created(){
  }

}
</script>

<style>
.menu{
  height: 100%;
}
.el-menu{
  height: 100%;
}
.el-submenu .el-menu-item{
  background-color: #1f2d3d !important;
}
.el-submenu .el-menu-item:hover{
  background-color: blueviolet !important;
}
</style>