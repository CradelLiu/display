import Vue from 'vue'
import Router from 'vue-router'
import header from './views/header'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/page1'
        },
        {
            path: '/page1',
            name: 'page1',
            components: {
                header: header,
                left: () => import('./views/page1/page1-left'),
                right: () => import('./views/page1/page1-right'),
            }
        },
        {
            path: '/page2',
            name: 'page2',
            components: {
                header: header,
                left: () => import('./views/page2/page2-left'),
                right: () => import('./views/page2/page2-right'),
            }
        }
    ]
})
