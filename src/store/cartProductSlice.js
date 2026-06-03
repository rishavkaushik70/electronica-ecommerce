import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItem: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItem.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
        toast.success("Product Quantity is Increased !");
      } else {
        state.cartItem.push({
          ...action.payload,
          quantity: 1,
        });
        toast.success("Product is added to Cart !");
      }
    },

    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload,
      );
      toast.success("Product is deleted from your Cart !");
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
        toast.success("Quantity is increased !");
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        toast.success("Quantity is decreased !");
      } else {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== action.payload,
        );
        toast.success("Product is deleted from your Cart !");
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
