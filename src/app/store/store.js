import { create } from "zustand";

const useStore = create((set) => ({
  products: [],
  addProducts: (newValue) => set({ products: newValue }),
}));
export default useStore;
