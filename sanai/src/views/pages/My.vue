
<template>
  <div>
    <div class="wai">
      <section></section>
      <div>
        <img src="http://localhost:8080/img/userimg.jpg" alt />
        <h6>{{user}}</h6>
        <span>{{Phone}}</span>
      </div>
    </div>
    <div class="order">
      <div class="my">
        <h6>我的订单</h6>
        <p class="p">查看全部订单></p>
      </div>
      <div class="my_order">
        <section>
          <img src="http://localhost:8080/img/seetend_01.jpg" />
          <p>待付款</p>
        </section>
        <section>
          <img src="http://localhost:8080/img/seetend_02.jpg" />
          <p>待发货</p>
        </section>
        <section>
          <img src="http://localhost:8080/img/seetend_03.jpg" />
          <p>待收货</p>
        </section>
        <section>
          <img src="http://localhost:8080/img/seetend_04.jpg" />
          <p>售后</p>
        </section>
      </div>
    </div>
    <nav>
      <img src="http://localhost:8080/img/yangs.jpg" alt />
    </nav>
    <main>
      <section>
        <span @click="save">我的预约</span>
        <img src="http://localhost:8080/img/JT.png" />
      </section>
      <section>
        <span @click="saba">传方配药</span>
        <img src="http://localhost:8080/img/JT.png" />
      </section>
      <section>
        <span>收货地址</span>
        <img src="http://localhost:8080/img/JT.png" />
      </section>
    </main>
    <div class="btn">
      <button @click="onback">退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      Phone: ""
    };
  },
  created() {},
  mounted() {
    let obj = JSON.parse(window.localStorage.getItem("login")) || {};
    if (obj.phone && obj.user) {
      this.user = obj.user;
      this.Phone = obj.phone;
    }
  },
  methods: {
    onback() {
      window.localStorage.removeItem("login");
      this.user = "";
      this.Phone = "";
      window.alert("已退出登录");
      this.$router.push("/");
    },
    save() {
      this.$router.push("/ysjj");
    },
    saba() {
      this.$router.push("/ysjj_five");
    }
  }
};
</script>

<style lang="scss" scoped>
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

main {
  width: 90%;
  margin: 0 auto;
  border: 1px solid #f7f7f7;
  border-radius: 0.1rem;
  section {
    width: 100%;
    display: flex;
    height: 0.6rem;
    border-bottom: 1px solid #f7f7f7;
    line-height: 0.6rem;
    justify-content: space-between;
    img {
      width: 5%;
      height: 50%;
      padding-right: 0.2rem;
      padding-top: 0.2rem;
    }
    span {
      font-size: 0.16rem;
      padding-left: 0.2rem;
    }
  }
}
nav {
  width: 90%;
  margin: 0 auto;
  border-radius: 0.1rem;
  img {
    width: 100%;
    border-radius: 0.1rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
}
.order {
  width: 90%;
  margin: 0 auto;
  border: 1px solid #f7f7f7;
  margin-top: 1.2rem;
  border-radius: 0.1rem;
  .my {
    display: flex;
    justify-content: space-between;
    .p {
      font-size: 0.16rem;
      color: #999999;
    }
  }
  .my_order {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    width: 100%;
    display: flex;
    section {
      width: 25%;
      img {
        width: 40%;
        display: block;
        margin: 0 auto;
      }
      p {
        text-align: center;
        font-size: 0.16rem !important;
      }
    }
  }
}
.wai {
  width: 100%;
  height: 0.8rem;
  background: #8d6546;
  margin-bottom: 0.2rem;
  section {
    height: 0.3rem;
  }
  div {
    width: 90%;
    height: 1.5rem;
    border: 1px solid #f7f7f7;
    margin-bottom: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    margin: 0 auto;
    display: flex;
    img {
      width: 1rem;
      height: 1rem;
      display: block;
    }
    h6 {
      line-height: 1.5rem;
    }
    span {
      padding-left: 0.1rem;
      font-size: 0.12rem !important;
      line-height: 1.5rem;
    }
  }
}
</style>

export default {
  data() {
    return {
      user: "",
      Phone: ""
    };
  },
  mounted() {
    if (window.localStorage.user != undefined) {
      let str = JSON.parse(window.localStorage.user);
      let Phone = JSON.parse(window.localStorage.Phone);
      this.user = str;
      this.Phone = Phone;
    }
  },
  methods: {
    onRegister() {
      this.$router.push("/register");
    },
    onLogin() {
      this.$router.push("/login");
    },
  
  }
};
</script>

<style>
</style>