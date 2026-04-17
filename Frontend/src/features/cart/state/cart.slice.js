import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  items: [
    {
      id: 1,
      name: "Serene Linen Wrap Dress",
      price: 285.0,
      variant: "Bone Linen / Small",
      image: "https://images.unsplash.com/photo-1515347669655-10ddd2b51787?auto=format&fit=crop&q=80&w=400",
      quantity: 1,
    },
    {
      id: 2,
      name: "Cloud Knit Sweater",
      price: 340.0,
      variant: "Soft Taupe / Medium",
      image: "https://images.unsplash.com/photo-1604176354204-926873ff34b1?auto=format&fit=crop&q=80&w=400",
      quantity: 1,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, action) => {
      state.isCartOpen = action.payload !== undefined ? action.payload : !state.isCartOpen;
    },
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { id, delta } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = Math.max(1, item.quantity + delta);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { toggleCart, addItem, updateQuantity, removeItem } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectIsCartOpen = (state) => state.cart.isCartOpen;
export const selectCartTotal = (state) =>
  state.cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

export default cartSlice.reducer;
