<template>
  <div class="ysjj_one">
    <div class="content">
      <ul>
        <li @click="fn(num)">
          <img src="" alt="">
          <img :src="img" alt="">
        </li>
        <li>
          <img :src="img2" alt="">
        </li>
      </ul>
      <div class="repeat">
        <dl>
          <dt>
            <img src="http://localhost:8080/img/doctor.jpg" alt />
          </dt>
          <dd>
            <h3>张厚杰</h3>
            <p>擅长：外感热病、咳喘痰鸣、内伤脾胃、风湿痹痛、急症阑尾、肝胆胰腺、急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺</p>
            <p>
                <span>典型医案</span>
                 <span>预约</span>
            </p>
          </dd>
        </dl>
        <dl>
          <dt>
            <img src="http://localhost:8080/img/doctor.jpg" alt />
          </dt>
          <dd>
            <h3>张厚杰</h3>
            <p>擅长：外感热病、咳喘痰鸣、内伤脾胃、风湿痹痛、急症阑尾、肝胆胰腺、急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺</p>
            <p>
                <span>典型医案</span>
                 <span>预约</span>
            </p>
          </dd>
        </dl>
        <dl>
          <dt>
            <img src="http://localhost:8080/img/doctor.jpg" alt />
          </dt>
          <dd>
            <h3>张厚杰</h3>
            <p>擅长：外感热病、咳喘痰鸣、内伤脾胃、风湿痹痛、急症阑尾、肝胆胰腺、急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺</p>
            <p>
                <span>典型医案</span>
                 <span>预约</span>
            </p>
          </dd>
        </dl>
        <dl>
          <dt>
           <img src="http://localhost:8080/img/doctor.jpg" alt />
          </dt>
          <dd>
            <h3>张厚杰</h3>
            <p>擅长：外感热病、咳喘痰鸣、内伤脾胃、风湿痹痛、急症阑尾、肝胆胰腺、急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺</p>
            <p>
                <span>典型医案</span>
                 <span>预约</span>
            </p>
          </dd>
        </dl>
        <dl>
          <dt>
            <img src="http://localhost:8080/img/doctor.jpg" alt />
          </dt>
          <dd>
            <h3>张厚杰</h3>
            <p>擅长：外感热病、咳喘痰鸣、内伤脾胃、风湿痹痛、急症阑尾、肝胆胰腺、急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺急症阑尾、肝胆胰腺</p>
            <p>
                <span>典型医案</span>
                 <span>预约</span>
            </p>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      img:'http://localhost:8080/img/address_bj02.png',
      img2:'http://localhost:8080/img/address_bj01.png',
      num:0

    }
  },
  computed:{
   
  }

};
</script>

<style scoped lang="scss">
.content {
  padding: 0 0.2rem;
  margin-top: 0.2rem;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    li {
      width: 48%;
      text-align: center;
      height: 1.2rem;
      border: 0.01rem solid #d4d4d4;
      border-radius: 0.04rem;
      background: #ffffff;
      img{
        width: 100%;
        height: 100%;
      }
      // p {
      //   font-size: 0.12rem;
      //   color: #ffffff;
      // }
      // .one {
      //   margin-top: 0.34rem;
      // }
    }
  }
  .repeat{
      dl{
          margin-top: 0.2rem;
          display: flex;
          border: 0.01rem solid #d4d4d4;
            border-radius: 0.04rem;
            background: #ffffff;
          dt{
              img{
                  width: 1rem;
                  height: 1rem;
              }
          }
          dd{
              p{
                  font-size: 0.12rem;
              }
          }
      }
  }
}
</style>