<template>
  <div>
    <div class="clearfix">
      <span class="font_ht">收货人</span>
      <input type="text" placeholder="请输入收货人姓名" />
    </div>
    <div class="clearfix">
      <span class="font_ht">手机号</span>
      <input type="text" placeholder="请输入收货人姓名" />
    </div>
    <div class="clearfix" @click="address">
      <span class="font_ht">所在地区</span>
      <input type="text" v-model="firl" value="firl" placeholder="请输入收货人地址" />
    </div>
    <div class="clearfix">
      <span class="font_ht">详细地址</span>
      <input type="text" placeholder="请输入收货人姓名" />
    </div>
    <div class="vingadd">
      <input class="pa hidden" type="checkbox" name="addInp" />
      <i class="pa"></i>
      <span class="fl ml25 f13">设为默认地址</span>
    </div>
    <div class="btn">
      <button>保存地址</button>
    </div>
    <van-action-sheet v-model="show" >
      <van-area :area-list="areaList" value="110101" @confirm="sure"/>
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      firl:'',
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
          130000:"河北省"
        },
        city_list: {
          110100: "北京市",
          120100: "天津市",
          120200: "县",
          130100:"石家庄市",
          130200:"唐山市",
          130300:"保定市",
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区"
          // ....
        }
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
      sure(val){
          console.log(val)
          this.firl = val[0].name + val[1].name + val[3].name
           console.log(this.firl)
      },
    address() {
      this.show = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  widows: 100%;
  padding-left: 0.3rem;
  button {
    width: 90%;
    height: 0.4rem;
    color: white;
    background: #8d6546;
    border-radius: 0.5rem;
    border: none;
  }
}

.vingadd {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  padding-left: 0.2rem;
  input {
    font-size: 0.2rem;
  }
  span {
    padding-left: 0.1rem;
  }
}
.clearfix {
  height: 0.6rem;
  width: 100%;
  line-height: 0.6rem;
  border-bottom: 1px solid #f7f7f7;
  span {
    padding-left: 0.2rem;
    padding-right: 0.3rem;
  }
  input {
    width: 60%;
    height: 0.4rem;
    border: none;
    font-size: 0.14rem;
  }
}
</style>
