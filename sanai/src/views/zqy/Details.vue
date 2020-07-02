<template>
    <div>
        <div class="img">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
            <img src="http://localhost:8080/img/goodsimg07.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="http://localhost:8080/img/goodsimg06.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="http://localhost:8080/img/goodsimg03.jpg" alt="">
        </van-swipe-item>
    </van-swipe>
        </div>  
        <p>
            人参片即食养禄堂人参切片长白山野山参生晒白参含片泡水散装泡茶人参片即食养禄堂人参切片长白山野山参生晒白参含片泡水散装泡茶人参片即食养禄堂人参切片长白山野山参生晒白参含片泡水散装泡茶人参片即食养禄堂人参切片长白山野山参生晒白参含片泡水散装泡茶
        </p>
        <p>
            <span class="s">￥369.00</span>
            <span class="s1">已售出：252件</span>
        </p>
        <p>
            <span class="s2">类型</span>
            <span class="s3">请选择规格属性分类</span>
            <span>></span>
        </p>
        <div class="box">
            <img src="http://localhost:8080/img/detailsms.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>
*{
    padding: 0;
    left: 0;
    font-size: .16rem;
}
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    /* line-height: 150px; */
    text-align: center;
    /* background-color: #39a9ed; */
  }
  img{
      width: 100%;
  }
  p{
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin-left: .1rem;
  }
  .s{
      color: red;
  }
  .s1{
      margin-left: 1rem;
      font-size: .1rem;
  }
  .s2{
      font-size: .1rem;
      margin-right: 0.1rem;
  }
  .s3{
      font-size: .1rem;
      margin-right: 1.5rem;
  }
</style>
