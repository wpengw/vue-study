import axios from 'axios';
import {getStore} from '@/config/mUtils'

axios.defaults.baseURL = '/api';

export function fetch(url, params) {
    return axios.get(url, { params: params }).then(res => res.data);
}

export function fetchPost(url, params) {
    return axios.post(url, params).then(res => res.data);
}

export default {
    getTextList(params) {
        return fetch("/home", params);
    },
    getTextDetail(params) {
        return fetch('/home/detail', params);
    },
    register(params) {//注册
        return fetchPost('/users/register', params);
    },
    userlogin(params) {//登录
        return fetchPost('/users/login', params);
    },
    getUser() {//获取用户信息
        return fetch("/users/userInfo", {userId: getStore('userId')});
    }
}