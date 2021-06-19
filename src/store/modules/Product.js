import api from "@/api/shop.js";


const state = {
  products: [],
};

const getters = {
  getAllProducts(state) {
    return state.products;
  },
};

const actions = {
  setProducts({commit}) {
    api.getAllProducts((prod) => {
        commit({
            type:'addAllProducts',
            products:prod
        })
    });
  },
};

const mutations = {
    addAllProducts(state,payload){
        state.products=payload.products
    }
};

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
};
