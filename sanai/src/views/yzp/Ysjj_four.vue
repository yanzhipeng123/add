<template>
  <div class="four">
    <div class="content">
      <div class="one">
        <h3>张厚杰临诊医案举隅</h3>
        <p>2019-07-10</p>
        <a @click="goone">点击查看</a>
      </div>
       <div class="one">
        <h3>张厚杰临诊医案举隅</h3>
        <p>2019-07-10</p>
        <a href="#">点击查看</a>
      </div>
       <div class="one">
        <h3>张厚杰临诊医案举隅</h3>
        <p>2019-07-10</p>
        <a href="#">点击查看</a>
      </div>
       <div class="one">
        <h3>张厚杰临诊医案举隅</h3>
        <p>2019-07-10</p>
        <a href="#">点击查看</a>
      </div>
       <div class="one">
        <h3>张厚杰临诊医案举隅</h3>
        <p>2019-07-10</p>
        <a href="#">点击查看</a>
      </div>
       <div class="one">
        <h3>张厚杰临诊医案举隅</h3>
        <p>2019-07-10</p>
        <a href="#">点击查看</a>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
    methods:{
      goone(){
        this.$router.push('/ysjj_one')
      }
    }
};
</script>

<style scoped lang="scss">
.content {
  padding: 0.2rem 0.2rem;
  .one {
    margin-top: 0.2rem;
    position: relative;
    border: 0.01rem solid #d4d4d4;
    border-radius: 0.04rem;
    background: #ffffff;
    width: 100%;
    height: 0.8rem;
    h3{
        margin-top: 0.2rem;
        margin-left: 0.1rem;
    }
    p{
        font-size: 0.14rem;
        color: #d4d4d4;
         margin-left: 0.1rem;
    }
    a{
        text-decoration: none;
        position: absolute;
        right: 0.08rem;
        top: 30%;
        color: #d4d4d4;
    }
  }
}
</style>