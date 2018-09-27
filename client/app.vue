<template>
    <div id="app">
        <Header></Header>
        <router-link to='/login/foo'>to login foo page.</router-link>
        <br/>
        <router-link to='/login/bar'>to login bar page.</router-link>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from "./layout/header.vue"
    import Footer from "./layout/footer.jsx"
    
    export default {
        components: {
            Header,
            Footer
        }
    }
</script>
<style lang="scss">
    #app {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
</style>