<template>
  <h3 class="mt-4">Total: ${{ total.toFixed(2) }}</h3>
</template>

<script>
export default {
  props: {
    total: Number,
  },
};
</script>