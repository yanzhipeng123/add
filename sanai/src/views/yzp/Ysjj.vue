<template>
  <div class="ysjj">
    <header>
      <div class="head">
        <dl>
          <dt>
            <img src="http://localhost:8080/img/doctor.jpg" alt />
          </dt>
          <dd>
            <h3>张厚杰大夫</h3>
            <p>主治医师</p>
            <p>擅长：外感热病、咳喘痰鸣、内伤脾胃、风湿痹痛、急症阑尾、肝胆胰腺、急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺</p>
          </dd>
        </dl>
      </div>
    </header>
    <div class="content">
      <p class="one">
        该医生可预约就诊（300元/次）
        <span @click="gothree">预约</span>
      </p>
      <p class="one">
        典型医案
        <span @click="gofour">查看</span>
      </p>
      <p class="one">
        文章随笔
        <span>查看</span>
      </p>
      <div class="one-content">
        <h3>医生公告</h3>
        <p>尊敬的患者您好，感谢您对张厚杰医生和三爱中医的任，以下为张厚杰医生就诊注意事项，请您知晓：</p>
        <p>1、前台会提前一天与您确认次日就诊，确认后如需取消，请于18点前告知前台，否则不能如约就诊，门诊将向您收取300元费用，如您前日没有收到我们的确认信息，可微信联系我们；</p>
        <p>1、前台会提前一天与您确认次日就诊，确认后如需取消，请于18点前告知前台，否则不能如约就诊，门诊将向您收取300元费用，如您前日没有收到我们的确认信息，可微信联系我们；</p>
      </div>
      <div class="two">
        <h3>大夫简介</h3>
        <p>
          毕业于山东中医药大学，前后师从于滕州明医邵文啟老师及方剂名家刘持年教授。精研岐黄二十余载，临证谨遵仲圣六经悉病，继辨方证，谨守病机，求得方证对应而应愈疾。临证之余，深感万病不离阴阳，外感、内伤诸疾，其
          病位不外有三：除却表里，皆为半表半里。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    gothree(){
      this.$router.push('/ysjj_three')
    },
    gofour(){
      this.$router.push('/ysjj_four')
    }
  }
};
</script>

<style scoped lang="scss">
header {
  background: #8d6546;
  width: 100%;
  height: 1rem;
  position: relative;
  dl {
    position: absolute;
    top: 0.25rem;
    left: 0.2rem;
    display: flex;
    width: 90%;
    border: 0.01rem solid #d4d4d4;
    border-radius: 0.04rem;
    background: #ffffff;
    justify-content: space-around;
    align-items: center;
    dt {
      border-radius: 0.4rem;
      img {
        width: 1rem;
        height: 1rem;
        border-radius: 0.5rem;
      }
    }
    dd {
      p {
        font-size: 0.12rem;
      }
    }
  }
}
.content {
  margin-top: 0.5rem;
  padding: 0 0.2rem;
  .one {
    margin-top: 0.2rem;
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.01rem solid #d4d4d4;
    border-radius: 0.04rem;
    span {
      display: inline-block;
      width: 0.4rem;
      height: 0.3rem;
      text-align: center;
      line-height: 0.3rem;
      background: #8d6546;
      color: #000000;
      font-size: 0.14rem;
    }
  }
  .one-content {
    margin-top: 0.2rem;
    border: 0.01rem solid #d4d4d4;
    border-radius: 0.04rem;
    background: #ffffff;
  }
  .two{
       margin-top: 0.2rem;
    border: 0.01rem solid #d4d4d4;
    border-radius: 0.04rem;
    background: #ffffff;
  }
}
</style>