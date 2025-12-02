<script setup lang="ts">
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";
</script>

<template>
  <div class="app-layout">
    <header class="app-header">
      <div class="container">
        <h1 class="logo">Cart System</h1>
      </div>
    </header>
    <main class="container main-content">
      <div class="grid-layout">
        <ProductList />
        <Cart />
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-header {
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: var(--spacing-md) 0;
  margin-bottom: var(--spacing-xl);
}

.logo {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
}

@media (min-width: 768px) {
  .grid-layout {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
