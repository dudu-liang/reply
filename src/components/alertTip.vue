<template>
   <div class="alert-view">
       <div class="alert-box">
            <div class="alert-content">{{alertText}}</div>
            <div class="sure-btn" @click="closeTip">确定</div>
       </div>
   </div>
</template>

<script>
    export default {
        name : 'alertTip',
        props : ['alertText'],
        methods : {
           closeTip : function() {
               this.$emit('closeView');
           }
        }
    }
</script>

<style scoped>

.alert-view{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
}
.alert-box{
    width: 80%;
    margin-top: 55%;
    margin-left: 10%;
    border-radius: 5px;
    background-color: #fff;
}
.alert-content{
    text-align: center;
    line-height: 20px;
    padding:15px 10px;
    font-size: 14px;
    color: #333;
}
.sure-btn{
    font-size: 14px;
    text-align: center;
    color: #333;
    height: 35px;
    line-height: 35px;
    border-top: solid 1px #eee;
}
</style>

