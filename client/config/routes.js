// dynamic import

const routes = [
    {
        path: '/',
        redirect: '/app'
    },{
        path: '/app',
        component: ()=> import('../views/todo/todo.vue')
    },{
        path: '/login',
        component: ()=> import('../views/login/login.vue')
    },{
        path: '/login/:id',
        component: ()=> import('../views/login/login.vue')
    },{
        path: '*',
        component: ()=> import('../layout/404.vue')
    }
]

export default routes