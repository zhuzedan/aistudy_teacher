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
                name: 'index',
                component: () => import("@/views/dashboard/Index.vue"),
                meta: {
                    requireAuth: true
                }
            },
            {
                path: 'classBoard',
                name: 'classBoard',
                component: () => import("@/views/dashboard/ClassBoard.vue")
            },
            {
                path: 'student',
                name: 'student',
                component: () => import("@/views/dashboard/Student.vue")
            },
            {
                path: 'class',
                name: 'class',
                component: () => import("@/views/class/ClassIndex.vue")
            },
            {
                path: 'course',
                name: 'course',
                component: () => import("@/views/course/Course.vue")
            },
            {
                path: 'courseDetail',
                name: 'courseDetail',
                component: () => import("@/views/course/CourseDetail.vue")
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
    mode: 'hash'
})

export default router
