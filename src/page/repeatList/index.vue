<template>

    <div class="mine-content">

        <header-item title="我的回答"></header-item>

        <div class="content">

            <div class="item">

                <div class="top">
                    <div class="left">
                        <p class="head"></p>
                        <p class="name">提问者</p>
                    </div>
                    <div class="right">
                        <p class="desc">春节还有几天？</p>
                    </div>
                </div>

                <div class="info">
                    就不告诉你，哈哈哈哈啊
                </div>
 
            </div>

            <div class="item">

                <div class="top">
                    <div class="left">
                        <p class="head"></p>
                        <p class="name">提问者</p>
                    </div>
                    <div class="right">
                        <p class="desc">春节还有几天？</p>
                    </div>
                </div>

                <div class="info">
                    就不告诉你，哈哈哈哈啊
                </div>
 
            </div>

            <div class="item">

                <div class="top">
                    <div class="left">
                        <p class="head"></p>
                        <p class="name">提问者</p>
                    </div>
                    <div class="right">
                        <p class="desc">春节还有几天？</p>
                    </div>
                </div>

                <div class="info">
                    就不告诉你，哈哈哈哈啊
                </div>
 
            </div>

            <div class="item">

                <div class="top">
                    <div class="left">
                        <p class="head"></p>
                        <p class="name">提问者</p>
                    </div>
                    <div class="right">
                        <p class="desc">春节还有几天？</p>
                    </div>
                </div>

                <div class="info">
                    就不告诉你，哈哈哈哈啊
                </div>
 
            </div>

        </div>

        <footer-item page="mine"></footer-item>
    </div>

</template>

<script>

    import footerItem from '../../components/footer'
    import headerItem from '../../components/header.vue'
    
    export default {
        name : 'repeatList',
        components : {
            footerItem,
            headerItem
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
       background-size: 100% 100%;
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
</style>

