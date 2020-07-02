import request from './../util/request'
const BASE_URL = '/dev-api'
export default {
    login(username,password){
        console.log(BASE_URL)
        return request ({
            method : "post",
            url :BASE_URL+"/admin/login",
            data : {
                username:'admin',
                password:'macro123'
            }
        })  
    },
    home(page,size){
        return request ({
            method : "get",
            url :BASE_URL+"/product/list?pageNum="+page+"&pageSize="+size,
        })
    },
    st(){
        return request({
            method:'get',
            url:BASE_URL+"/productCategory/list/withChildren"
        })
    }
}