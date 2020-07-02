<template>
  <div>
    <div class="row_center">
      <img class="img" src="http://localhost:8080/img/sanailogo.jpg" alt />
    </div>
    <div class="row_center title">
      <h3>上海三爱中医</h3>
      <small>养生有道 滋补有方 食育健康</small>
    </div>
    <div class="row_center content">
      <p>
        <input class="input" type="text" v-model="Phone" placeholder="请输入手机号" />
      </p>
      <p>
        <input class="input" type="text" v-model="user" placeholder="请输入姓名" />
      </p>
      <p>
        <input class="input1" type="text" v-model="pwd" placeholder="验证码" />
        <span class="btn" @click="send">获取验证码</span>
      </p>
      <p>
        <span>是否使用商业险报销</span>
        <el-switch v-model="value" active-color="rgb(117, 85, 95)" inactive-color="gray"></el-switch>
      </p>
      <p class="sub_container">
        <span class="submit" @click="submit">立即注册</span>
      </p>
      <p>
        已有账号？
        <span class="r_color" @click="onlogin">立即登录</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: false,
      Phone:"",
      user:"",
      pwd:"",
      newpwd:""
    };
  },
  methods:{
    send(){
      let n1 = parseInt(Math.random()*10);
      let n2 = parseInt(Math.random()*10);
      let n3 = parseInt(Math.random()*10);
      let n4 = parseInt(Math.random()*10);
      this.newpwd = `${n1}${n2}${n3}${n4}`;
      window.alert(this.newpwd)
    },
    onlogin(){
      this.$router.push("/login")
    },
  submit(){
     //手机号正则
    let reg = new RegExp(/^1[3456789]\d{9}$/)
    //判断状态
    let flag=false;
    let flag1=false;
    //正则判断手机号
    if(!reg.test(this.Phone)){
      alert("手机号不对")
      //修改状态
      flag=false;
      return;
    }else{
      //修改状态
      flag=true;
    }
    //判断用户名
    if(this.user.length > 4 || this.user.length == 0){
      alert("用户名不能为空，和不能超过四位")
      //修改状态
      flag1=false;
      return;
    }else{
      //修改状态
      flag1=true;
    }
    //最终验证注册状态
    if(flag&&flag1){
      //结果都为true的时候信息存储
      let obj={
        name:this.user,
        phone:this.Phone
      }
      let list=JSON.parse(window.localStorage.getItem("registers"))||[];
      let result = false;
      list.map((item)=>{
        if(item.phone==this.Phone){
          result=true;
        }
      })
      if(result){
          window.alert("已有该用户！")
          return;
      }else{
        list.push(obj)
        window.localStorage.registers=JSON.stringify(list);
      }
      
    }

    if(this.newpwd==this.pwd && flag && flag1){

      alert("注册成功，进入登录页")
    }else{
      alert("请重新输入验证码")
    }
  }
  }
};
</script>
<style scoped>
.clear_btn {
  height: 30px;
}
.sub_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.submit {
  display: block;
  width: 70%;
  height: 35px;
  border-radius: 5px;
  background: rgb(117, 85, 95);
  color: white;
  padding: 5px 10px;
}
.btn {
  width: 40%;
  height: 35px;
  border-radius: 5px;
  background: rgb(117, 85, 95);
  color: white;
  padding: 5px 10px;
  margin-left: 10px;
}
.input {
  width: 70%;
  height: 35px;
  border-radius: 5px;
  background: #f2f2f2;
  border: none;
  text-indent: 1em;
  color: gray;
}
.input1 {
  width: 40%;
  height: 35px;
  border-radius: 5px;
  background: #f2f2f2;
  border: none;
  text-indent: 1em;
  color: gray;
}
.content p {
  margin: 10px 0;
}
.title {
  margin-bottom: 30px;
}
.img {
  height: 100px;
  margin-top: 50px;
  margin-bottom: 20px;
}
.row_center {
  text-align: center;
}
.r_color {
  color: red;
}
</style>