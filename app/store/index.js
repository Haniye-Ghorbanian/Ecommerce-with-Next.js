import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { products: [], filteredProducts: [] };

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },

    applyFilter(state, action) {
      //   console.log("Products before filtering:", state.products);
      const filtered = state.products.filter((product) => {
        return product.category === action.payload;
      });
      state.filteredProducts.push(...filtered);
    },

    removeFilter(state, action) {
      
        const revised = state.filteredProducts.filter((product) => {
        return product.category !== action.payload;
      });

      state.filteredProducts = [];
      state.filteredProducts.push(...revised)
    },
  },
});

const store = configureStore({
  reducer: appSlice.reducer,
});

export const appActions = appSlice.actions;

export default store;

console.log(initialState.products);
