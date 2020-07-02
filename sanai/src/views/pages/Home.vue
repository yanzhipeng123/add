<template>
  <div>
    <div class="inp">
      <input type="text" placeholder="三爱商城" />
    </div>
    <div class="img">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="http://localhost:8080/img/banner01.jpg" alt class="im" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://localhost:8080/img/banner01.jpg" alt class="im" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="lb">
        <p class="p">
            <span class="s2"><img src="http://localhost:8080/img/noticegg.jpg" alt="" class="ig"></span>
            <span class="s">每日养生:</span>
            <span class="s1">中医讲究"春夏养阳"，在调补阳气的中药里</span>
        </p>
    </div>
    <div class="hot">
        <div class="top">
            <p class="p">
                <img src="http://localhost:8080/img/ind.png" alt="" class="img1">
                <span>热门分类</span>
            </p>
            <p>
                <span>查看更多</span>
                <img src="http://localhost:8080/img/in.png" alt="" class="img1">
            </p>
        </div>
        <div class="min">
            <ul class="ul">
                <li><img src="http://localhost:8080/img/popularson01.jpg" alt="" class="im1"></li>
                <li><img src="http://localhost:8080/img/popularson02.jpg" alt="" class="im1"></li>
                <li><img src="http://localhost:8080/img/popularson03.jpg" alt="" class="im1"></li>
                 <li><img src="http://localhost:8080/img/popularson04.jpg" alt="" class="im1"></li>
            </ul>
        </div>
        <div class="q">
            <div class="top">
            <p class="p">
                <img src="http://localhost:8080/img/ye.png" alt="" class="img1">
                <span>季节养生</span>
            </p>
            <p>
                <span>查看更多</span>
                <img src="http://localhost:8080/img/in.png" alt="" class="img1">
            </p>
            </div>
            <div class="m">
                <dl v-for="(item,index) in list" :key="index">
                    <dt>
                        <img :src="item.img" alt="">
                    </dt>
                    <dd class="dd">{{item.name}}</dd>
                    <dd>
                        <span class="spa">￥{{item.price}}</span>
                        <img :src="item.imga" alt="" class="im2">
                    </dd>
                </dl>
            </div>
        </div>
        <div class="q">
            <div class="top">
            <p class="p">
                <img src="http://localhost:8080/img/cha.png" alt="" class="img1">
                <span>药食同源</span>
            </p>
            <p>
                <span>查看更多</span>
                <img src="http://localhost:8080/img/in.png" alt="" class="img1">
            </p>
            </div>
            <div class="m">
                <dl v-for="(item,index) in list" :key="index">
                    <dt>
                        <img :src="item.img" alt="">
                    </dt>
                    <dd class="dd">{{item.name}}</dd>
                    <dd>
                        <span class="spa">￥{{item.price}}</span>
                        <img :src="item.imga" alt="" class="im2">
                    </dd>
                </dl>
            </div>
        </div>
        <div class="q">
            <div class="top">
            <p class="p">
                <img src="http://localhost:8080/img/shu.png" alt="" class="img1">
                <span>中医文化</span>
            </p>
            <p>
                <span>查看更多</span>
                <img src="http://localhost:8080/img/in.png" alt="" class="img1">
            </p>
            </div>
            <div class="m">
                <dl v-for="(item,index) in list" :key="index">
                    <dt>
                        <img :src="item.img" alt="">
                    </dt>
                    <dd class="dd">{{item.name}}</dd>
                    <dd>
                        <span class="spa">￥{{item.price}}</span>
                        <img :src="item.imga" alt="" class="im2">
                    </dd>
                </dl>
            </div>
        </div>
        <div class="q">
            <div class="top">
            <p class="p">
                <img src="http://localhost:8080/img/mao.png" alt="" class="img1">
                <span>课程讲座</span>
            </p>
            <p>
                <span>查看更多</span>
                <img src="http://localhost:8080/img/in.png" alt="" class="img1">
            </p>
            </div>
            <div class="m">
                <dl v-for="(item,index) in list" :key="index">
                    <dt>
                        <img :src="item.img" alt="">
                    </dt>
                    <dd class="dd">{{item.name}}</dd>
                    <dd>
                        <span class="spa">￥{{item.price}}</span>
                        <img :src="item.imga" alt="" class="im2">
                    </dd>
                </dl>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        list:[
            {
                name:'三七粉云南文山田七粉约130g三七粉云南文山田七粉约三七粉云南文山田七粉约三七粉云南文山田七粉约三七粉云南文山田七粉约三七粉云南文山田七粉约',
                price:369.00,
                img:'http://localhost:8080/img/goodsimg02.jpg',
                imga:'http://localhost:8080/img/joinimg.jpg'
            },
            {
                name:'优选红枸杞 久放不干燥不结块 约200g',
                price:369.00,
                img:'http://localhost:8080/img/goodsimg03.jpg',
                imga:'http://localhost:8080/img/joinimg.jpg'
            },
            {
                name:'生晒参白参片人参中片切片约90g',
                price:369.00,
                img:'http://localhost:8080/img/goodsimg04.jpg',
                imga:'http://localhost:8080/img/joinimg.jpg'
            },
            {
                name:'决明子 品质源自传承 古法炒制 约60g',
                price:369.00,
                img:'http://localhost:8080/img/goodsimg05.jpg',
                imga:'http://localhost:8080/img/joinimg.jpg'
            }
        ]
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
input {
  display: block;
  padding-left: 0.9rem;
  width: 60%;
  height: 0.3rem;
  margin: 0.2rem auto;
  background: #f8f8f8;
  border: none;
  border-radius: 5px;
  font-size: 0.12rem;
}
.spa{
    color: red;
    margin-left: 0.1rem;
    margin-right: 1.3rem;
}
.dd{
    margin-left: 0.1rem;
}
.m{
    display: flex;
    flex-wrap: wrap;
}
.im2{
    width: 10%;
}
dl{
    width: 50%;
}
/* .m>dl{
    text-align: center;
} */
.m>dl>dt>img{
    width: 95% ;
}
.m>dl>dt{
    text-align: center;
    margin-left: 0.1rem;
}
.m>dl>dd{
    /* text-align: center; */
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
font-size: .12rem;
}
.ul{
    display: flex;
    flex-wrap:wrap;
}
.q{
    margin-top: .1rem ;
}
.ul>li{
    width: 50%;
}
.im1{
    width: 100%;
}
.p{
    margin-left: 0.1rem;
}
.top{
    display: flex;
    justify-content: space-between;
}
.hot{
    margin-top: 0.2rem;
}
.img{
    width: 100%;
}
.img1{
    width: 20%;
    margin-right: 0.1rem;
}
.s2{
    margin-left: 0.2rem;
}
.im{
  width: 100%;
}
.ig{
    width: 60%;
}
.s{
    color: #8d6546;
    margin-right: 0.1rem;
}
.s1{
    font-size: .12rem;
}
.lb{
    margin-top: 0.2rem;
}
.p{
    display: flex;
}
</style>
