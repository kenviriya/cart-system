<script setup lang="ts">
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
];
</script>

<template>
  <div class="product-list-container">
    <h2 class="section-title">Products</h2>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card card">
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">${{ product.price.toFixed(2) }}</p>
        </div>
        <button @click="cartStore.addToCart(product)" class="btn btn-primary add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-lg);
  color: var(--color-text-main);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.product-info {
  margin-bottom: var(--spacing-md);
}

.product-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-xs);
}

.product-price {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

.add-to-cart-btn {
  width: 100%;
}
</style>
