<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Shopping Cart</h1>

    <!-- Add Product Form -->
    <AddProductForm @add-product="addProduct"/>

    <!-- Cart Table -->
    <CartTable :items="cartItems" @remove-product="removeProduct"/>

    <!-- Cart Summary -->
    <CartSummary :total="cartTotal"/>
  </div>
</template>

<script>
import AddProductForm from "@/components/cart/AddProductForm.vue";
import CartTable from "@/components/cart/CartTable.vue";
import CartSummary from "@/components/cart/CartSummary.vue";
import { fetchCartItems, addCartItem, removeCartItem, fetchCartTotal } from "@/api/cart.js";

export default {
  components: { AddProductForm, CartTable, CartSummary },
  data: () => ({
    cartItems: [],
    cartTotal: 0,
  }),
  methods: {
    fetchCart() {
      Promise.all([fetchCartItems(), fetchCartTotal()])
          .then(([items, total]) => {
            this.cartItems = items;
            this.cartTotal = total;
          });
    },
    addProduct(product) {
      addCartItem(product).then(this.fetchCart);
    },
    removeProduct(name) {
      removeCartItem(name).then(this.fetchCart);
    },
  },
  mounted() {
    this.fetchCart();
  },
};
</script>