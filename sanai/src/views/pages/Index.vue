<template>
  <div class="index">
    <van-search placeholder="请输入搜索关键词" @click="gosearch" />
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
      <div class="p">
        <span class="s2">
          <img src="http://localhost:8080/img/noticegg.jpg" alt class="ig" />
        </span>
        <span class="s">每日养生:</span>
        <div>
          <van-notice-bar :scrollable="false">
            <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
              <van-swipe-item>中医讲究"春夏养阳药里"</van-swipe-item>
              <van-swipe-item>中医讲究补阳气的中药里</van-swipe-item>
              <van-swipe-item>中医在调补阳气的中药里</van-swipe-item>
            </van-swipe>
          </van-notice-bar>
        </div>
      </div>
    </div>
    <div class="hot">
      <div class="top">
        <p class="p">
          <van-icon name="apps-o" />
          <span @click="yzp_xq">热门分类</span>
        </p>
        <p>
          <span class="span">查看更多</span>
          <van-icon name="share" />
        </p>
      </div>
      <div class="min">
        <ul class="ul">
          <li>
            <img src="http://localhost:8080/img/popularson01.jpg" alt class="im1" />
          </li>
          <li>
            <img src="http://localhost:8080/img/popularson02.jpg" alt class="im1" />
          </li>
          <li>
            <img src="http://localhost:8080/img/popularson03.jpg" alt class="im1" />
          </li>
          <li>
            <img src="http://localhost:8080/img/popularson04.jpg" alt class="im1" />
          </li>
        </ul>
      </div>
      <div class="q">
        <div class="top">
          <p class="p">
            <van-icon name="fire-o" />
            <span>季节养生</span>
          </p>
          <p>
            <span class="span">查看更多</span>
            <van-icon name="share" />
          </p>
        </div>
        <div>
          <img src="http://localhost:8080/img/listban01.jpg" alt class="ia" />
        </div>
        <div class="m">
          <dl v-for="(item,index) in arr" :key="index">
            <dt>
              <img :src="item.img" alt />
            </dt>
            <dd class="dd">{{item.name}}</dd>
            <dd>
              <span class="spa">￥{{item.price}}</span>
              <van-icon name="add-o" class="va" @click="btn(item)" />
            </dd>
          </dl>
          <van-popup v-model="show" position="bottom" :style="{ height: '50%', background:'#d4d4d4d' }">
            <div v-for="(item,index) in ar" :key="index" class="div">
              <p class="pr">
                <img :src="item.img" alt class="ims" />
                <span>￥{{item.num*item.price}}</span>
              </p>
              <p>类型</p>
              <ul>
                <li v-for="(item,index) in item.type" :key="index" :class="Index==index?'color':''" @click="b(index)">{{item}}</li>
              </ul>
              <p>属性</p>
              {{item.type1}}
              <p>
                数量
                <button @click="min(item)">-</button>
                <span>{{item.num}}</span>
                <button @click="add(item)">+</button>
              </p>
              <ul>
                <li>
                  <van-goods-action>
                    <van-goods-action-button type="warning" text="加入购物车" @click="fn(item)" />
                    <van-goods-action-button type="danger" text="立即购买"  />
                  </van-goods-action>
                </li>
              </ul>
            </div>
          </van-popup>
        </div>
      </div>
      <div class="q">
        <div class="top">
          <p class="p">
            <van-icon name="shop-o" />
            <span>药食同源</span>
          </p>
          <p>
            <span class="span">查看更多</span>
            <van-icon name="share" />
          </p>
        </div>
        <div>
          <img src="http://localhost:8080/img/listban02.jpg" alt class="ia" />
        </div>
        <div class="m">
          <dl v-for="(item,index) in arr" :key="index">
            <dt>
              <img :src="item.img" alt />
            </dt>
            <dd class="dd">{{item.name}}</dd>
            <dd>
              <span class="spa">￥{{item.price}}</span>
              <van-icon name="add-o" class="va" @click="btn(item)" />
            </dd>
          </dl>
        </div>
        <!-- <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
            <div v-for="(item,index) in ar" :key="index" class="div">
              <p class="pr">
                <img :src="item.img" alt class="ims" />
                <span>￥{{item.num*item.price}}</span>
              </p>
              <p>类型</p>
              <ul>
                <li v-for="(item,index) in item.type" :key="index" :class="Index==index?'color':''" @click="b(index)">{{item}}</li>
              </ul>
              <p>属性</p>
              {{item.type1}}
              <p>
                数量
                <button @click="min(item)">-</button>
                <span>{{item.num}}</span>
                <button @click="add(item)">+</button>
              </p>
              <ul>
                <li>
                  <van-goods-action>
                    <van-goods-action-button type="warning" text="加入购物车" @click="fn(item)" />
                    <van-goods-action-button type="danger" text="立即购买" />
                  </van-goods-action>
                </li>
              </ul>
            </div>
          </van-popup> -->
      </div>
      <div class="q">
        <div class="top">
          <p class="p">
            <van-icon name="send-gift-o" />
            <span>中医文化</span>
          </p>
          <p>
            <span class="span">查看更多</span>
            <van-icon name="share" />
          </p>
        </div>
        <div>
          <img src="http://localhost:8080/img/listban03.jpg" alt class="ia" />
        </div>
        <div class="m">
          <dl v-for="(item,index) in arr" :key="index">
            <dt>
              <img :src="item.img" alt />
            </dt>
            <dd class="dd">{{item.name}}</dd>
            <dd>
              <span class="spa">￥{{item.price}}</span>
              <van-icon name="add-o" class="va" @click="btn(item)" />
            </dd>
          </dl>
        </div>
        <!-- <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
            <div v-for="(item,index) in ar" :key="index" class="div">
              <p class="pr">
                <img :src="item.img" alt class="ims" />
                <span>￥{{item.num*item.price}}</span>
              </p>
              <p>类型</p>
              <ul>
                <li v-for="(item,index) in item.type" :key="index" :class="Index==index?'color':''" @click="b(index)">{{item}}</li>
              </ul>
              <p>属性</p>
              {{item.type1}}
              <p>
                数量
                <button @click="min(item)">-</button>
                <span>{{item.num}}</span>
                <button @click="add(item)">+</button>
              </p>
              <ul>
                <li>
                  <van-goods-action>
                    <van-goods-action-button type="warning" text="加入购物车" @click="fn(item)" />
                    <van-goods-action-button type="danger" text="立即购买" />
                  </van-goods-action>
                </li>
              </ul>
            </div>
          </van-popup> -->
      </div>
      <div class="q">
        <div class="top">
          <p class="p">
            <van-icon name="friends-o" />
            <span>课程讲座</span>
          </p>
          <p>
            <span class="span">查看更多</span>
            <van-icon name="share" />
          </p>
        </div>
        <div>
          <img src="http://localhost:8080/img/listban04.jpg" alt class="ia" />
        </div>
        <div class="m">
          <dl v-for="(item,index) in arr" :key="index">
            <dt>
              <img :src="item.img" alt />
            </dt>
            <dd class="dd">{{item.name}}</dd>
            <dd>
              <span class="spa">￥{{item.price}}</span>
              <van-icon name="add-o" class="va" @click="btn(item)" />
            </dd>
          </dl>
        </div>
        <!-- <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
            <div v-for="(item,index) in ar" :key="index" class="div">
              <p class="pr">
                <img :src="item.img" alt class="ims" />
                <span>￥{{item.num*item.price}}</span>
              </p>
              <p>类型</p>
              <ul>
                <li v-for="(item,index) in item.type" :key="index" :class="Index==index?'color':''" @click="b(index)">{{item}}</li>
              </ul>
              <p>属性</p>
              {{item.type1}}
              <p>
                数量
                <button @click="min(item)">-</button>
                <span>{{item.num}}</span>
                <button @click="add(item)">+</button>
              </p>
              <ul>
                <li>
                  <van-goods-action>
                    <van-goods-action-button type="warning" text="加入购物车" @click="fn(item)" />
                    <van-goods-action-button type="danger" text="立即购买" />
                  </van-goods-action>
                </li>
              </ul>
            </div>
          </van-popup> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      Index:-1
    };
  },
  created() {},
  methods: {
    gosearch() {
      this.$router.push("/search");
    },
    btn(item) {
      this.show = true;
      this.$store.commit("show", item);
    },
    b(index){
        this.Index=index
    },
    min(item){
        this.$store.commit('min',item)
    },
    add(item){
        this.$store.commit('add',item)
    },
    fn(item){
        
        this.$router.push(
            '/cart'
        )
    },
    yzp_xq(){
      this.$router.push('/details')
    },
    // yz(){
    //   this.$router.push('/gr_ding')
    //   alert(111)
    // }
  },
  computed: {
    arr() {
      return this.$store.state.list;
    },
    ar() {
      return this.$store.state.newList;
    }
  }
};
</script>

