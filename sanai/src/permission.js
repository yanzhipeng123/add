import router from './router'
import oppop from './api/test'
router.beforeEach((to, from, next) => {
    //获取token
    const res = localStorage.getItem("adminToken");
    // console.log(res.token)
    //没有token
    if(!res){
        if(to.path !== "/login"){
            next({path : "/login"})
        }else{
            next()
        }
    }else{
        // 有res.token
        if(to.path === '/login'){
            next()
        }else{
            const yh= localStorage.getItem("adminUser");
            if(yh){
                next()
            }else{
                oppop.home(res).then(response=>{
                    if(response.data.flag){
                        // 如果获取到，保存数据
                        localStorage.setItem('msm',JSON.stringify(response.data.data))
                        next()
                    }else{
                        next({path:'/login'})
                    }
                 })
            }
        }
    }
})