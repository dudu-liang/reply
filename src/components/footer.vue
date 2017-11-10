<template>
   <div class="footer">
       <ul class="f-ul">
           <li class="f-item" :class="{active : page == 'home'}" @click="handlerHomePage">首页</li>
           <li class="f-item" :class="{active : page == 'ask'}" @click="handlerUserListPage">提问</li>
           <li class="f-item" :class="{active : page == 'mine'}" @click="handlerMinePage">我的</li>
       </ul>
   </div>
</template>


<script>
    import {getStore} from '../config/mUtils';

    export default {
        name : 'footer',
        props : ['page'],
        methods: {

            handlerHomePage() {
                this.$router.push('/');
            },

            handlerUserListPage() {

                let userId = getStore('userId');

                if(userId) {
                    this.$router.push('userList');
                }else{
                    this.$router.push('login');
                }   
            },
            
            handlerMinePage() {

                let userId = getStore('userId');

                if(userId) {
                    this.$router.push('mine');
                }else{
                    this.$router.push('login');
                } 
            },
        },
    }
</script>

<style scoped>
  .footer{
      width: 100%;
      height: 50px;
      line-height: 50px;
      border-top: solid 1px #eee;
      box-sizing: border-box;
      background: #fff;
      position: fixed;
      bottom:0;
      left: 0;
  }
  .f-ul{
      width: 100%;
  }
  .f-item{
      width: 33.33%;
      float: left;
      list-style: none;
      text-align: center;
      color: #333;
  }
  .active{
    color: #d81e06;
  }
  

</style>
