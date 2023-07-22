import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.findIndex((c) => c.id == action.payload.id) !== -1) {
        state.cart[state.cart.findIndex((c) => c.id == action.payload.id)] =
          action.payload;
      } else {
        state.cart = [...state.cart, action.payload];
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    removeFromCart: (state, action) => {
      state.cart.splice(action.payload, 1);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

// Action creators are generated for each case reducer function
export const appActions = appSlice.actions;

export default appSlice.reducer;
