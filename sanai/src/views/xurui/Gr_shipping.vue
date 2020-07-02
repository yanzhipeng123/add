<template>
    <div>
        <div class="img"> 
            <img src="http://localhost:8080/img/wurecord04.png" alt="">
        </div>
        <div class="btn">
            <button @click="xin">新增收货地址</button>
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
        xin(){
            this.$router.push('/gr_xin')
        }
    }
};
</script>

<style lang="scss" scoped>
.img{
    width:100%;
    padding-top:1rem;
    img{
        width: 60%;
        display: block;
        margin: 0 auto;
    }
}
.btn{
    widows: 100%;
    
    padding-left: 0.2rem;
    button{
        position: absolute;
        bottom:.6rem;
        width: 90%;
        height: 0.4rem;
        color:white;
        background: #8d6546;
        border-radius: 0.5rem;
        border:none;
    }
}
</style>
