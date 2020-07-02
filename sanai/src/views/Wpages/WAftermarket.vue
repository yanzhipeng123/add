<template>
  <div class="hello">
    <div class="header">
      订单编号：180424AD0561589
    </div>
    <div class="content">
      <div class="item">
        <div class="item_img">
          <img src="http://localhost:8080/img/goodsimg01.jpg" />
        </div>
        <div class="content">
          <p class="title">
            罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4
          </p>
          <p class="describe">
            重量：250克
          </p>
          <p class="priceandnum">
            <span class="price">￥168</span>
            <span class="num">1</span>
          </p>
        </div>
      </div>
      <div class="item">
        <div class="item_img">
          <img src="http://localhost:8080/img/goodsimg01.jpg" />
        </div>
        <div class="content">
          <p class="title">
            罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4
          </p>
          <p class="describe">
            重量：250克
          </p>
          <p class="priceandnum">
            <span class="price">￥168</span>
            <span class="num">1</span>
          </p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="message">
        退款原因：<input type="text" v-model="value" />
      </div>
      <div class="footer_btn">
        <div @click="ondel">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      value:""
    }
  },
  methods:{
    ondel(){
      alert("已退款，退款将在十五个工作日内返还")
      this.$router.push("/cart")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title
{
  font-size: 14px;
}
.header
{
  height:64px;
  font-size: 13px;
  display: flex;
  align-items: center;
  text-indent: 1em;
}
.content
{
  padding:0 10px;
}
.item
{
  width:100%;
  height:100px;
  display: flex;
  margin-bottom:10px;
  margin-left:10px;
}
.item_img img
{
  height:90%;
}
.item_img
{
  width:20%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.priceandnum
{
  width:100%;
  display: flex;
  justify-content: space-around;
}
.price
{
  color:orangered;
}
.footer_btn div
{
  height:38px;
  width:90%;
  border-radius: 20px;
  background: rgb(126, 109, 109);
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer_btn
{
  width:100%;
  height:60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer
{
  margin-top:100px;
}
.message input
{
  border:1px solid gray;
}
.message
{
  font-size: 13px;
  color:gray;
  text-indent: 1em;
}
</style>
