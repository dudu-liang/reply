<template>
  <div class="content">
        <header-item title="修改资料"></header-item>
        <loading v-if="loadingStatus"></loading>
        <alert-tip v-if="showAlert" :alertText="alertText" @closeView="closeTip"></alert-tip>

        <div class="container">
            
            <div class="line">
                <span class="name">头像：</span>
                <div class="head-box">
                   <input type="file" name="head" class="head-img" id="uploadImg" />
                </div>
            </div>

            <div class="line">
                <span class="name">昵称：</span>
                <input type="text" class="inp" placeholder="请输入你的昵称"/>
            </div>

            <div class="line">
                <span class="name">简介：</span>
                <textarea name="desc" class="desc" placeholder="请介绍你自己（不超过100字）" maxlength="100"></textarea>
            </div>

            <div class="text-center">
                <button type="button" class="submit">确认修改</button>
            </div>

        </div>
  </div>
</template>

<script>

    import headerItem from '../../components/header.vue'
    import loading from '../../components/loading.vue'
    import alertTip from '../../components/alertTip.vue'

    export default {
        name : 'edit',
        data () {
          return {
              loadingStatus : false,
              showAlert : false,
              alertText : null,
              username : null,
              description : null
          }
        },
        components : {
            headerItem,
            loading,
            alertTip
        },
    }
</script>

<style scoped>
   .content{
       width: 100%;
   }
   .container{
       margin-top: 70px;
   }
   .name{
       display: inline-block;
       width: 100px;
       text-align: center;
   }
   .line{
       width: 100%;
       margin-bottom: 20px;
   }
   .head-box{
       display: inline-block;
       width: 80px;
       height: 80px;
       border-radius: 40px;
       background-color: #f2f2f2;
       vertical-align: middle;
       background-image: url('../../assets/head.jpg');
       background-position: center center;
       background-size: cover;
       position: relative;
   }
   .head-img{
       width: 80px;
       height: 80px;
       position: absolute;
       top: 0;
       left: 0;
       border-radius: 40px;
       opacity: 0;
       z-index: 2;
   }
   .inp{
       border:none;
       border-bottom: solid 1px #eee;
       height: 30px;
       padding-left: 5px;
   }
   .desc{
       width: 60%;
       height: 120px;
       border: solid 1px #eee;
       border-radius: 3px;
       padding:5px;
       resize: none;
       vertical-align: middle;
   }
    .submit{
       width: 60%;
       height: 35px;
       line-height: 35px;
       color: #fff;
       margin-top: 15%;
       margin-bottom: 5%;
       border-radius: 5px;
       background-color: #d81e06;
       border:none;
       letter-spacing: 1px;
       font-size: 14px;
   }
</style>

