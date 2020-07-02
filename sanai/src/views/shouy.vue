<template>
  <div class="shouy">
      <div class="header">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
          <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/image/20191zsiWcV9dm1576930191.png" alt="" class="imgt">
            <i class="el-icon-caret-bottom" style="font-size: 30px; color: rgb(255, 255, 255);"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
           <el-dropdown-item style="color:deepskyblue">
              <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/image/20191zsiWcV9dm1576930191.png" alt="" class="imgr">
               超级管理员
           </el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-tools
" divided>
<span class="span">账号设置</span></el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button"><span class="span"  @click="tabb">退出登录</span></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
      </div>
      <div class="aside">
          <men></men>
      </div>
      <div class="cont">
         <p class="pp"><a href="/shouy/syy">首页</a><span v-show="$route.path !== '/shouy/syy'">/</span><a style="margin-left
         :12px">{{$route.meta.tilte}}</a><span v-show="$route.path !== '/shouy/syy'">/</span>&emsp;&emsp;&emsp;&nbsp;{{$route.meta.lb}}</p>
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import oppop from './../api/test'
import menu from './menu'
export default {
    data(){
        return{
            header:[],
            k:0,
            cg:false,
            icon:[
                "el-icon-s-custom",
                "el-icon-s-platform",
                "el-icon-s-marketing",
                "el-icon-s-shop",
                "el-icon-menu",
                "el-icon-s-goods",
                "el-icon-s-check",
                "el-icon-s-data",
                "el-icon-s-tools"
            ]
        }
    },
    components:{
        men:menu
    },  
    created(){
        // oppop.home().then(msg=>{
        //     this.header = msg.data.rows
        // })
    },
    methods:{
        tab(m){
            this.k = m
        },
        tabb(){
            localStorage.removeItem('adminToken')
            localStorage.removeItem('adminUser')
            this.$router.push('/login')
        },
    }
}
</script>

<style lang='scss'>

.shouy{
    height: 100%;
}
*{
    margin: 0;
    padding: 0;
}
 .imgr{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
        margin-bottom: -10px;
    }
    .span{
        margin-left: 26px;
    }
.header{
    width: 100%;
    height: 64px;
    z-index: 2;
    background: linear-gradient(143deg, rgb(41, 69, 203) 20%, rgb(43, 131, 249) 81%, rgb(58, 157, 255));
    .imgt{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 4px;
        margin-top: 10px;
        margin-bottom: -8px;
    }
    .imgo{
        width: 60px;
        height: 40px;
        margin-top: 10px;
        margin-left: 65px;
        float: left;
    }
    .el-dropdown{
        float: right;
        margin-right:20px;
        cursor: pointer;
    }
}
li{
    list-style: none;
}
.ulo{
    margin-left: 60px;
    width: 60%;
    float: left;
    height: 64px;
    li{
        float: left;
        cursor: pointer;
        width: 11%;
        i{
            margin-right: 5px;
        }
        color: rgb(236, 227, 215);
        p{
            line-height: 37px;
            margin-top: 10px;
        }
    }
    .active{
        color: white;
        cursor: pointer;
        span{
            background-color: aquamarine;
            width:68px;
            display:inline-block;
            height:3px;
            margin-left: -4px;
        }
    }
}
.aside{
    width: 16%;
    float: left;
    height: 100%;
    position: fixed;
    top: 64px;
    left: 0;
    background-color: #324157;
}
.pp{
    margin-top: 10px;
    margin-left: 2%;
    color: #97a8be;
    font-size: 13px;
    margin-bottom:2%;
    a{
        margin-right: 12px;
        color:black;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
    }
    a:hover{
        color: deepskyblue;
        cursor: pointer;
    }
}
.header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}
.cont{
    width: 84%;
    float: left;
    margin-top: 64px;
    margin-left: 16%;
}
</style>