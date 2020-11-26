import Vue from 'vue'
import Router from 'vue-router'
import home from "@/components/pages/home.vue"
import about from "@/components/pages/about.vue"
import signin from "@/components/pages/signin.vue"
import fournotfour from "@/components/pages/fournotfour.vue"
Vue.use(Router)
export default new Router({
    mode:"history",
    routes:[
        {
            path: '/',
            name:'signin',
            component:signin
        },
        {
            path: '/home',
            name:'home',
            component:home
        },
        {
            path:"/about",
            name:'about',
            component:about
        },
        {
            path:"*",
            name:'404',
            component:fournotfour
        }
    ]
})