import { CartItem, Product } from "@/types";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    totalItems(): number {
      return this.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    totalPrice(): number {
      return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    findItemById: (state) => (id: number) => {
      return state.items.find((item) => item.id === id);
    },
  },

  actions: {
    addToCart(product: Product) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId);
    },

    updateQuantity(productId: number, quantity: number) {
      if (quantity < 1) {
        this.removeFromCart(productId);
        return;
      }

      const item = this.items.find((item) => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },

    clearCart() {
      this.items = [];
    },
  },
});
