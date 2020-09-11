import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: "/",
        redirect: "/index",
    },
    {
        path: "/index",
        name: "index",
        component: () =>
            import ( /*webpackChunkName:"index"*/ "../views/index.vue"),
        children: [{
            path: "/index/hahaha",
            name: "hahaha",
            component: () =>
                import ( /*webpackChunkName:"hahaha"*/ "../views/hahaha.vue"),
        }, {
            path: "/index",
            redirect: "/index/hahaha"
        }]
    },
]

const router = new VueRouter({
    routes
})

export default router