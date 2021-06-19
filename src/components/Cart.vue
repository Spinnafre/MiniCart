<template>
  <div class="container-details">
    <nav class="col-md-12 mb-2">
    <b-button @click="GoBack">Voltar</b-button>
    </nav>

    <b-card no-body class="overflow-hidden m-3" style="max-width: 100%" v-for="(product,i) in products" :key="i">
      <b-row no-gutters>
        <b-col md="3">
          <b-card-img
            :src="product.img"
            alt="Image"
            class="rounded-0"
            img-width="120"
          ></b-card-img>
        </b-col>
        <b-col md="9">
          <b-card-body :title="product.title">
            <b-badge variant="primary">{{product.tag}}</b-badge>
            <b-card-text>
              {{ product.description }}
            </b-card-text>
            <h3>{{calculatePrice(product.qtd,product.price)}}</h3>
            <h6>{{product.qtd}} x {{formatedPrice(product.price)}}</h6>
            <b-button @click="removeCartItem(product)" variant="danger"
              >Remover do Carrinho</b-button
            >
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapGetters,mapMutations} from "vuex";
export default {
  name: "ProductDetails",
  data() {
    return {
      qtd: 0,
    };
  },
  computed: {
    ...mapGetters("Cart", {
      products: "getCartItems",
    }),
  },
  methods: {
    ...mapMutations('Cart',['removeCartItem']),
    GoBack(){
      this.$router.go(-1)
    },
    formatedPrice(price) {
      return price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    removeCart(product){
      this.removeCartItem(product)
    },
    calculatePrice(qtd,price) {
      let fullPrice = price * qtd;
      return fullPrice.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
};
</script>

<style>
</style>