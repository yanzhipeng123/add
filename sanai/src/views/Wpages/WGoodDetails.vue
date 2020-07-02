<template>
    <div class="wrapper">
        <div class="item">
            <div class="title">
                订单编号：180424AD0561589
            </div>
            <div class="item_img">
                <img src="http://localhost:8080/img/goodsimg01.jpg" alt="">
                <img src="http://localhost:8080/img/sanaibg02.jpg" alt="">
            </div>
            <div>
                <p class="message">共1件商品，由【EMS】承运</p>
                <p class="message">订单编号：180424AD0561589</p>
                <p class="message">物流状态：<span class="o_color" @click="onback">已签收</span></p>
            </div>
        </div>
        <div class="content">
            <div class="row">
                <div class="row_1">
                    <p>12-21</p>
                    <p>21:27</p>
                </div>
                <div class="row_2">
                    <span></span>
                </div>
                <div class="row_3">
                    <p>已签收</p>
                    <p>快件已签收，签收人：本人，感谢您使用邮政速递，期待再次为您服务！</p>
                </div>
            </div>
            <div class="row">
                <div class="row_1">
                    <p>12-21</p>
                    <p>14:55</p>
                </div>
                <div class="row_2">
                    <span></span>
                </div>
                <div class="row_3">
                    <p>派送中</p>
                    <p>[上海市]闸北凯旋门派件员：罗洋 15983081769 正在为您派件</p>
                </div>
            </div>
            <div class="row">
                <div class="row_1">
                    <p>12-21</p>
                    <p>11:27</p>
                </div>
                <div class="row_2">
                    <span></span>
                </div>
                <div class="row_3">
                    <p>运输中</p>
                    <p>快件已从 上海 出发！</p>
                </div>
            </div>
            <div class="row">
                <div class="row_1">
                    <p>12-21</p>
                    <p>8:27</p>
                </div>
                <div class="row_2">
                    <span></span>
                </div>
                <div class="row_3">
                    <p></p>
                    <p>快件到达 上海</p>
                </div>
            </div>
            <div class="row">
                <div class="row_1">
                    <p>12-21</p>
                    <p>21:27</p>
                </div>
                <div class="row_2">
                    <span></span>
                </div>
                <div class="row_3">
                    <p>已签收</p>
                    <p>快件已签收，签收人：本人，感谢您使用邮政速递，期待再次为您服务！</p>
                </div>
            </div>
            <div class="row">
                <div class="row_1">
                    <p>12-21</p>
                    <p>21:27</p>
                </div>
                <div class="row_2">
                    <span></span>
                </div>
                <div class="row_3">
                    <p>已签收</p>
                    <p>快件已签收，签收人：本人，感谢您使用邮政速递，期待再次为您服务！</p>
                </div>
            </div>
            <div class="row">
                <div class="row_1">
                    <p>12-21</p>
                    <p>21:27</p>
                </div>
                <div class="row_2">
                    <span></span>
                </div>
                <div class="row_3">
                    <p>已签收</p>
                    <p>快件已签收，签收人：本人，感谢您使用邮政速递，期待再次为您服务！</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        onback(){
            this.$router.push("/cart")
        }
    }
}
</script>
<style scoped>
.message
{
    font-size: 12px;
    margin:5px 0;
}
.row_3
{
    width:75%;
}
.row_2 span
{
    display: block;
    height:10px;
    width:10px;
    border-radius:10px;
    background: gray;
}
.row_2 
{
    width:10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.row_1
{
    width:15%;
}
.row
{
    display: flex;
    justify-content: space-between;
    margin:10px 0;
}
.content
{
    width:100%;
    padding:10px;
    background: white;
}
.o_color
{
    color:orangered;
}
.wrapper
{
    width:100vw;
    background: #f2f2f2;
}
.item_img img
{
    height:100%;
}
.item_img
{
    width:100%;
    height:100px;
    padding:10px;
}
.item
{
    background: white;
    margin-bottom:5px;
    padding:10px;
}
</style>