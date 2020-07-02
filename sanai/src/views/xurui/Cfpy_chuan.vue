<template>
  <div class="div">
    <div class="header">
      <span>编号：18043474DVS941334</span>
      <span>待确定</span>
    </div>
    <div class="see_a_doctor">
      <ul>
        <li>
          <img src="http://localhost:8080/img/userimg_ioc.jpg" alt />
          
        </li>
        <li>
          <p>就诊人</p>
        </li>
      </ul>
    </div>
    <div class="uploading">
      <p>
        <svg
          t="1591014297811"
          class="icon ico"
          viewBox="0 0 1157 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4619"
          width="38"
          height="38"
        >
          <path
            d="M0.089 541.57c0-124.378 82.237-233.716 192.153-266.112C253.074 115.123 403.708 0 579.93 0c177.646 0 324.186 115.078 384.973 275.458 113.432 33.153 192.198 141.066 192.198 266.113 0 153.971-119.573 279.15-270.919 279.15-28.347 0-53.934-26.61-53.934-56.07 0-33.82 25.587-56.115 53.934-56.115 91.226 0 163.806-74.093 163.806-166.876 0-49.618-21.449-95.676-56.649-125.136l-9.656-9.434a49.173 49.173 0 0 0-12.46-10.057c-2.76-3.604-9.034-3.604-12.46-6.497h-3.427c-2.76-3.56-6.23-3.56-9.034-6.453h-3.47c-2.76 0-6.23-3.56-9.657-3.56-2.76 0-6.23 0-6.23-2.892h-9.034c-3.471 0-6.23 0-9.701-3.605H882.71c-2.759-10.813-6.23-18.69-6.23-29.503-2.759 0-2.759-3.56-2.759-6.453-3.427-6.497-3.427-12.905-6.23-19.447 0-3.56-3.427-3.56-3.427-7.164-2.759-6.497-6.23-12.905-9.656-19.403v-6.497c-2.804-6.452-9.078-12.905-12.46-19.446-53.178-92.116-151.39-154.64-261.975-154.64-113.342 0-211.466 62.568-264.688 154.64l-9.034 19.446c0 2.18-1.424 2.18-2.091 4.317l-1.38 2.18-9.701 19.403v7.164l-8.945 19.447v6.453c-3.47 10.769-6.942 18.69-6.942 29.459h-28.302c-2.759 3.604-6.23 3.604-8.944 3.604h-6.23c-2.76 2.18-4.14 2.893-4.896 2.893a1.246 1.246 0 0 1-2.047 0c-2.759 0-6.23 3.56-9.033 3.56h-6.23c-3.427 2.937-6.23 2.937-9.657 6.497h-3.426c-2.76 2.893-6.23 2.893-9.079 6.497h-3.426c-2.76 3.56-6.23 6.453-9.701 10.057-6.23 2.848-8.945 6.497-12.416 9.39-35.244 29.504-53.222 75.562-53.222 125.18 0 92.783 72.58 166.876 160.38 166.876 32.485 0 56.693 22.295 56.693 56.07 0 29.505-24.208 56.071-56.694 56.071C123.133 820.722 0.09 695.542 0.09 541.66z m362.857 186.991c0-16.554 6.23-28.791 12.46-39.56l163.762-186.902c10.413-10.814 24.92-16.555 40.806-16.555 15.932 0 28.347 5.786 41.475 16.51l160.38 186.991a55.982 55.982 0 0 1-40.763 94.964c-15.931 0-27.68-8.678-38.048-19.447l-69.109-78.41v281.955c0 33.82-24.208 55.403-53.935 55.403-31.105 0-53.222-21.582-53.222-55.403v-281.91l-69.065 78.365c-10.368 10.814-25.543 19.447-41.43 19.447-28.391 0-53.311-25.9-53.311-55.403v-0.045z"
            p-id="4620"
            fill="#d7964c"
          />
        </svg>
        上传处方
      </p>
      <ul>
        <li>
          <img src="http://localhost:8080/img/ysimg02.jpg" alt class="sc-img" />
        </li>
        <li>
          <img src="http://localhost:8080/img/ysimg02.jpg" alt class="sc-img" />
        </li>
        <li>
          <img src="http://localhost:8080/img/ysimg02.jpg" alt class="sc-img" />
        </li>
      </ul>
    </div>
    <div class="tisane">
      <ul>
        <li v-for="(item,i) in list1" :key="i">
          {{item.name1}}:
          {{item.name2}}
        </li>
      </ul>
    </div>
    <div class="postage">
      <p>
        邮费:
        <span class="zf-span3">￥20.00</span>
      </p>
      <p>
        总价(不含运费):
        <span>￥200.00</span>
      </p>
    </div>
    <div class="payment">
      <section>
        <input type="radio" name="ing" id />
        <img src="http://localhost:8080/img/saweChatimg.jpg" alt class="zf-img" />
        <span class="span">微信</span>
      </section>
      <section>
        <input type="radio" name="ing" id />
        <img src="http://localhost:8080/img/saalipayimg.jpg" alt class="zf-img" />
        <span>支付宝</span>
      </section>
    </div>
    <div class="confirm">
      <van-dialog @confirm="go" v-model="show" title="标题" show-cancel-button>
          您确定要支付么？
      </van-dialog>
      <button @click="affirm">确认支付</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      show:false,
      list: [
        { name: "姓名", name1: "张三" },
        { name: "性别", name1: "男" },
        { name: "年龄", name1: "21岁" },
        { name: "既往病史和过敏", name1: "无" }
      ],
      list1: [
        { name1: "药煎类型", name2: "中药煎片" },
        { name1: "煎煎类型", name2: "代煎" },
        { name1: "选择付数", name2: "1" },
        { name1: "开放医生", name2: "张厚杰" },
        { name1: "医生手机", name2: "138***5376" },
        { name1: "备    注", name2: "无" },
        { name1: "取药方式", name2: "快递" },
        { name1: "收货地址", name2: "中国北京*****天安门东，左拐一百米" }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    affirm(){
       this.show = true
      
    },
    go(){
       this.$router.push('/gr_shipping')
    }
  }
};
</script>

