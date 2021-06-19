<template>
  <div class="container-details">
    <nav class="col-md-12">
      <router-link :to="{ path: '/' }">Voltar</router-link>
    </nav>
    <b-card no-body class="overflow-hidden" style="max-width: 100%">
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
            <b-badge variant="primary">{{ product.tag }}</b-badge>
            <b-card-text>
              {{ product.description }}
            </b-card-text>
            <h3>{{ calculatePrice(product.price) }}</h3>
            <h6>{{ qtd }} x {{ formatedPrice(product.price) }}</h6>
            <b-input
              type="number"
              placeholder="Quantidade"
              :min="1"
              :max="product.inventory"
              v-model.number="qtd"
              class="mb-2"
            ></b-input>
            <b-button @click="addItemToCart(product)"
              >Adicionar ao carrinho</b-button
            >
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "ProductDetails",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      qtd: 1,
      total: 0,
    };
  },
  created() {
    //   console.log('this.products ',this.products)
  },
  watch: {
    qtd(newV) {
      console.log(newV);
    },
  },
  computed: {
    ...mapState("Products", {
      products: "products",
    }),
    
    product() {
    //   console.log('this.products ',this.$route.params.id,' ',this.products);
      let prod=[...this.products]
      
      console.log('this.products ',prod,' ',Number(this.id))
      return prod.find((p) => p.id === Number(this.id));
    },
  },
  methods: {
    ...mapMutations("Cart", ["addToCart"]),
    addItemToCart(product) {
      console.log("this.qtd ", this.qtd);
      product.qtd = this.qtd;
      this.addToCart(product);
      this.$router.push({ name: "cart" });
    },
    formatedPrice(price) {
      return price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    calculatePrice(price) {
      let fullPrice = price * this.qtd;
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