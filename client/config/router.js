// 用来创建 router
import VueRouter from 'vue-router'
import routes from './routes'

export default ()=>{
    return new VueRouter({
        routes,
        mode: 'history'
    })
}