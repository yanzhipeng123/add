<template>
  <div class="three">
    <div class="content">
      <div class="one">
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
      <div class="two">
        <h3>预约信息</h3>
        <p>
          姓名:
          <input type="text" />
          手机号:
          <input type="text" />
        </p>
        <p>
          年龄:
          <input type="text" />
          男
          <input type="checkbox" name id />
          <input type="checkbox" name id />女
        </p>
      </div>
      <div class="three_go">
        <h3>预约时间：2019-06-29 星期六</h3>
        <h3>预约医生：张厚杰</h3>
        <h3>预约院区：上海市三爱中医门诊部</h3>
      </div>
      <div class="four">
          <h3>请选择预约时间
              <span>（注：若已约满，请联系客服加号）</span>
          </h3>
          <ul>
              <li>预约</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>加号</li>
          </ul>
      </div>
      <div class="five">
          <h3>病情备注
              <span>（选填）</span>
          </h3>
         <textarea></textarea>
      </div>
      <div class="zhifu">
          <h3>支付方式</h3>
          <p> 微信支付 <input type="checkbox" name="" id=""></p>
          <p>支付宝支付 <input type="checkbox" name="" id=""></p>
      </div>
    </div>
    <footer>
        <p>预约费用：300元</p>
        <p @click="gosix">立即预约</p>
    </footer>
  </div>
</template>

<script>
export default {
  methods:{
    gosix(){
      this.$router.push('/ysjj_six')
    }
  }
};
</script>

<style scoped lang="scss">
.content {
  margin-top: 0.2rem;
  padding: 0 0.2rem;
  .one {
    font-size: 0.14rem;
    border: 0.01rem solid #d4d4d4;
    border-radius: 0.04rem;
    span {
      font-size: 0.14rem;
    }
  }
  .two {
    border: 0.01rem solid #d4d4d4;
    border-radius: 0.04rem;
    margin-top: 0.2rem;
    height: 1rem;
    :nth-child(2) {
      margin-top: 0.05rem;
      input {
        width: 0.8rem;
      }
    }
    :nth-child(3) {
      input {
        width: 0.4rem;
      }
    }
  }
  .three_go {
    border: 0.01rem solid #d4d4d4;
    border-radius: 0.04rem;
    margin-top: 0.2rem;
    height: 1.4rem;
    text-align: center;
    h3{
        margin-top: 0.2rem;
    }
  }
  .four{
    border: 0.01rem solid #d4d4d4;
    border-radius: 0.04rem;
    margin-top: 0.2rem;
      h3{
          span{
              font-size: 0.12rem;
              color:#8d6546 ;
          }
      }
      ul{
          width: 100%;
          height: 1.6rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          li{
              width: 30%;
              text-align: center;
              height: 0.3rem;
              border: 0.01rem solid #d4d4d4;
          }
      }
  }
  .five{
        border: 0.01rem solid #d4d4d4;
        border-radius: 0.04rem;
        margin-top: 0.2rem;
        height: 1.4rem;
        h3{
            margin-left: 0.2rem;
            span{
                font-size: 0.12rem;
                color: darkgrey;
            }
        }
        textarea{
            margin-left: 0.2rem;
            width: 90%;
            height: 70%;
            background: #d4d4d4;
        }
  }
  .zhifu{
        border: 0.01rem solid #d4d4d4;
        border-radius: 0.04rem;
        margin-top: 0.2rem;
        height: 1rem;
        p{
           line-height: 0.4rem;
        }
  }
}
footer{
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 0.5rem;
    line-height: 0.5rem;
    :nth-child(2){
       width: 1rem;
       background: #8d6546;
       color: #ffffff;
       text-align: center;
    }
}
</style>