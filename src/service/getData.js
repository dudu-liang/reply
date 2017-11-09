import fetch from '../config/fetch';
import {getStore} from '../config/mUtils';

/*
用户模块
 */

//注册
export const userRegister = (name,username,password) => fetch('/user/register', {
	name : name,
	username : username,
	password : password
}, 'POST')

 //登录
export const userLogin = (name,password) => fetch('/user/login', {
	name: name,
	password: password
}, 'POST');