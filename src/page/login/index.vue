

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
            </div>

        </div>
    </div>
</template>


<script>
    import headerItem from '../../components/header.vue'
    import loading from '../../components/loading.vue'
    import alertTip from '../../components/alertTip.vue'
    import {userLogin} from '../../service/getData';

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
