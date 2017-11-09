<template>

    <div class="mine-content">

        <div class="top">
            <div class="left">
                <p class="head"></p>
                <p class="name">提问者</p>
            </div>
            <div class="right">
                <p class="desc">春节还有几天？</p>
            </div>
        </div>
        
        <div class="line">
            回答
        </div>

        <div class="top">
            <div class="left">
                <p class="head"></p>
                <p class="name">回答者</p>
            </div>
            <div class="right">
                <p class="desc">就不告诉你</p>
            </div>
        </div>

        <footer-item page="home"></footer-item>
    </div>

</template>

<script>

    import footerItem from '../../components/footer'
    
    export default {
        name : 'detail',
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
</style>

