
<template>

     <div class="mine-content">

        <header-item title="你问我答"></header-item>
        <loading v-if="loadingStatus"></loading>
        <alert-tip v-if="showAlert" :alertText="alertText" @closeView="closeTip"></alert-tip>

        <div class="content">

            <div class="item" v-for="item in list" @click="handlerDetail(item._id)">

                <div class="top">
                    <div class="left">
                        <p class="head" :style="{backgroundImage:'url(' + baseUrl + item.ask_avatar + ')'}"></p>
                        <p class="name">{{item.ask_username}}</p>
                    </div>
                    <div class="right">
                        <p class="desc">{{item.content}}</p>
                    </div>
                </div>

                <div class="info">
                    {{item.answer}}
                </div>
 
            </div>

            <div class="no-data" v-if="list.length == 0">暂无数据</div>

        </div>

        <footer-item page="home"></footer-item>
    </div>

</template>


<script>
    import footerItem from '../../components/footer';
    import headerItem from '../../components/header.vue';
    import loading from '../../components/loading.vue'
    import alertTip from '../../components/alertTip.vue'
    import {homeAnswerList} from '../../service/getData';
    import {baseUrl} from '../../config/env';

    export default {
        name : 'home',

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

            this.getData();
            
        },

        methods: {

            async getData() {
                
                let data = await homeAnswerList();
                this.loadingStatus = false;
                this.list = data.data;

                if(data.status != 200) {
                    this.alertText = data.message;
                    this.showAlert = true;
                    return;
                }
            },

            closeTip () {
                this.showAlert = false;
            },

            handlerDetail (id) {
                this.$router.push('/detail?id=' + id);
            }

        },
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
   .no-data{
       color:#666;
       font-size:15px;
       text-align:center;
       padding-top:55%;
   }
</style>
