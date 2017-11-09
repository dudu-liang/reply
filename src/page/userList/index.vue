
<template>

    <div class="mine-content">

        <div class="content">

            <div class="item">

                <div class="top">
                    <div class="left">
                        <p class="head"></p>
                    </div>
                    <div class="right">
                        <p class="user-name">嘟嘟</p>
                        <p class="desc">这是我的介绍哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
                    </div>
                </div>
                <div class="btn-box">
                     <button type="button" class="ask-btn">提问</button>
                </div>

            </div>

            <div class="item">

                <div class="top">
                    <div class="left">
                        <p class="head"></p>
                    </div>
                    <div class="right">
                        <p class="user-name">嘟嘟</p>
                        <p class="desc">这是我的介绍哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
                    </div>
                </div>
                <div class="btn-box">
                     <button type="button" class="ask-btn">提问</button>
                </div>

            </div>

            <div class="item">

                <div class="top">
                    <div class="left">
                        <p class="head"></p>
                    </div>
                    <div class="right">
                        <p class="user-name">嘟嘟</p>
                        <p class="desc">这是我的介绍哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
                    </div>
                </div>
                <div class="btn-box">
                     <button type="button" class="ask-btn">提问</button>
                </div>

            </div>

            <div class="item">

                <div class="top">
                    <div class="left">
                        <p class="head"></p>
                    </div>
                    <div class="right">
                        <p class="user-name">嘟嘟</p>
                        <p class="desc">这是我的介绍哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
                    </div>
                </div>
                <div class="btn-box">
                     <button type="button" class="ask-btn">提问</button>
                </div>

            </div>

            
        </div>


        <footer-item page="ask"></footer-item>
    </div>

</template>

<script>

    import footerItem from '../../components/footer'
    
    export default {
        name : 'userList',
        components : {
            footerItem
        }
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

