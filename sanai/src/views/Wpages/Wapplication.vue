<template>
    <div class="details">
        <div class="item">
            <div class="header">
                订单编号：180424AD0561589
            </div>
            <div class="item_cont">
                <div class="item_img">
                    <img src="http://localhost:8080/img/goodsimg01.jpg" alt="">
                </div>
                <div class="item_content">
                    <p>
                        养禄堂灵芝孢子粉吉林长白山头道椴木灵芝粉林芝袍子粉散装
                    </p>
                    <p class="row">
                        <span class="span">重量：250克</span>
                        <span class="span">×1</span>
                    </p>
                    <p class=" row">
                        共计：<span class="color">小计：￥168</span>
                    </p>
                </div>
            </div>
            <div>
                <p class="span t_color">退款原因：不想要</p>
                <p class="span t_color">申请时间：2019-06-20  11：05</p>
                <p>您已成功发起售后，订单编号为2019052055531001的产品正在等待商家处理，请耐心等候。</p>
                <p class="f_row">
                    <span class="f_btn" @click="onClick">撤销申请</span>
                </p>
            </div>
        </div>
        <div class="item">
            <div class="header">
                订单编号：180424AD0561589
            </div>
            <div class="item_cont">
                <div class="item_img">
                    <img src="http://localhost:8080/img/goodsimg01.jpg" alt="">
                </div>
                <div class="item_content">
                    <p>
                        养禄堂灵芝孢子粉吉林长白山头道椴木灵芝粉林芝袍子粉散装
                    </p>
                    <p class="row">
                        <span class="span">重量：250克</span>
                        <span class="span">×1</span>
                    </p>
                    <p class=" row">
                        共计：<span class="color">小计：￥168</span>
                    </p>
                </div>
            </div>
            <div>
                <p class="span t_color">退款原因：不想要</p>
                <p class="span t_color">申请时间：2019-06-20  11：05</p>
                <p>您已成功发起售后，订单编号为2019052055531001的产品正在等待商家处理，请耐心等候。</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        onClick(){
            alert("已取消退货，将返回购物车页面");
            this.$router.push("/cart")
        }
    }
}
</script>
<style scoped>
.t_color
{
    color:gray;
}
.f_row
{
    display: flex;
    justify-content: flex-end;
    padding:10px;
}
.f_btn
{
    height:30px;
    width:100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(126, 109, 109);
    color:white;
    border-radius:20px;
}
.details
{
    background: #f2f2f2;
}
.item
{
    background: white;
    margin-bottom:20px;
    padding:10px;
}
.color
{
    color:orangered;
}
.row
{
    display: flex;
    justify-content: space-around;
    margin-top:10px;
}
.span
{
    font-size: 12px;
}
.details
{
    width: 100vw;
    height:100vh;
    padding:10px;
}
.item_cont
{
    display: flex;
}
.item_img img
{
    height:90%;
}
.item_img
{
    height:100px;
    width:30%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.item_content
{
    width:70%;
    text-indent: 1em;

}
</style>