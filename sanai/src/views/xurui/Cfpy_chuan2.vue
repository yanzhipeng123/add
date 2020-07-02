<template>
  <div>
    <header>
      <p>
        <img src="http://localhost:8080/img/userimg_ioc.jpg" />
        <span>传方人</span>
      </p>
      <section>
        <span>姓名：</span>
        <input type="text" />
      </section>
      <section>
        <span>性别：</span>
        <input type="radio" name="nan" />男
        <input type="radio" name="nan" />女
      </section>
      <p>既往病史和过敏：</p>
      <textarea name id cols="40" rows="5" placeholder="输入病史和过敏源"></textarea>
    </header>
    <div class="clearfix">
      <section>
        <img class="cloudy fl mr5" src="http://localhost:8080/img/cloudy.jpg" />
        <span class="f16 font_ht fl colorcf9156 mr5">上传处方</span>
        <span class="f12 colorff0000 pt5 fl">最多可以上传3张</span>
      </section>
      <section>
        <img src="http://localhost:8080/img/ysimg02.jpg" alt class="sc-img" />
        <img src="http://localhost:8080/img/ysimg02.jpg" alt class="sc-img" />
        <img src="http://localhost:8080/img/ysimg02.jpg" alt class="sc-img" />
      </section>
    </div>
    <div class="drug">
      <section>
        <span>药材类型：</span>
        <label for="radio">
          <input type="radio" name="nan" @click="btnn(1)" />中药饮片
        </label>
        <label for="radio">
          <input type="radio" name="nan" @click="btnn(2)" />颗粒剂
        </label>
      </section>
      <section v-show="drug">
        <span>煎药类型：</span>
        <input type="radio" name="nan" />代煎
        <input type="radio" name="nan" />自煎
      </section>
      <section>
        <span>开方医生：</span>
        <input type="text" placeholder="选填" />
      </section>
      <section>
        <span>备注：</span>
        <input type="text" placeholder="选填" />
      </section>
      <section>
        <span>取药方式</span>
        <input type="radio" name="nan" @click="ziqu(1)" />自取
        <input type="radio" name="nan" @click="ziqu(2)" />快递
        <input type="radio" name="nan" @click="ziqu(3)" />闪送
      </section>
    </div>
    <div class="na" v-show="invite">
      <section>
        <p>
          <img class="addico fl" src="http://localhost:8080/img/addico.jpg" />
          <span class="fl f16 font_ht colorcf9156 ml5">自取地址</span>
        </p>
      </section>
      <section>
        <p>
          收货地址1：建国东路320号【浦西店】
          <input type="radio" name="na" />
        </p>
      </section>
      <section>
        <p>
          收货地址2：建国东路320号【浦西店】
          <input type="radio" name="na" />
        </p>
      </section>
    </div>
    <div class="na" v-show="express">
      <section>
        <p>
          <img class="addico fl" src="http://localhost:8080/img/addico.jpg" />
          <span class="fl f16 font_ht colorcf9156 ml5">收货地址</span>
        </p>

        <button>选择收货地址</button>
      </section>
      <section>
        <p>收件人：张三</p>
        <p>电话：139****8914</p>
      </section>
      <section>
        <p>收货地址：建国东路320号【浦西店】</p>
      </section>
    </div>
    <div class="na" v-show="cranch">
      <section>
        <p>
          <img class="addico fl" src="http://localhost:8080/img/addico.jpg" />
          <span class="fl f16 font_ht colorcf9156 ml5">收货地址</span>
        </p>

        <button>选择收货地址</button>
      </section>
      <section>
        <p>李四</p>
        <p>电话：139****8914</p>
      </section>
      <section>
        <p>收货地址：浦电路114号【浦东店】</p>
      </section>
    </div>
    <footer>
      <h6>温馨提示</h6>
      <p>尊敬的客户您好！以下事项请您仔细阅读：</p>
      <p>
        1. 您上传处方后，门诊会根据您的处方内容进行审核，如您上传的处方不合规定，本门诊部将无法调配发药，并会短信通知您，由此给您带来的不便还请您谅解，谢谢！
        <br />2. 药房审核处方并划价后，会通过手机短信告知您价格，请您留意查收短信。您在平台支付完成后，我们会尽快为您安排发药
        <br />3. 您可以在微信公众号“预约看诊”—“个人中心”—“传方配药”栏目中查看您的订单的实时状态，选择快递的客户可实时查看物流信息
        <br />4. 如有任何疑问，请拨打客服电话：021-53028359，谢谢！
      </p>
    </footer>
    <van-dialog @confirm="add" v-model="show" title="提示" show-cancel-button  width="90%">
      您的处方已提交成功
    </van-dialog>
    <div class="btn">
      <button @click="btn">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drug: false,
      invite: true,
      express: false,
      cranch: false,
      show: false
    };
  },
  created() {},
  mounted() {},
  methods: {
    btn(){
      this.show = true
    },
    ziqu(i) {
      switch (i) {
        case 1:
          this.invite = true;
          this.express = false;
          this.cranch = false;
          break;
        case 2:
          this.invite = false;
          this.express = true;
          this.cranch = false;
          break;
        case 3:
          this.invite = false;
          this.express = false;
          this.cranch = true;
          break;
      }
    },
    btnn(i) {
      console.log(i);
      switch (i) {
        case 1:
          this.drug = true;
          break;
        case 2:
          this.drug = false;
          break;
      }
    },
    add(){
      this.$router.push('/worder')
    }
  }
};
</script>

<style lang="scss" scoped>
.van-dialog{
  text-align: center;
}
.btn {
  widows: 100%;
  padding-left: 0.3rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  button {
    width: 90%;
    height: 0.4rem;
    color: white;
    background: #8d6546;
    border-radius: 0.5rem;
    border: none;
  }
}
footer {
  width: 90%;
  margin: 0 auto;
  border: 1px solid aqua;
  padding-left: 0.2rem;
  padding-bottom: 0.2rem;
  h6 {
    color: #cf9156;
    padding-top: 0.1rem;
  }
  p {
    padding-top: 0.1rem;
  }
}
.na {
  width: 100%;
  padding-bottom: 0.2rem;
  padding-top: 0.1rem;
  section {
    display: flex;
    padding: 0rem 0.1rem;
    justify-content: space-between;
  }
  button {
    background: #83634a;
    color: wheat;

    width: 1.5rem;
    border: none;
    border-radius: 0.5rem;
    margin-bottom: 0.3rem;
  }
}
.drug {
  width: 100%;
  padding-top: 0.2rem;
  padding-left: 0.2rem;
  border-bottom: 5px solid grey;
  padding-bottom: 0.2rem;
  section {
    width: 100%;
    padding-top: 0.2rem;
  }
  section:nth-child(1) {
    color: white;
    background: #83634a;
    line-height: 0.3rem;
  }
}
.clearfix {
  width: 100%;
  line-height: 0.6rem;
  padding-left: 0.2rem;
  border-bottom: 5px solid grey;
  span:nth-child(3) {
    color: red;
    padding-left: 0.2rem;
  }
  section:nth-child(2) {
    width: 100%;
    img {
      width: 30%;
    }
  }
}
header {
  width: 100%;
  padding-left: 0.2rem;
  padding-bottom: 0.2rem;
  border-bottom: 5px solid grey;
  section {
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
  }
  p {
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
  }
}
</style>
