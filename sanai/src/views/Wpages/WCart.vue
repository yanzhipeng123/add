<template>
  <div class="Wcart">
    <div class="header">
      <div class="header_container">
        <div :class="`${index==i?'focus':''}`" @click="getIndex(index)" v-for="(item,index) in list" :key="index">{{item}}</div>
      </div>
    </div>
    <div class="content">
      <div class="item">
        <div class="item_header">
          <span>订单编号：180424AD0561589</span>
          <span class="o_color" @click="overdetails">待发货</span>
        </div>
        <div class="item_cont">
          <div class="item_children">
            <div class="item_img">
              <img src="http://localhost:8080/img/goodsimg01.jpg" />
            </div>
            <div class="content">
              <p class="title">罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4</p>
              <p class="describe">重量：250克</p>
              <p class="priceandnum">
                <span class="o_color">￥168</span>
                <span class="num">1</span>
              </p>
            </div>
          </div>
          <div class="item_children">
            <div class="item_img">
              <img src="http://localhost:8080/img/goodsimg01.jpg" />
            </div>
            <div class="content">
              <p class="title">罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4</p>
              <p class="describe">重量：250克</p>
              <p class="priceandnum">
                <span class="o_color">￥168</span>
                <span class="num">1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item_header">
          <span>订单编号：180424AD0561589</span>
          <span class="o_color">待发货</span>
        </div>
        <div class="item_cont">
          <div class="item_children">
            <div class="item_img">
              <img src="http://localhost:8080/img/goodsimg01.jpg" />
            </div>
            <div class="content">
              <p class="title">罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4</p>
              <p class="describe">重量：250克</p>
              <p class="priceandnum">
                <span class="o_color">￥168</span>
                <span class="num">1</span>
              </p>
            </div>
          </div>
          <div class="item_children">
            <div class="item_img">
              <img src="http://localhost:8080/img/goodsimg01.jpg" />
            </div>
            <div class="content">
              <p class="title">罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4</p>
              <p class="describe">重量：250克</p>
              <p class="priceandnum">
                <span class="o_color">￥168</span>
                <span class="num">1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item_header">
          <span>订单编号：180424AD0561589</span>
          <span class="o_color">待发货</span>
        </div>
        <div class="item_cont">
          <div class="item_children">
            <div class="item_img">
              <img src="http://localhost:8080/img/goodsimg01.jpg" />
            </div>
            <div class="content">
              <p class="title">罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4</p>
              <p class="describe">重量：250克</p>
              <p class="priceandnum">
                <span class="o_color">￥168</span>
                <span class="num">1</span>
              </p>
            </div>
          </div>
          <div class="item_children">
            <div class="item_img">
              <img src="http://localhost:8080/img/goodsimg01.jpg" />
            </div>
            <div class="content">
              <p class="title">罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4</p>
              <p class="describe">重量：250克</p>
              <p class="priceandnum">
                <span class="o_color">￥168</span>
                <span class="num">1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item_header">
          <span>订单编号：180424AD0561589</span>
          <span class="o_color">待发货</span>
        </div>
        <div class="item_cont">
          <div class="item_children">
            <div class="item_img">
              <img src="http://localhost:8080/img/goodsimg01.jpg" />
            </div>
            <div class="content">
              <p class="title">罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4</p>
              <p class="describe">重量：250克</p>
              <p class="priceandnum">
                <span class="o_color">￥168</span>
                <span class="num">1</span>
              </p>
            </div>
          </div>
          <div class="item_children">
            <div class="item_img">
              <img src="http://localhost:8080/img/goodsimg01.jpg" />
            </div>
            <div class="content">
              <p class="title">罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4</p>
              <p class="describe">重量：250克</p>
              <p class="priceandnum">
                <span class="o_color">￥168</span>
                <span class="num">1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item_header">
          <span>订单编号：180424AD0561589</span>
          <span class="o_color">待发货</span>
        </div>
        <div class="item_cont">
          <div class="item_children">
            <div class="item_img">
              <img src="http://localhost:8080/img/goodsimg01.jpg" />
            </div>
            <div class="content">
              <p class="title">罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4</p>
              <p class="describe">重量：250克</p>
              <p class="priceandnum">
                <span class="o_color">￥168</span>
                <span class="num">1</span>
              </p>
            </div>
          </div>
          <div class="item_children">
            <div class="item_img">
              <img src="http://localhost:8080/img/goodsimg01.jpg" />
            </div>
            <div class="content">
              <p class="title">罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4</p>
              <p class="describe">重量：250克</p>
              <p class="priceandnum">
                <span class="o_color">￥168</span>
                <span class="num">1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[
        "全部",
        "待付款",
        "代发货",
        "已发货",
        "已完成",
        "售后"
      ],
      i:0
    }
  },
   watch:{
    i:function(x,j){
      if(x == 1){
        this.$router.push('/cfpy_chuan1')
      }else if(x == 3){
        this.$router.push('/application')
      }else if(x == 4){
        this.$router.push('/gooddetails')
      }else if(x == 5){
        this.$router.push('/market')
      }
    }
  },
  methods:{
    getIndex(i){
      this.i=i;
    },
    overdetails(){
      this.$router.push("/gooddetails")
    }
  }
};
</script>
<style scoped>
.item_img img {
  height: 100%;
}
.item_img {
  height: 100px;
  width: 30%;
  padding: 10px;
}
.priceandnum {
  display: flex;
  justify-content: space-around;
}
.o_color {
  color: orangered;
}
.item {
  width: 100%;
  padding: 10px;
  background: white;
  margin-bottom: 10px;
}
.item_header {
  display: flex;
  justify-content: space-between;
}
.item_children {
  display: flex;
}
.Wcart::-webkit-scrollbar {
  display: none;
}
.Wcart {
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background: #f2f2f2;
}

.header {
  width: 100vw;
  height: 64px;
  display: flex;
  justify-content: center;
  background: white;
  margin-bottom: 10px;
}
.header_container {
  width: 99%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header_container div {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.focus {
  font-weight: 600;
  color: rgb(117, 95, 95);
  border-bottom: 2px solid rgb(117, 95, 95);
}
</style>