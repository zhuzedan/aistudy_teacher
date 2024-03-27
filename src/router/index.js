import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '../components/common/BasicLayout'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'basicLayout',
        component: BasicLayout,
        meta: {
            requireAuth: true
        },
        children: [
            // 设置菜单列表的路由
            {
                path: '',
                name: 'dashboard',
                component: () => import("@/views/dashboard/Index.vue"),
                meta: {
                    requireAuth: true
                }
            },
            {
                path: 'class',
                name: 'class',
                component: () => import("@/views/class/ClassIndex.vue")
            },
            {
                path: '/course/:name',
                name: 'course',
                component: () => import("@/views/course/Course.vue")
            }
        ]
    },
    {
        path: '*',
        name: '404',
        component: () => import("@/views/exception/404.vue")
    }
]

const router = new VueRouter({
    routes,
    mode:'hash'
})

export default router