<style scoped lang="scss">
i {
  margin-right: 8px;
  margin-top: 2px;
}
/* .pr{
    position: relative;
} */
.ims {
  width: 50%;
}
.div{
    width: 100%;
    ul{
        display: flex;
        li{
            text-align: center;
            width: 33%;
            border: 0.01rem solid #cccccc;
            border-radius: 0.05rem;
        }
    }
}
.color{
    color: white;
    background: brown;
}
.van-notice-bar {
  padding: 0 5px;
  width: 200px;
  font-size: 0.12rem;
  background-color: white;
  color: black;
}
.notice-swipe {
  width: 200px;
  height: 40px;
  line-height: 40px;
}
.ia {
  width: 95%;
  margin-bottom: 0.1rem;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
}
.va {
  font-size: 18px;
  color: #8d6546;
}
.span {
  font-size: 0.12rem;
  margin-right: 0.1rem;
}
.van {
  font-size: 0.12rem;
}
.min {
  margin-top: 0.1rem;
}
.spa {
  color: red;
  margin-left: 0.1rem;
  margin-right: 1rem;
}
.min {
  width: 100%;
}
.dd {
  margin-left: 0.1rem;
}
.m {
  display: flex;
  flex-wrap: wrap;
}
.im2 {
  width: 10%;
}
dl {
  width: 50%;
}
/* .m>dl{
    text-align: center;
} */
.m > dl > dt > img {
  width: 95%;
  height: 1rem;
}
.m > dl > dt {
  text-align: center;
  margin-left: 0.1rem;
}
.m > dl > dd {
  /* text-align: center; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.12rem;
}
.ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.q {
  margin-top: 0.1rem;
}
.ul > li {
  width: 48%;
  text-align: center;
}
.im1 {
  width: 100%;
}
.p {
  margin-left: 0.1rem;
}
.top {
  display: flex;
  justify-content: space-between;
}
.hot {
  margin-top: 0.2rem;
}
.img {
  width: 100%;
}
.img1 {
  width: 20%;
  margin-right: 0.1rem;
}
.s2 {
  margin-left: 0.2rem;
  margin-top: 0.13rem;
}

.van-swipe-item {
  font-size: 0.14rem;
}
.im {
  width: 100%;
}
.ig {
  width: 60%;
}
.s {
  color: #8d6546;
  margin-top: 0.1rem;
}
.s1 {
  font-size: 0.12rem;
}
.lb {
  margin-top: 0.2rem;
}
.p {
  display: flex;
}
</style>