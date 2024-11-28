<template>
  <form @submit.prevent="onSubmit" class="row mb-3">
    <input v-model="product.name" placeholder="Product" class="col" required/>
    <input v-model.number="product.price" type="number" placeholder="Price" class="col" required/>
    <input v-model.number="product.quantity" type="number" placeholder="Qty" class="col" required/>
    <button class="btn btn-primary col">Add</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    product: { name: "", price: 0, quantity: 1 },
  }),
  methods: {
    onSubmit() {
      this.$emit("add-product", { ...this.product });
      this.product = { name: "", price: 0, quantity: 1 };
    },
  },
};
</script>