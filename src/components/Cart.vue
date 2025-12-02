<script setup lang="ts">
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();
</script>

<template>
  <div class="cart-container card">
    <h2 class="section-title">Cart ({{ cartStore.totalItems }} items)</h2>
    <div v-if="cartStore.items.length === 0" class="empty-cart">
      <p>Your cart is empty.</p>
    </div>
    <div v-else class="cart-content">
      <ul class="cart-items">
        <li v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <div class="item-details">
            <span class="item-name">{{ item.name }}</span>
            <span class="item-price">${{ (item.price * item.quantity).toFixed(2) }}</span>
          </div>
          <div class="item-controls">
            <div class="quantity-controls">
              <button
                @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                class="btn-icon"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span class="quantity">{{ item.quantity }}</span>
              <button
                @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                class="btn-icon"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button @click="cartStore.removeFromCart(item.id)" class="btn btn-danger btn-sm">
              Remove
            </button>
          </div>
        </li>
      </ul>
      <div class="cart-summary">
        <p class="total-price">
          <span>Total:</span>
          <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
        </p>
        <button @click="cartStore.clearCart" class="btn btn-danger clear-cart-btn">
          Clear Cart
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--spacing-sm);
}

.empty-cart {
  color: var(--color-text-muted);
  text-align: center;
  padding: var(--spacing-xl) 0;
}

.cart-items {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--spacing-lg) 0;
}

.cart-item {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid var(--color-border);
}

.cart-item:last-child {
  border-bottom: none;
}

.item-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
  font-weight: var(--font-weight-medium);
}

.item-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.quantity {
  font-weight: var(--font-weight-bold);
  min-width: 20px;
  text-align: center;
}

.cart-summary {
  border-top: 2px solid var(--color-border);
  padding-top: var(--spacing-md);
}

.total-price {
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
}

.clear-cart-btn {
  width: 100%;
}

.btn-sm {
  font-size: var(--font-size-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
}
</style>
