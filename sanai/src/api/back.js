import request from './../util/request'
const BASE_URL = '/dev-api'
console.log(BASE_URL)
export default {
    yh(offset,limit){
        console.log(offset,limit)
        return request ({
            method : 'get',
            url:BASE_URL + '/v1/users/list?offset='+offset+'&limit='+limit,
        })
    },
    count(){
        return request({
            methods:'get',
            url:BASE_URL  + '/v1/users/count'
        })
    },
    sj(offest,limit){
        return request ({
            method:"get",
            url:BASE_URL+'/shopping/restaurants?latitude=39.02177&longitude=116.756378&offset='+offest+'&limit='+limit
        })
    },
    sp(offset,limit){
        return request({
            method:'get',
            url:BASE_URL+'/productCategory/list/0?pageNum='+offset+'&pageSize='+limit
        })
    },
    els(){
        return request({
            method:'get',
            url:BASE_URL+'/productCategory/list/withChildren'
        })
    },
    on(ss){
        return request({
            method:'get',
            url:BASE_URL+'/shopping/v2/menu/'+ss
        })
    },
    cout(){
        return request({
            method:'get',
            url:BASE_URL+'/brand/list?pageNum=1&pageSize=100'
        }) 
    },
    dd(offset,limit){
        return request({
            method:'get',
            url:BASE_URL+'/productAttribute/category/list?pageNum='+offset+'&pageSize='+limit
        })
    },
    dc(){
        return request({
            method:'get',
            url:BASE_URL+'/bos/orders/count?restaurant_id=undefined'
        })
    },
    ss(spp){
        return request({
            method:'get',
            url:BASE_URL+'/v1/user/'+spp
        })
    },
    opp(sdd){
        return request({
            method:'get',
            url:BASE_URL+'/shopping/restaurant/'+sdd
        })
    },
    oll(ssdd){
        return request({
            method:'get',
            url:BASE_URL+'/v1/addresse/'+ssdd
        })
    },
    gly(offset,limit){
        return request({
            methods:'get',
            url:BASE_URL+'/brand/list?pageNum='+offset+'&pageSize='+limit
        })
    },
    ym(){
        return request({
            method:'get',
            url:BASE_URL+'/admin/count'
        })
    }
}