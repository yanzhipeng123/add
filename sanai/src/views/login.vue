<template>
  <div class="hok">
      <img src="http://120.53.31.103:84/uploads/image/2020-05-27/zmkrHVxaa4fVI5jtcNZ3xGy6KPU0QjXzxPjX7trh.jpeg" alt="">
    <div class="side">
      <p>欢迎使用后台管理系统</p>
      <input type="text" v-model="user" class="text" placeholder="请输入用户名" @keydown.enter="tab"><br/>
      <input type="password" v-model="pass" maxlength="6" class="text" placeholder="请输入密码" @keydown.enter="tab"><br/>
      <button @click="tab">登录</button>
    </div>

  </div>
</template>

<script>
import oppop from './../api/test'
export default {
  name: 'Hok',
  data(){
    return{
      user:'' ,
      pass:'',
    }
  },
  methods:{
    tab(){
      if(this.user == "" || this.pass == ""){
        this.$message({
          showClose: true,
          message: 'couwu',
            type: 'error'
        });
      }else{
        oppop.login(this.user,this.pass).then(response=>{
          const resp = response.data
          console.log(resp)
          if(resp.code==200){
            this.$message({
              message: '登录成功',
              type: 'success',
              duration:1600
            });
            localStorage.setItem('adminToken',resp.data.token)
            localStorage.setItem('adminUser',JSON.stringify(resp.data))
            setTimeout(()=>{ 
              this.$router.push('/shouy')
            },2000)
          }
      })
      }
     
    },
  }
}
</script>
<style scoped lang='scss'>
*{
  margin: 0;
  padding: 0;
}

img{
    width: 220px;
    height: 146px;
    margin-left: 42.5%;
    margin-top: 100px;
  }
.side{
  .text{
    width: 368px;
    height: 36px;
    margin-top: 20px;
    margin-left: 37%;
  }
  p{
    font-size: 20px;
    text-align: center;
    margin-left: -10px;
    color: #2d8cf0;
  }
  button{
    width: 370px;
    height: 34px;
    border: none;
    margin-left: 37%;
    margin-top: 30px;
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
  }
}
</style>