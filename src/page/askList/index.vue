<template>

    <div class="mine-content">

        <header-item title="我的提问"></header-item>
        <loading v-if="loadingStatus"></loading>
        <alert-tip v-if="showAlert" :alertText="alertText" @closeView="closeTip"></alert-tip>

        <div class="content">

            <div class="item" v-for="item in list">

                <div class="top">
                    <div class="left">
                        <p class="head"  :style="{backgroundImage:'url(' + baseUrl + item.ask_avatar + ')'}"></p>
                        <p class="name">{{item.ask_username}}</p>
                    </div>
                    <div class="right">
                        <p class="desc">{{item.content}}</p>
                    </div>
                </div>

                <div class="info" v-if="item.status == 2">
                    {{item.answer}}
                </div>

                <div class="btn-box" v-if="item.status == 1">
                     <button type="button" class="ask-btn">待回答</button>
                </div>
 
            </div>

            <div class="no-data" v-if="list.length == 0">暂无数据</div>

        </div>

        <footer-item page="mine"></footer-item>
    </div>

</template>

<script>

    import footerItem from '../../components/footer'
    import headerItem from '../../components/header.vue'
    import loading from '../../components/loading.vue'
    import alertTip from '../../components/alertTip.vue'
    import {askList} from '../../service/getData';
    import {getStore} from '../../config/mUtils';
    import {baseUrl} from '../../config/env';
    
    export default {
        name : 'askList',

        components : {
            footerItem,
            headerItem,
            loading,
            alertTip
        },

        data () {
            return {
                list : [],
                loadingStatus : true,
                showAlert : false,
                alertText : null,
                baseUrl
            }
        },

        mounted () {
           this.getList();
        },

        methods: {

           async getList() {
                let userId = getStore('userId');
                let askData = await askList(userId);

                this.loadingStatus = false;

                if(askData.status == 200) {
                    this.list = askData.data;
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
       min-height: 100vh;
       background-color: #f2f2f2;
   }
   .top{
       overflow: hidden;
       background-color: #fff;
       width: 100%;
       padding:3% 0;
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
   .content{
       width: 100%;
       padding-bottom: 70px;
       padding-top: 55px;
   }
   .item{
       width: 100%;
       margin-bottom: 10px;
   }
   .info{
       padding:0 3% 3% 3%;
       background-color: #fff;
       color: #666;
       font-size: 14px;
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
   .no-data{
       color:#666;
       font-size:15px;
       text-align:center;
       padding-top:55%;
   }
</style>

