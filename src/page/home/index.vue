
<template>
    <div>
        <footer-item page="home"></footer-item>
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
            console.log('首页');
        }
    }
</script>