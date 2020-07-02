<template>
  <div class="tabbar">
      <van-tabbar @change="onChange" v-model="num">
        <van-tabbar-item icon="home-o">
          <span>首页</span>
        </van-tabbar-item>
        <van-tabbar-item icon="search">
          <span>搜索</span>
        </van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o"  >
          <span>购物车</span>
        </van-tabbar-item>
        <van-tabbar-item icon="friends-o" >
          <span>个人</span>
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return{
        num:0
    }
  },
  mounted(){
    let str = window.location.pathname;
    switch(str){
          case '/index':
            this.num=0;
            break;
            case '/search':
            this.num=1;
            break;
            case '/cart':
            this.num=2;
            break;
            case '/my':
            this.num=3;
            break;
      }
      console.log(window.location)
  },
  methods:{
    onChange(index){
      console.log(index)
      
      switch(index){
          case 0:
            this.$router.push('/index');
            break;
            case 1:
            this.$router.push('/search');
            break;
            case 2:
            this.$router.push('/cart');
            break;
            case 3:
            this.$router.push('/my');
            break;
      }
    }
  }
}
</script>

<style>

</style>