import http from '../utils/http'
/*
@descriptign 进行登录操作
@param{*} code 临时登录凭证
@returns Promise
*/
export const reqLogin = (code)=>{
return http.get('/weixin/wxLogin/${code}')
}