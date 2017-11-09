

<template>
    <div>
        <header-item title="注册"></header-item>
        <loading v-if="loadingStatus"></loading>
        <alert-tip v-if="showAlert" :alertText="alertText" @closeView="closeTip"></alert-tip>
        <div class="container">

            <div class="line">
                <input type="text" class="inp" v-model="name" placeholder="请输入用户名"/>
            </div>

            <div class="line">
                <input type="text" class="inp" v-model="username" placeholder="请输入昵称"/>
            </div>

            <div class="line">
                <input type="password" class="inp" v-model="pwd" placeholder="请输入密码"/>
            </div>

            <div class="line">
                <input type="password" class="inp" v-model="repwd" placeholder="请输入确认密码"/>
            </div>

            <div class="line">
                <button type="button" class="btn" @click="handlerLogin">确认注册</button>
            </div>

        </div>
    </div>
</template>


<script>
    import headerItem from '../../components/header.vue'
    import loading from '../../components/loading.vue'
    import alertTip from '../../components/alertTip.vue'
    import {userRegister} from '../../service/getData';

    export default {
        data () {
          return {
              loadingStatus : false,
              showAlert : false,
              alertText : null,
              name : null,
              pwd : null,
              username : null,
              repwd : null
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

                if(this.username == "" || !this.username) {
                    this.alertText = "请输入昵称";
                    this.showAlert = true;
                    return;
                }

                if(this.pwd == "" || !this.pwd) {
                    this.alertText = "请输入密码";
                    this.showAlert = true;
                    return;
                }

                if(this.pwd.length < 6 || this.pwd.length > 20) {
                    this.alertText = "密码长度不能小于6或者大于20";
                    this.showAlert = true;
                    return;
                }

                if(this.repwd == "" || !this.repwd) {
                    this.alertText = "请输入确认密码";
                    this.showAlert = true;
                    return;
                }

                if(this.pwd != this.repwd) {
                    this.alertText = "两次输入的密码不一致";
                    this.showAlert = true;
                    return;
                }

                let userInfo = await userRegister(this.name,this.username,this.pwd);
                if(userInfo.status == 200) {
                    this.alertText = '注册成功';
                    this.showAlert = true;
                    setTimeout(function() {
                        this.$router.push('/home');
                    }.bind(this), 1500);
                }else{
                    this.alertText = userInfo.message;
                    this.showAlert = true;
                }
                
            },

            closeTip : function () {
                this.showAlert = false;
            }
        }
        
    }
</script>

<style scope>
    .container{
        width: 100%;
        margin-top: 20%;
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
       height: 35px;
       margin-bottom: 20px;
   }
   .btn{
       width: -webkit-calc(80% + 5px);
       background-color: #d81e06;
       border:none;
       height: 35px;
       line-height: 35px;
       color: #fff;
       border-radius: 3px;
       margin-top: 10%;
   }
   body{
       overflow: hidden;
   }
</style>
