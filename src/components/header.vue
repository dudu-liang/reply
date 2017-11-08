

<template>
  <div class="header">
     {{title}}
  </div>
</template>


<script>
    
    export default {
        name : 'header',
        props : ['title']
    }

</script>

<style scoped>
    .header{
        width: 100%;
        height: 45px;
        line-height: 45px;
        color: #fff;
        font-size: 15px;
        background-color: #d81e06;
        text-align: center;
    }
</style>
