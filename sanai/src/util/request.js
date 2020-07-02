import axios from 'axios'
var request = axios.create({

})
const loading = {
    loadingStance : null,
    open : function(){
        console.log("111")
        if(this.loadingStance === null){  //防止切换路由时重复加载
            this.loadingStance = Loading.service({
                target : ".cont",
                text : "拼命加载中",
                background : "rgba(0,0,0,0.5)"
            });
          }  
    },
    close : function(){
        if(this.loadingStance !== null){
            this.loadingStance.close();
        };
        this.loadingStance = null;
    }
}

//请求拦截

request.interceptors.request.use(
    config => {
            const token = localStorage.getItem('adminToken')
        if (token) {
            config.headers.Authorization = 'Bearer' + token
        }
        return config
    },
    error => {
        //  loading.close();
        console.log(222)
        // return Promise.reject(error)
    }
)
// 响应拦截
request.interceptors.response.use(response=>{
    //关闭加载中
    // loading.close();
    // 在响应成功之前做些什么
    return response;
},error=>{
    // loading.close();
    // 对响应失败做些什么
    console.log(222)
})
export default request