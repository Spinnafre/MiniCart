const products = [
  {
    id: 0,
    title: "Plastation 5 (PS5)",
    price: 5000.0,
    tag: "consoles",
    inventory: 2,
    img: "https://www.techinn.com/f/13776/137769821/sony-ps5.jpg",
    description: "Desfrute o poder do poderoso console PS5.",
  },
  {
    id: 1,
    title: "Xbox one",
    price: 4500.0,
    tag: "consoles",
    inventory: 10,
    img:
      "https://www.techinn.com/f/13777/137776929/microsoft-xbox-series-x-1tb.jpg",
    description:
      "Divirta-se com o Xbox One series X 1tb, o poderoso console da Microsoft.",
  },
  {
    id: 2,
    title: "Gta V (ps4)",
    price: 120.0,
    tag: "game",
    inventory: 20,
    img:
      "https://a-static.mlcdn.com.br/618x463/grand-theft-auto-v-gta-v-ps4-midia-fisica/gestaltgames/975p/9abeb54edcb1abb2766b8468798f085b.jpg",
    description:
      "Um dos melhores jogos de todos os tempos agora aqui, só camprar.",
  },
];

export default {
  getAllProducts(cb) {
    setTimeout(() => cb(products), 1000);
  },
  getProduct(cb, index) {
    setTimeout(() => cb(products[index]), 1000);
  },
};
