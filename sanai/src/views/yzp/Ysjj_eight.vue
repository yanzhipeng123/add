<template>
  <div class="eight">
      <div class="content">
          <div class="one">
              <img src="http://localhost:8080/img/zfbtimg.jpg" alt="">
              <img src="http://localhost:8080/img/zfbtimg02.jpg" alt="">
          </div>
          <div class="two">
                  <p><img src="http://localhost:8080/img/zfbtimg03.jpg" alt=""></p>
                  <p><img src="http://localhost:8080/img/zfbtimg04.jpg" alt=""></p>
                  <p><img src="http://localhost:8080/img//zfbtimg05.jpg" alt=""></p>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.content{
    padding: 0 3%;
    .one{
        width: 4rem;
        height: 2.5rem;
        border-bottom:0.01rem solid #d4d4d4;
       img:nth-child(1){
           width: 2rem;
           margin: 0.4rem 0 0 0.8rem;
       }
        img:nth-child(2){
           width: 3rem;
            margin: 0.2rem 0 0 0.4rem;
       }
    }
    .two{
        p:nth-child(1){
            margin-top: 0.2rem;
            border-radius: 0.04rem;
            background: #02a0e9;
            width: 100%;
            height: 0.8rem;
            text-align: center;
            img{
                width: 0.5rem;
            }
        }
          p:nth-child(2){
            text-align: center;
            img{
                width: 0.5rem;
            }
        }
          p:nth-child(3){
              border-radius: 0.04rem;
             background: #02a0e9;
            width: 100%;
            height: 0.8rem;
            text-align: center;
            img{
                width: 0.8rem;
            }
        }
    }
}
</style>