<style lang="scss" scoped>
.van-dialog{
  text-align: center;
}
.confirm{
  width: 100%;
  button {
  background: #83634a;
  color: wheat;
  position: absolute;
  border: none;
  width: 1rem;
  height: 0.4rem;
  right: 0.1rem;
  margin-bottom: 0.3rem;
}
}

.payment {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0.2rem 0rem;
  img {
    width: 50%;
    padding: 0rem 0rem;
  }
}
.postage {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #f7f7f7;
  justify-content: space-between;
  p {
    padding: 0.2rem 0rem;

    span {
      color: red;
    }
  }
}
.tisane {
  width: 100%;
  border-bottom: 10px solid #f0f0f0;
  ul {
    width: 100%;
    li {
      padding-top: 0.1rem;
      padding-left: 0.2rem;
    }
    padding-bottom: 0.2rem;
  }
}
.uploading {
  width: 100%;
  border-bottom: 10px solid #f0f0f0;
  p {
    padding: 0.1rem 0rem;
  }
  ul {
    width: 100%;
    display: flex;
    li {
      width: 33.3%;
    }
  }
}
.see_a_doctor {
  width: 100%;
  padding-bottom: 0.2rem;
  border-bottom: 10px solid #f0f0f0;
  ul {
    padding-left: 0.2rem;
    li {
      padding-top: 0.1rem;
    }
  }
}
.header {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  border-bottom: 1px solid #f7f7f7;
  padding-left: 0.2rem;
  span:nth-child(2) {
    position: absolute;
    right: 0.2rem;
  }
}
</style>
