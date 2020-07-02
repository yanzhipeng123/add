<template>
  <div>
    <div class="the_center logo">
      <img src="http://localhost:8080/img/sanailogo.jpg" alt />
    </div>
    <div class="the_center">
      <h3 class="the_center">上海三爱中医</h3>
      <small class="the_center">养生有道 滋补有方 食育健康</small>
    </div>
    <div>
      <div class="the_center">
        <input class="input input1" v-model="Phone" type="text" placeholder="请输入手机号" />
      </div>
      <div class="the_center row">
        <input class="input input2" v-model="pwd" type="text" placeholder="验证码" />
        <span class="btn" @click="send">发送验证码</span>
      </div>
    </div>
    <div class="the_center row">
      <p class="submit_btn" @click="submit">立即登录</p>
    </div>
    <div>
      <p class="the_center">
        未有账号？立即
        <span class="r_color" @click="onregister">注册</span>
      </p>
    </div>
    <div class="footer">
      <div class="footer_red the_center">
        <p>当天预约请联系前台客服</p>
        <p>浦西店：021-53028359</p>
        <p>浦东店：021-58762557</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      Phone:"",
      pwd:"",
      newold:""
    }
  },
  methods:{
    send(){
      let n1 = parseInt(Math.random()*10);
      let n2 = parseInt(Math.random()*10);
      let n3 = parseInt(Math.random()*10);
      let n4 = parseInt(Math.random()*10);
      this.newold = `${n1}${n2}${n3}${n4}`;
      window.alert(this.newold)
    },
    submit(){
      let arr = JSON.parse(window.localStorage.getItem("registers"))||[];
      let flag=false;
      let str = "";
      let phone = "";

        arr.map((item)=>{
          if(item.phone==this.Phone){
            flag=true
            str=item.name;
            phone=item.phone;
          }
        })
      
      if(this.pwd == this.newold && flag){
        let obj={
          user:str,
          phone:phone
        }
        window.localStorage.login=JSON.stringify(obj);
        alert("已登录")
        this.$router.push("/index")
      }else{
        window.alert("验证码错误或手机号错误")
      }
    },
    onregister(){
      this.$router.push("/registertwo")
    }
  }
};
</script>
<style scoped>
.footer
{
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer_red p
{
    margin:7px 0;
}
.footer_red
{
    background: rgba(0, 0,0,0.8);
    width:50%;
    height:100px;
    color:white;
    border-radius:5px;
}
.submit_btn
{
    width:70%;
    height:30px;
    border-radius:5px;
    background: rgb(117,85,95);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:10px;
    color:#f2f2f2;
}
.row
{
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn
{   
    display: inline-block;
    width:35%;
    height:30px;
    border-radius:5px;
    background: rgb(117,85,95);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:10px;
    color:#f2f2f2;
}
.input2
{
    width: 40%;
    text-indent: 1em;
    border-radius:5px;
    color:#ccc;
}
.input1
{
    width:80%;
    text-indent: 1em;
    border-radius:5px;
    color:gray;
}
.input
{
    background: #eee;
    border:none;
    height:30px;
}
.logo img
{
    height:100%;
}
.logo
{
    width:100vw;
    height:100px;
    margin-top:100px;
}
.r_color
{
    color:red;
}
.the_center
{
    text-align: center;
    margin:10px 0;
}
</style>