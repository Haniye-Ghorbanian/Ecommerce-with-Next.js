import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  searchedProducts: [],
  searchWarning: false 
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },

    applyFilter(state, action) {
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
      state.filteredProducts.push(...revised);
    },

    search(state, action) {
        const searchResults = state.products.filter(product => product.title.toLowerCase().includes(action.payload.toLowerCase()))
        state.searchedProducts= [];
        state.searchedProducts.push(...searchResults)
        state.searchWarning = searchResults.length === 0;
        action.payload === "" ? state.searchWarning = true : "";
    }
  },
});

const store = configureStore({
  reducer: appSlice.reducer,
});

export const appActions = appSlice.actions;

export default store;


