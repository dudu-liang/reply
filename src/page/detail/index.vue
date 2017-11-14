<template>

    <div class="mine-content">

        <div class="top">
            <div class="left">
                <p class="head" :style="{backgroundImage:'url(' + baseUrl + ask_avatar + ')'}"></p>
                <p class="name">{{ask_username}}</p>
            </div>
            <div class="right">
                <p class="desc">{{content}}</p>
            </div>
        </div>

        <div class="btn-box" v-if="status == 1">
                <button type="button" class="ask-btn">待回答</button>
        </div>
        
        <div class="line" v-if="status == 2">
            回答
        </div>

        <div class="top" v-if="status == 2">
            <div class="left">
                <p class="head"></p>
                <p class="name">{{reply_username}}</p>
            </div>
            <div class="right">
                <p class="desc">{{answer}}</p>
            </div>
        </div>

        <footer-item page="home"></footer-item>
    </div>

</template>

<script>

    import footerItem from '../../components/footer'
    import loading from '../../components/loading.vue'
    import alertTip from '../../components/alertTip.vue'
    import {getQuery} from '../../config/mUtils';
    import {queryQuestion} from '../../service/getData';
    import {baseUrl} from '../../config/env';

    export default {

        name : 'detail',

        components : {
            footerItem,
            loading,
            alertTip
        },

        data () {
            return {
                loadingStatus : true,
                showAlert : false,
                alertText : null,
                answer : null,
                content : null,
                ask_username : null,
                reply_username : null,
                status : 1,
                ask_avatar : null,
                reply_avatar : null,
                baseUrl
            }
        },

        mounted () {
           this.getData();
        },

        methods : {
          
          async getData () {

            let id = getQuery('id');
            let queryData = await queryQuestion(id);

            if(queryData.status != 200) {
                this.alertText = queryData.message;
                this.showAlert = true;
                return;
            }

            this.answer = queryData.data.answer;
            this.content = queryData.data.content;
            this.ask_username = queryData.data.ask_username;
            this.reply_username = queryData.data.reply_username;
            this.ask_avatar = queryData.data.ask_avatar;
            this.reply_avatar = queryData.data.reply_avatar;
            this.status = queryData.data.status;
              
          }

        },

        closeTip () {
            this.showAlert = false;
        }
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
        color: #333;
       line-height: 20px;  
       margin-top: 5px;
   }
   .name{
       margin-top: 3px;
       font-size: 14px;
       color: #666;
   }
   .line{
       height: 30px;
       line-height: 30px;
       padding-left: 3%;
       color: #666;
   }
   .btn-box{
       width: 100%;
       padding-bottom: 10px;
       background-color: #fff;
       text-align: right;
   }
   .ask-btn{
       border:solid 1px #d81e06;
       border-radius: 3px;
       margin-right: 3%;
       background-color: transparent;
       color: #d81e06;
       font-size: 14px;
       height: 27px;
       line-height: 27px;
       padding:0 15px;
   }
</style>

