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

//用户列表

export const userList = () => fetch('/user/list', {});

//获取单个用户

export const userOne = (userId) => fetch('/user/query',{
	id : userId
});

//修改个人资料
export const userUpdate = (userId,username,descciption) => fetch('/user/update',{
	username : username,
	description : descciption,
	id : userId
}, 'POST');

/*
提问模块
 */
export const askSave = (replyId,askId,content) => fetch('/ask/save',{
	replyId : replyId,
	askId : askId,
	content : content
}, 'POST')

