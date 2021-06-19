import Vue  from 'vue'
import Vuex from 'vuex'

import Cart from './modules/Cart'
import Products from './modules/Product'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Cart,
        Products
    }
})