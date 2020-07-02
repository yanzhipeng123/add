<template>
    <div>
        <header>
            <section>
                <p>订单编号：180424AD0561589</p>
                <p>待发货</p>
            </section>
            <section>
                <p>下单时间：2019-06-08 10:01:01</p>
            </section>
            <section>
                <p>支付时间：2019-06-08 10:02:01</p>
            </section>
            <section>
                <span>收件人：张三</span>
                <span>电话：139****8914</span>
            </section>
            <section>
                <p>收货地址：上海市  上海  静安区南山路98号祥先实业</p>
            </section>
        </header>
        <div class="nav">
            <section>
                <img src="http://localhost:8080/img/goodsimg01.jpg" alt="">
            </section>
            <section>
                <p>罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机</p>
                <p>重量：250克</p>
                <p>
                    <span>￥168</span>
                    <span>1</span>
                </p>
            </section>
        </div >
        <div class="nav">
            <section>
                <img src="http://localhost:8080/img/goodsimg01.jpg" alt="">
            </section>
            <section>
                <p>罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机罗莱罗马时光四件套AY054-4颜色花色随机</p>
                <p>重量：250克</p>
                <p>
                    <span>￥168</span>
                    <span>1</span>
                </p>
            </section>
        </div >
        <div class="kuai">
            <p>快递：<span>￥20.00</span></p>
            <p>合计：<span>￥266.00</span></p>
        </div>
        <footer>
            <section>
                <input type="radio" name="wei" id="">
                <img src="http://localhost:8080/img/saweChatimg.jpg" alt="" class="zf-img">
                <span>微信</span>
            </section>
            <section>
                <input type="radio" name="wei" id="">
                <img src="http://localhost:8080/img/saalipayimg.jpg" alt="" class="zf-img">
                <span>支付宝</span>
            </section>
        </footer>
         <van-dialog v-model="show" title="标题" show-cancel-button @confirm="gogo">
            您确定要支付么？
        </van-dialog>
        <button @click="affirm">立即支付</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show:false
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        affirm(){
           this.show = true
           
        },
        gogo(){
            this.$router.push('/cartlist')
        }
    }
};
</script>
<style lang="scss" scoped>
.van-dialog{
  text-align: center;
}
button{
  background: #83634A;
  color: wheat;
  position: absolute;
  right: .1rem;
  margin-bottom: .3rem;
}
footer{
    width: 100%;
    display: flex;
    justify-content: space-around;
    section{
        padding-bottom: 0.3rem;
    }
    img{
        padding: 0.1rem .1rem 0rem;
    }
}
.kuai{
    width: 100%;
    display:flex;
    justify-content: space-between;
    height: .6rem;
    border-bottom: 1px solid #f7f7f7;
    line-height: .6rem;
    p{
        padding: 0rem .2rem;
        span{
            color:red;
        }
    }
}
.nav{
    width: 100%;
    display: flex;
    padding-top: .1rem;
    padding-bottom: .1rem;
    border-bottom: 1px solid #f7f7f7;
    section:nth-child(1){
        width: 40%;
        img{
            width: 80%;
        }
    }
    section:nth-child(2){
        width: 50%;
        p{
            overflow: hidden;
            padding-top: 0.03rem;
            text-overflow:ellipsis;
            -webkit-line-clamp: 2;
            height: 0.4rem;
            span:nth-child(2){
                position: absolute;
                right: .1rem;
            }
            span:nth-child(1){
                color:red;
            }
        }
    }
    
}
header{
    width: 100%;
    border-bottom: 5px solid gray;
    section{
        display: flex;
        width: 95%;
        margin: 0 auto;
        border :1px solid #f7f7f7;
        height: .6rem;
        line-height: .6rem;
        justify-content: space-between;
        p:nth-of-type(2){
            color:red;
            padding-right: .1rem;
        }
    }
}
</style>
