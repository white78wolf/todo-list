import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Todos from '@/components/Todos'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: Todos
        }
    ]
})