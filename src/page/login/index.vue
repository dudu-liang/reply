

<template>
    <div>
        <header-item title="登录"></header-item>
        <loading v-if="loadingStatus"></loading>
        <alert-tip v-if="showAlert" :alertText="alertText" @closeView="closeTip"></alert-tip>
        <div class="container">
            <div class="line">
                <input type="text" class="inp name" v-model="name" placeholder="请输入用户名"/>
            </div>

            <div class="line">
                <input type="password" class="inp pwd" v-model="pwd" placeholder="请输入密码"/>
            </div>
            <div class="line">
                <button type="button" class="btn" @click="handlerLogin">确认登录</button>
                <div class="no-user" @click="handlerRegister">还没账号？去注册</div>
            </div>

        </div>
    </div>
</template>


<script>
    import headerItem from '../../components/header.vue'
    import loading from '../../components/loading.vue'
    import alertTip from '../../components/alertTip.vue'
    import {userLogin} from '../../service/getData';
    import {setStore}  from '../../config/mUtils';

    export default {
        data () {
          return {
              loadingStatus : false,
              showAlert : false,
              alertText : null,
              name : null,
              pwd : null
          }
        },
        components : {
            headerItem,
            loading,
            alertTip
        },
        methods : {
            async handlerLogin () {

                if(this.name == "" || !this.name) {
                    this.alertText = "请输入用户名";
                    this.showAlert = true;
                    return;
                }

                if(this.pwd == "" || !this.pwd) {
                    this.alertText = "请输入密码";
                    this.showAlert = true;
                    return;
                }


                let userInfo = await userLogin(this.name,this.pwd);
                if(userInfo.status == 200) {
                    this.alertText = '登陆成功';
                    this.showAlert = true;
                    setStore('userId',userInfo.data.id);
                    setTimeout(function() {
                        this.$router.push('home');
                    }.bind(this), 1500);
                }else{
                    this.alertText = userInfo.message;
                    this.showAlert = true;
                }
            },
            closeTip : function () {
                this.showAlert = false;
            },
            handlerRegister : function() {
                this.$router.push('register');
            }
        }
        
    }
</script>

<style scoped>
    .container{
        width: 100%;
        margin-top: 40%;
    }
   .line{
       width: 100%;
       text-align: center;
   }
   .inp{
       width: 80%;
       border:solid 1px #ccc;
       border-radius: 3px;
       padding-left: 5px;
       margin-bottom: 20px;
       height: 40px;
       font-size:14px;
   }
   .btn{
       width: -webkit-calc(80% + 5px);
       background-color: #d81e06;
       border:none;
       height: 40px;
       line-height: 40px;
       color: #fff;
       border-radius: 3px;
       margin-top: 10%;
       font-size:15px;
   }
   .no-user{
       font-size: 13px;
       color:#1296db;
       height: 30px;
       line-height: 30px;
   }
   body{
       overflow: hidden;
   }
</style>
