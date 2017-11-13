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

export const userOne = (userId) => fetch('/user/message',{
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

//提问
export const askSave = (replyId,askId,content) => fetch('/ask/save',{
	replyId : replyId,
	askId : askId,
	content : content
}, 'POST');

//待回答问题列表
export const askWaitList = (userId) => fetch('/ask/waitList',{
	id : userId
});

//我的提问列表
export const askList = (userId) => fetch('/ask/askList',{
	id : userId
});

//我的回答列表
export const askAnswerList = (userId) => fetch('/ask/answerList',{
	id : userId
});

//回答问题
export const answerQuestion = (id,answer) => fetch('/ask/answer', {
	id : id,
	answer : answer
},'POST');

//获取单个问题详情
export const queryQuestion = (id) => fetch('/ask/query', {
	id : id
});



