<template>

    <div class="mine-content">

        <loading v-if="loadingStatus"></loading>
        <alert-tip v-if="showAlert" :alertText="alertText" @closeView="closeTip"></alert-tip>

        <div class="top">
            <div class="left">
                <p class="head" :style="{backgroundImage:'url(' + baseUrl + avatar + ')'}"></p>
            </div>
            <div class="right">
                <p class="user-name">{{username}}</p>
                <p class="desc">{{description == "" ? "无" : description}}</p>
            </div>
        </div>

        <div class="content">
           
           <textarea class="area" placeholder="请输入你的问题，并以问号结尾(不超过100个字)..." maxlength="100" v-model="content"></textarea>
             
        </div>

        <div class="text-center">
            <button type="button" class="submit" @click="handlerSubmit">确认提交</button>
        </div>

        <footer-item page="ask"></footer-item>
    </div>

</template>

<script>

    import footerItem from '../../components/footer';
    import loading from '../../components/loading.vue'
    import alertTip from '../../components/alertTip.vue'
    import {getStore,getQuery} from '../../config/mUtils';
    import {userOne,askSave} from '../../service/getData';
    import {baseUrl} from '../../config/env';
    
    export default {

        name : 'ask',

        data () {
           return {
               avatar : null,
               description : null,
               username : null,
               baseUrl,
               replyId : null,
               content : null,
               loadingStatus : false,
               alertText : null,
               showAlert : false
           }
        },

        components : {
            footerItem,
            loading,
            alertTip
        },

        created () {

            this.getUserData();

        },

        methods : {

            async getUserData() {

                this.replyId = getQuery('id');
                let userData = await userOne(this.replyId);
                    this.avatar = userData.data.avatar;
                    this.username = userData.data.username;
                    this.description = userData.data.description;
             
            },

            async handlerSubmit () {

                if(!this.content || this.content == "") {
                    this.alertText = '请输入你要提问的问题';
                    this.showAlert = true;
                    return;
                }
                let askId = getStore('userId');
                let askData = await askSave(this.replyId,askId,this.content);
                if(askData.status == 200) {
                    this.alertText = '提问成功';
                    this.showAlert = true;
                    setTimeout(function() {
                        this.$router.push('home');
                    }.bind(this), 1500);
                }else{
                    this.alertText = askData.message;
                    this.showAlert = true;
                    return;
                }

            },

            closeTip () {
                this.showAlert = false;
            }
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
        color: #666;
       line-height: 20px;  
       margin-top: 5px;
   }
   .content{
       margin-top: 5%;
       width: 100%;
       background-color: #fff;
   }
   .area{
       width: 96%;
       padding:2%;
       resize: none;
       height: 120px;
       font-size: 14px;
       border: none;
   }
   .submit{
       width: 60%;
       height: 35px;
       line-height: 35px;
       color: #fff;
       margin-top: 10%;
       margin-bottom: 5%;
       border-radius: 5px;
       background-color: #d81e06;
       border:none;
       letter-spacing: 1px;
       font-size: 14px;
   }
</style>

