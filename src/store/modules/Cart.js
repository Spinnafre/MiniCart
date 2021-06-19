// import api from '@/api/shop.js'

const state={
    // [{id,name,price,qtd,img,tag}]
    cartItems:[]
}

const getters={
    getCartItems(state){
        return state.cartItems
    },
    cartTotalPrice(state){
        return state.cartItems.reduce((total,current)=>{
            return total + current.price * current.qtd
        },0)
    }
}
const mutations={
    addToCart(state,payload){
        console.log('Adicionando item ',payload)
        state.cartItems.push(payload)
    },
    removeCartItem(state,payload){
        let filtered=state.cartItems.filter(p=>p.id!==payload.id)
        console.log('removendo ',filtered)
        state.cartItems=filtered
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations
}