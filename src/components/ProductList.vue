<template>
  <div class="container-products row w-100 justify-content-center align-content-start">
    <b-card-group v-for="(product, i) in products" :key="i" deck>
      <b-card
        :title="product.title"
        :img-src="product.img"
        img-alt="Image"
        img-top
        rounded
        tag="article"
        style="max-width: 18rem"
        class="mb-2 p-1"
      >
        <b-card-text>
          {{ product.description }}
        </b-card-text>

        <b-card-footer>{{ formatedPrice(product.price ) }}</b-card-footer>
        <p class="mb-1 mt-1" style="font-size:0.8em"><em>Disponível: </em>{{product.inventory}}</p>
        <b-button variant="secondary" class="w-100 mt-1" @click="addToCart(product.id)">
          Adicionar no carrinho
        </b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Product",
  data() {
    return {};
  },
  created() {
    this.setProducts();
  },
  methods: {
    ...mapActions('Products',["setProducts"]),
    formatedPrice(price) {
      return price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    addToCart(productID){
      this.$router.push({name:"ProductDetail",params:{id:productID}})
    }
  },
  computed: {
    ...mapGetters('Products',{
      products: "getAllProducts",
    }),
  },
};
</script>

<style scoped></style>
