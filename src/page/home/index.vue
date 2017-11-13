
<template>
    <div>
        <footer-item page="home"></footer-item>
        <div class="no-data">暂无提问</div>
    </div>
</template>


<script>
    import footerItem from '../../components/footer'

    export default {
        name : 'home',
        components : {
            footerItem
        },
        created () {
            
        }
    }
</script>

<style scoped>
.no-data{
    color: #999;
    font-size: 15px;
    text-align: center;
    padding-top: 65%;
}
</style>
