import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/home')), 'home') //首页
    },{
        path: '/login',
        component: r => require.ensure([], () => r(require('../page/login')), 'login') //登录页面
    },{
        path: '/register',
        component: r => require.ensure([], () => r(require('../page/register')), 'register')  //注册页面
    },{
        path: '/mine',
        component: r => require.ensure([], () => r(require('../page/mine')), 'mine')  //个人主页
    },{
        path: '/ask',
        component: r => require.ensure([], () => r(require('../page/ask')), 'ask')  //提问页面
    },{
        path: '/repeat',
        component: r => require.ensure([], () => r(require('../page/repeat')), 'repeat')  //回答页面
    },{
        path: '/userList',
        component: r => require.ensure([], () => r(require('../page/userList')), 'userList')  //用户列表
    },{
        path: '/detail',
        component: r => require.ensure([], () => r(require('../page/detail')), 'detail')  //问题详情
    },{
        path: '/askList',
        component: r => require.ensure([], () => r(require('../page/askList')), 'askList')  //我的提问
    },{
        path: '/repeatList',
        component: r => require.ensure([], () => r(require('../page/repeatList')), 'repeatList')  //我的回答
    },{
        path: '/waitList',
        component: r => require.ensure([], () => r(require('../page/waitList')), 'waitList')  //待回答的问题
    },{
        path: '/edit',
        component: r => require.ensure([], () => r(require('../page/edit')), 'edit')  //修改个人信息
    }]
}]
})
