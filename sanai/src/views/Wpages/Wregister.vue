<template>
  <div>
    <img class="active_img1" src="http://localhost:8080/img/sanaibg01.jpg" />
    <img class="active_img2" src="http://localhost:8080/img/sanaibg02.jpg" />
    <div>
      <div class="row_center logo">
        <img src="http://localhost:8080/img/sanailogo.jpg" alt />
      </div>
      <div  class="row_center title">
        <h3>上海三爱中医</h3>
        <small>养生有道 滋补有方 食育健康</small>
      </div>
      <div class="btn_container">
        <p class="btn" @click="onlogin">手机号登录</p>
        <p class="btn" @click="onregister">注册</p>
      </div>
      <div class="footer">
        <div class="Warning">
          <p>当天预约请联系前台客服</p>
          <p>浦西店：021-53028359</p>
          <p>浦东店：021-58762557</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    onlogin(){
      this.$router.push("/login")
    },
    onregister(){
      this.$router.push("/registertwo")
    }
  },
  mounted(){
    let obj=JSON.parse(window.localStorage.getItem("login"))||[];
    if(obj.phone!=undefined && obj.user!= undefined){
      this.$router.push("/index")
    }
  }
};
</script>
<style scoped>
.title
{
    margin:10px 0;
}
.logo
{
    margin-top:50px;
}
.row_center
{
    text-align: center;
}
.btn_container
{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.btn
{
    width:80%;
    height:35px;
    border:1px solid gray;
    border-radius:5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:10px 0;
}
.footer
{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:50px;
}
.Warning
{
    height:100px;
    width:200px;
    color:white;
    background: rgba(0,0,0,0.7);
    border-radius:5px;
    text-align: center;
}
.active_img1 {
  position: absolute;
  right: 0;
  top: 100px;
  height: 90px;
}
.active_img2 {
  position: absolute;
  left: 0;
  bottom: 100px;
  height: 90px;
}
</style>