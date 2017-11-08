<template>
   <div class="footer">
       <ul class="f-ul">
           <li class="f-item" :class="{active : page == 'home'}">首页</li>
           <li class="f-item" :class="{active : page == 'user'}">提问</li>
           <li class="f-item" :class="{active : page == 'mine'}">我的</li>
       </ul>
   </div>
</template>


<script>
    export default {
        name : 'footer',
        props : ['page']
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
