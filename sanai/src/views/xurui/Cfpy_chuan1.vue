<template>
  <div>
    <div class="nav">
      <section>
        <p>订单编号：180424AD0561589</p>
        <p>待发货</p>
      </section>
      <section>
        <span>张三</span>
        <span>男</span>
        <span>21岁</span>
        <span>中药饮片</span>
        <span>代煎</span>
        <span>自取</span>
        <span>×1</span>
      </section>
    <section>
        <img src="http://localhost:8080/img/goodsimg03.jpg" alt="">
    </section>
    <section>
        <p>价格：<span>￥待确定</span></p>
        <p>详情</p>
    </section>
    </div>
    <div class="nav">
      <section>
        <p>订单编号：180424AD0561589</p>
        <p>待发货</p>
      </section>
      <section>
        <span>张三</span>
        <span>男</span>
        <span>21岁</span>
        <span>中药饮片</span>
        <span>代煎</span>
        <span>自取</span>
        <span>×1</span>
      </section>
    <section>
         <img src="http://localhost:8080/img/ysimg02.jpg" alt="" class="sc-img">
         <img src="http://localhost:8080/img/ysimg02.jpg" alt="" class="sc-img">
         <img src="http://localhost:8080/img/ysimg02.jpg" alt="" class="sc-img">
    </section>
    <section>
        <p>价格：<span>￥待确定</span></p>
        <p>详情<button @click="pay">立即支付</button></p>
    </section>
    </div>
    <div class="nav">
      <section>
        <p>订单编号：180424AD0561589</p>
        <p>待发货</p>
      </section>
      <section>
        <span>张三</span>
        <span>男</span>
        <span>21岁</span>
        <span>中药饮片</span>
        <span>代煎</span>
        <span>自取</span>
        <span>×1</span>
      </section>
    <section>
         <img src="http://localhost:8080/img/ysimg02.jpg" alt="" class="sc-img">
         <img src="http://localhost:8080/img/ysimg02.jpg" alt="" class="sc-img">
         <img src="http://localhost:8080/img/ysimg02.jpg" alt="" class="sc-img">
    </section>
    <section>
        <p>价格：<span>￥待确定</span></p>
        <p>详情 <button>查看物流</button></p>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    pay(){
      this.$router.push('/cfpy_chuan')
    }
  }
};
</script>

<style lang="scss" scoped>
button{
  background: #83634A;
  color: wheat;
  position: absolute;
  right: .1rem;
  margin-bottom: .3rem;
}
.nav{
    width: 100%;
    border-bottom: 5px solid gray;
    section{
        display: flex;
        width: 95%;
        margin: 0 auto;
        border :1px solid #f7f7f7;
        
        line-height: .6rem;
        justify-content: space-between;
        img{
            width: 30%;
            display: block;
            margin:auto;
            padding-bottom: .1rem;
        }
        
        p:nth-of-type(2){
            padding-right: .1rem;
        }
    }
    section:nth-child(4){
      span{
            color:red;
        }
    }
}
</style>
 