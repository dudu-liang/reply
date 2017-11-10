<template>
    <div class="mine-content">

        <div class="top">
            <div class="left">
                <p class="head" :style="{backgroundImage:'url(' + baseUrl + avatar + ')'}"></p>
            </div>
            <div class="right">
                <p class="user-name">{{username}}</p>
                <p class="desc">{{description == '' ? '无' : description}}</p>
            </div>
        </div>

        <div class="content">

             <div class="line">
                 待回答的问题
                 <span class="number">0</span>
             </div>

             <div class="line">
                 我的提问
                 <span class="number">0</span>
             </div>

             <div class="line">
                 我的回答
                 <span class="number">0</span>
             </div>
             <div class="line" @click="handlerPage">
                  修改资料
                  <img src="../../assets/right-arrow.png" class="right-arrow">
             </div>
        </div>
        <div class="log-out" @click="handlerLogout">
            退出登录
        </div>
    </div>
</template>

<script>

    import {userOne} from '../../service/getData';
    import {baseUrl} from '../../config/env';
    import {getStore,clearStore} from '../../config/mUtils';

    export default {
        name : 'mine',
        data () {
            return {
               avatar : null,
               username : null,
               description : null,
               baseUrl
            }
        },
        mounted () {

            this.getUserData();

        },


        methods: {

            handlerPage() {
                this.$router.push('edit');
            },

            async getUserData() {

                let userId = getStore('userId');

                let userData = await userOne(userId);
                this.avatar = userData.data.avatar;
                this.username = userData.data.username;
                this.description = userData.data.description;
             
            },

            handlerLogout () {
                clearStore('userId');
                setTimeout(function() {
                    this.$router.push('login');
                }.bind(this),1500);
            }


        },
    }
</script>

<style scoped>
   .mine-content{
       width: 100%;
       height: 100vh;
       background-color: #f2f2f2;
   }
   .top{
       overflow: hidden;
       background-color: #fff;
       width: 100%;
       padding:5% 0;
   }
   .left{
       width: 25%;
       float: left;
       text-align: center;
   }
   .head{
       width: 80%;
       padding-bottom: 80%;
       border-radius: 200px;
       display: inline-block;
       background-color: #f2f2f2;
       vertical-align: middle;
       background-image: url('../../assets/head.jpg');
       background-position: center center;
       background-repeat: no-repeat;
       background-size: cover;
   }
   .user-name{
       font-size: 15px;
       color: #333;
   }
   .right{
       width: 72%;
       float: left;
       padding:0 3% 0 0;
       
   }
   .desc{
        color: #666;
       line-height: 20px;  
       margin-top: 5px;
   }
   .content{
       margin-top: 5%;
       width: 100%;
   }
   .line{
     width: 94%;
     padding: 0 3%;
     background-color: #fff;
     text-align: left;
     border-bottom: solid 1px #eee;
     height: 40px;
     line-height: 40px;
   }
   .number{
       float: right;
       color: #d81e06;
   }
   .right-arrow{
       float: right;
       width: 18px;
       margin-top: 11px;
   }
   .log-out{
       width: 100%;
       height: 40px;
       line-height: 40px;
       color: #fff;
       background-color: #d81e06;
       text-align: center;
       position: fixed;
       bottom: 0;
       left: 0;
   }
</style>

