import { createSlice } from "@reduxjs/toolkit";

export interface ProductType {
  id: number;
  category: string;
  title: string;
  imgSrc: string;
  amazonLink: string;
  description: string;
  price: number;
}

type InitialStateType = {
  items: ProductType[];
  totalPrice: number;
};

const initialState: InitialStateType = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalPrice += newItem.price;
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, clearCart } = cartSlice.actions;
