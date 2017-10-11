import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/page/login/login'
import Home from 'components/common/home/home'
import Readme from 'components/page/readme/readme'
import Basetable from 'components/page/basetable/basetable'
import Baseform from 'components/page/baseform/baseform'
import Editor from 'components/page/editor/editor'


Vue.use(Router)

const routes = [
    {
		path: '/',
		component: Login
    },
    {
        path: '/readme',
        component: Home ,
        children:[
            {
                path: '/readme',
                component: Readme
            },
            {
                path: '/basetable',
                component: Basetable
            },
            {
                path: '/baseform',
                component: Baseform
            },
            {
                path: '/editor',
                component: Editor
            }

        ]
    },
    {
        path: '/login',    
        component: Login
    }

]


export default new Router({
    routes
})
