import Vue from 'vue'
import Router from 'vue-router'

import Cart from './components/Cart'
import Products from '@/components/ProductList.vue'
import ProductDetail from '@/components/ProductDetails.vue'



Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:"/",
            component:Products,
        },
        {
            path:'/Product/:id',
            name:'ProductDetail',
            props:true,
            component:ProductDetail

        },
        {
            path:'/cart',
            name:'cart',
            component:Cart,
        },
        {
            path:'*',
            redirect:'/'
        }
    ]
})