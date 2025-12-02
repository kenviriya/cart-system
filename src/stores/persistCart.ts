import { type PiniaPluginContext } from "pinia";

export const persistCartPlugin = ({ store }: PiniaPluginContext) => {
  if (store.$id === "cart") {
    const saved = localStorage.getItem("cart");
    if (saved) {
      store.$state.items = JSON.parse(saved);
    }
    store.$subscribe((_, state) => {
      localStorage.setItem("cart", JSON.stringify(state.items));
    });
  }
};
