
<template>

    <div class="mine-content">

        <alert-tip v-if="showAlert" :alertText="alertText" @closeView="closeTip"></alert-tip>

        <div class="content">

            <div class="item" v-for="item in list" :key="item._id">

                <div class="top">
                    <div class="left">
                        <p class="head" :style="{backgroundImage:'url(' + baseUrl + item.avatar + ')'}"></p>
                    </div>
                    <div class="right">
                        <p class="user-name">{{item.username}}</p>
                        <p class="desc">{{item.description == "" ? "无" : item.description}}</p>
                    </div>
                </div>
                <div class="btn-box">
                     <button type="button" class="ask-btn" @click="handlerAsk(item._id)">提问</button>
                </div>

            </div>

            <div class="no-data" v-if="list.length == 0">暂无数据</div>

            
        </div>


        <footer-item page="ask"></footer-item>
    </div>

</template>

<script>

    import footerItem from '../../components/footer';
    import alertTip from '../../components/alertTip.vue'
    import {userList} from '../../service/getData';
    import {baseUrl} from '../../config/env';
    import {getStore} from '../../config/mUtils';
    
    export default {
        name : 'userList',

        data () {
           return {
               list : [],
               baseUrl : baseUrl,
               showAlert : false,
               alertText : null
           }
        },

        components : {
            footerItem,
            alertTip
        },

        mounted () {
           this.getList();
        },

        methods: {

            async getList() {
                let userData = await userList();
                this.list = userData.data;
            },

            handlerAsk (id) {
                let userId = getStore('userId');
                if(userId == id) {
                    this.alertText = '不能向自己提问哦';
                    this.showAlert = true;
                }else{
                    this.$router.push('/ask?id=' + id);
                }
                

            },

            closeTip : function () {
                this.showAlert = false;
            },
        },
    }   
</script>

<style scoped>
    .mine-content{
       width: 100%;
       min-height: 100vh;
       background-color: #f2f2f2;
   }
   .content{
       padding-bottom: 70px;
   }
   .item{
       width: 100%;
       margin-bottom: 10px;
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
       /* background-image: url('../../assets/head.jpg'); */
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

