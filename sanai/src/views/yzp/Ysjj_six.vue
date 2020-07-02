<template>
  <div class="six">
    <div class="content">
      <div class="one">
        <p>预约成功!</p>
        <p>加号排队：您好，我们已经收到您的加号申请，我们会按照预约取消的顺序安排预约，如没有取消我们也会跟医生沟通安排就诊，请您耐心等待我们的通知（就诊前一天），感谢您的配合！</p>
        <p class="pp"><span>预约编号</span> <span>2019052055531001</span> </p>
        <p></p>
         <p><span>患者姓名</span> <span>张三</span> </p>
          <p><span>预约医生</span> <span>张厚杰</span> </p>
           <p><span>门店地址</span> <span>建国东路320号，近黄陂南路</span> </p>
           <p><span>预约时间</span> <span>2019年6月29日  下午15点30分</span> </p>
           <p @click="goseven">查看我的预约</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
 methods:{
    goseven(){
    this.$router.push('/ysjj_seven')
  }
 }
};
</script>

<style scoped lang="scss">
.content {
  padding: 0.2rem 0.2rem;
  p:nth-child(1){
      font-size: 0.24rem;
      text-align: center;
      color: saddlebrown;
  }
  p:nth-child(2){
      font-size: 0.14rem;
      color:tan;
      line-height: 0.3rem;
  }
   p:nth-child(3){
        margin-top: 0.2rem;
       display: flex;
       justify-content: space-between;
   }
    p:nth-child(4){
        border: 0.02rem dotted saddlebrown;
        margin-top: 0.3rem;
    }
      p:nth-child(5){
        margin-top: 0.2rem;
       display: flex;
       justify-content: space-between;
   }
     p:nth-child(6){
        margin-top: 0.2rem;
       display: flex;
       justify-content: space-between;
   }
     p:nth-child(7){
        margin-top: 0.2rem;
       display: flex;
       justify-content: space-between;
   }
     p:nth-child(8){
        margin-top: 0.2rem;
       display: flex;
       justify-content: space-between;
   }
    p:nth-child(9){
       width: 1.2rem;
       height: 0.4rem;
       background:saddlebrown;
       text-align: center;
       line-height: 0.4rem;
       margin-top: 1rem;
       margin-left: 1rem;
       color: #ffffff;
   }
}
</style>