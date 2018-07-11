<template>
    <div id="app">
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from "./layout/header.vue"
    import Footer from "./layout/footer.jsx"
    import Todo from "./views/todo/todo.vue"
    export default {
        components: {
            Header,
            Footer,
            Todo
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