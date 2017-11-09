<template>

    <div class="mine-content">

        <div class="top">
            <div class="left">
                <p class="head"></p>
            </div>
            <div class="right">
                <p class="user-name">嘟嘟</p>
                <p class="desc">这是我的介绍哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
            </div>
        </div>

        <div class="content">
           
           <textarea class="area" placeholder="请输入你的问题，并以问号结尾(不超过100个字)..." maxlength="100"></textarea>
             
        </div>

        <div class="text-center">
            <button type="button" class="submit">确认提交</button>
        </div>

        <footer-item page="ask"></footer-item>
    </div>

</template>

<script>

    import footerItem from '../../components/footer'
    
    export default {
        name : 'ask',
        components : {
            footerItem
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

