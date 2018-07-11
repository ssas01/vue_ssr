<template>
    <div :class='["todo-item", todo.completed ? "completed": ""]'>
        <input
         type="checkbox"
         class="toggle"
         v-model="todo.completed"
        >
        <label>{{ todo.content }}</label>
        <button class="destory" @click="deleteTodo()"></button>
    </div>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        methods: {
            deleteTodo(id) {
                this.$emit('del', this.todo.id);
            }
        }
    }
</script>

<style lang="scss">
.todo-item {
    position: relative;
    background-color: #fff;
    font-size: 24px;
    border-bottom: 1px solid rgba(0,0,0,.06)
}
.todo-item:hover .destory:after{
    content: "x"
}
.todo-item label {
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color .4s;
}
.todo-item.completed label{
        color: #d9d9d9;
        text-decoration: line-through;
}
.toggle {
    text-align: center;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: 3px solid #888;
    appearance: none;
    outline: none;
    border-radius: 4px;
}
/*这里是两张图片，应该是打勾*/
.toggle:after {
    content: '';
    width: 10px;
    height: 10px;
    background: pink;
    display: block;
    margin: 12px auto 0;
    visibility: hidden;
}
.toggle:checked:after {
    visibility: visible;
}
.destory {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color .2s ease-out;
    background-color: transparent;
    appearance: none;
    border-width: 0;
    cursor: pointer;
    outline: none;
}
</style>