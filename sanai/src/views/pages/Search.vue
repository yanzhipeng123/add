<template>
  <div class="yzp_ss">
    <van-search v-model="value" placeholder="请输入搜索关键词" @input="addValue()" />
    <div class="yzp_serach">
      <ul v-show="done">
        <li v-for="(item,key) in arr" :key="key" @click="yzpFn(item.name)">{{item.name}}</li>
      </ul>
    </div>
    <div class="local">
      <h3>历史记录</h3>
      <ul>
        <li v-for="(item,key) in bendi" :key="key">{{item}}</li>
      </ul>
    </div>
    <div class="clear">
      <h1 @click="clear">清除历史记录</h1>
    </div>
    <div class="hot">
      <h1>热销产品</h1>
      <ul>
        <li v-for="(item,i) in newSearch" :key="i">
          <dl>
            <dt>
              <img :src="item.img" alt />
            </dt>
            <dd>{{item.name}}</dd>
            <dd>
              <span style="color:red">￥{{item.price}}</span>
              <van-icon name="cart-circle-o" @click="btn(item)" />
            </dd>
          </dl>
        </li>
      </ul>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
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
                    <van-goods-action-button type="warning" text="加入购物车" />
                    <van-goods-action-button type="danger" text="立即购买" />
                  </van-goods-action>
                </li>
              </ul>
            </div>
          </van-popup>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      value: "",
      arr: [],
      done: false,
      bendi: [],
      list: [],
      show:false,
      Index:-1
    };
  },
  methods: {
    addValue(v) {
      if (this.value == "") {
        this.done = false;
      } else {
        this.done = true;
        axios.get("http://localhost:8080/api/data.json").then(res => {
          this.arr = res.data.news;
          this.arr = this.arr.filter(item => {
            if (item.name.includes(this.value)) {
              return item;
            }
          });
        });
      }
    },
    yzpFn(name) {
      this.done = false;
      if (this.bendi.length < 7) {
        this.bendi.unshift(name);
      } else {
        this.bendi.splice(0, 1);
        this.bendi.unshift(name);
      }
      localStorage.setItem("yzp", JSON.stringify(this.bendi));
    },
    clear() {
      localStorage.removeItem("yzp");
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
  },
  computed: {
    newSearch() {
      return this.$store.state.list;
    },
    ar() {
      return this.$store.state.newList;
    }
  },
  mounted() {
    var local = localStorage.getItem("yzp");
    if (local) {
      this.bendi = JSON.parse(local);
    }
  },
  created() {
    
  }
};
</script>

<style lang="scss" scoped>
.local {
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 25%;
      text-align: center;
      font-size: 0.14rem;
    }
  }
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
.ims {
  width: 50%;
}
.color{
    color: white;
    background: brown;
}
.clear {
  width: 100%;
  h1 {
    padding: 10% 30%;
  }
}
.hot {
  width: 100%;
  h1 {
    padding: 10% 35%;
  }
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      width: 40%;
      text-align: center;
      dl {
        dt {
          img {
            width: 1.2rem;
            height: 1.2rem;
          }
        }
        dd:nth-child(1){
            text-align: center;
        }
      }
    }
  }
}
</style>
