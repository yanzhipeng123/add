<template>
  <div class="crat">
    <div class="header">
      <span class="title" v-on:click="onChange" v-if="edit">编辑</span>
      <span class="title" v-on:click="onChange" v-else>完成</span>
    </div>
    <div>
      <div class="item" v-for="(item,index) in goods" :key="index">
        <div>
          <input type="checkbox" @click="itemClick(item.id)" :checked="item.checked" />
        </div>
        <div>
            <img class="item_img" :src="item.img" alt="">
        </div>
        <div>
            <p>
                {{item.title}}
            </p>
            <p>
                重量:{{item.weight}}克
            </p>
            <div class="price_style">
                <p class="r_color">￥{{item.price}}</p>
                <p class="com_count">
                    <span :class="`${item.count==1?'none':'block'}`" @click="min(item.id)">-</span>
                    <span>{{item.count}}</span>
                    <span @click="add(item.id)">+</span>
                </p>
            </div>
        </div>
      </div>
      <div class="footer_container">

      </div>
    </div>
    <div class="footer">
        <div>
            <input type="checkbox" @click="onClick" :checked="AllChecked" />
            全选
        </div>
        <div v-show="edit" class="r_color">
            合计{{totalprice}}元
        </div>
        <div>
            <p class="clear" @click="gocccc">结账</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      edit: false,
      AllChecked:false,
      totalprice:0,
      goods: [
        {
          id: 1,
          title: "养禄堂灵芝孢子粉吉林长白山头道椴木灵芝粉林芝袍子粉散装",
          weight: 250,
          price: 168,
          count: 1,
          checked: false,
          img: 'http://localhost:8080/img/goodsimg02.jpg'
        },
        {
          id: 2,
          title: "养禄堂灵芝孢子粉吉林长白山头道椴木灵芝粉林芝袍子粉散装",
          weight: 250,
          price: 168,
          count: 1,
          checked: false,
         img: 'http://localhost:8080/img/goodsimg03.jpg'
        },
        {
          id: 3,
          title: "养禄堂灵芝孢子粉吉林长白山头道椴木灵芝粉林芝袍子粉散装",
          weight: 250,
          price: 168,
          count: 1,
          checked: false,
          img: 'http://localhost:8080/img/goodsimg04.jpg'
        },
        {
          id: 4,
          title: "养禄堂灵芝孢子粉吉林长白山头道椴木灵芝粉林芝袍子粉散装",
          weight: 250,
          price: 168,
          count: 1,
          checked: false,
          img: 'http://localhost:8080/img/goodsimg05.jpg'
        },
        {
          id: 5,
          title: "养禄堂灵芝孢子粉吉林长白山头道椴木灵芝粉林芝袍子粉散装",
          weight: 250,
          price: 168,
          count: 1,
          checked: false,
          img: 'http://localhost:8080/img/goodsimg06.jpg'
        }
      ]
    };
  },
    methods:{
      gocccc(){
            this.$router.push('/gr_ding')
       },
       onChange() {
      this.edit = !this.edit;
    //   window.console.log(this.edit)
      if(!this.edit){
          this.goods.map((item)=>{
                item.checked=false;
                item.count=1;
        })
            this.totalprice=0;
      }
    },
    onClick(){
        this.AllChecked=!this.AllChecked;
        if(this.AllChecked){
            this.goods.map((item)=>{
                item.checked=true
            })
            let num=0;
            this.goods.map((item)=>{
                if(item.checked){
                    num+=item.count*item.price
                }
            })
            this.totalprice=num;
        }else{
            this.goods.map((item)=>{
                item.checked=false
            })
            this.totalprice=0;
        }
    },
    itemClick(id){
        this.goods.map((item)=>{
            if(item.id==id){
                item.checked=!item.checked
            }
        })

        let num=0;
            this.goods.map((item)=>{
                if(item.checked){
                    num+=item.count*item.price
                }
            })
        this.totalprice=num;
    },
    add(id){
        this.goods.map((item)=>{
            if(item.id==id){
                item.count++;
            }
        })

        let num=0;
            this.goods.map((item)=>{
                if(item.checked){
                    num+=item.count*item.price
                }
            })
        this.totalprice=num;
    },
    min(id){
        this.goods.map((item)=>{
            if(item.id==id){
                item.count--;
            }
        })

        let num=0;
            this.goods.map((item)=>{
                if(item.checked){
                    num+=item.count*item.price
                }
            })
        this.totalprice=num;
    }
  } 
      }



</script>

<style scoped>
.clear
{
    width:100px;
    height:30px;
    border-radius:5px ;
    background: rgb(117,85,95);
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer_container
{
    height:100px;
}
.com_count
{
    width:10vw;
    height:3vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.none
{
    display: none;
}
.block
{
    display: block;
}
.price_style
{
    display: flex;
    justify-content: space-around;
}
.footer
{
    height:64px;
    width:100vw;
    position: fixed;
    bottom:0;
    left:0;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.item_img
{
    height:100px;
}
.item
{
    width:98%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:10px;
    box-shadow: 0 0 3px gray;
    margin:10px 2px;
}
.r_color
{
    color:orangered;
}
.header {
  height: 64px;
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  align-items: center;
}
.title {
  color: rgb(54, 131, 202);
}
</style>