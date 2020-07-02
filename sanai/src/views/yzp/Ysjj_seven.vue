<template>
  <div class="seven">
      <div class="content">
          <div class="one">
              <h3>预约编号：2019052055531001</h3>
              <p>患者姓名：<span>张三</span> </p>
              <p>患者性别：<span>男</span> </p>
              <p>患者年林：<span>31</span> </p>
              <p>预约医生：<span>张厚杰</span> </p>
              <p>预约门店：<span>三爱店</span> </p>
              <p>门店地址：<span>上海静安区南山路98号</span> </p>
              <p>预约时间：<span>2019/06/30    10：00</span> </p>
              <p>预约金：<span>￥300</span> </p>
          </div>
          <div class="two">
             <div>
                  <h3>支付方式</h3>
              <p>
                  <img src="/static/images/saweChatimg.jpg" alt="">
                  <span>微信支付</span>
                  <input type="checkbox" name="" id="">
              </p>
             </div>
              <div>
              <p>
                  <img src="/static/images/saalipayimg.jpg" alt="">
                  <span>支付宝支付</span>
                  <input type="checkbox" name="" id="">
              </p>
             </div>
          </div>
            <div class="three">
        <h3 style="color:#8d6546">温馨提示</h3>尊敬的客户您好！以下事项请您仔细阅读：
        <br />
        <br />1. 部分医生的预约需要预付费用，如您正常就诊，预付费用即抵扣等额的诊疗费用。如果需要取消预约，请您在
        <span
          style="color:#8d6546"
        >看诊日期前一天的18：00前取消</span>，系统将全额退还预付费用，晚于该时间则不予退还，感谢您的理解和配合！
        <br />
        <span style="color:#8d6546">2. 高端医疗保险直付客户，不需支付预约费用，直接到店结算。</span>
        <br />
        <span style="color:#8d6546">3. 请在15分钟内完成支付，否则将会自动取消该预约</span>
        <br />
        <span style="color:#8d6546">4. 若预约已满，或有其他疑问，可拨打客服电话咨询：</span>
        <br />

        <span style="color:#8d6546">浦西店：021-53028359</span>
        <br />

        <span style="color:#8d6546">浦东店：021-58762557</span>
        <br />
      </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.content{
    padding: 0.2rem 0.2rem;
  
   .one{
         border: 0.01rem solid #d4d4d4;
         border-radius: 0.04rem;
        p{
        color: #d4d4dd;
        span{
            color: #000000;
            line-height: 0.4rem;
        }
    }
   }
   .two{
       margin-top: 0.2rem;
       height: 1.2rem;
        border: 0.01rem solid #d4d4d4;
         border-radius: 0.04rem;
       div:nth-child(1){
           height: 0.5rem;
          
         img{
             margin-top: 0.2rem;
             width: 0.2rem;
              margin-left: 0.2rem;
         }
       }
        div:nth-child(2){
          height: 0.5rem;
         img{
              margin-top: 0.2rem;
             width: 0.2rem;
              margin-left: 0.2rem;
         }
       }
   }
   .three{
        margin-top: 0.2rem;
        border: 0.01rem solid #d4d4d4;
        border-radius: 0.04rem;
    //    height: 1.4rem;
   }
}
</style>