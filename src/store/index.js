import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice, {
  fetchCategories,
} from "./features/categories/categoriesSlice";
import productsSlice, {
  fetchProducts,
} from "./features/products/productsSlice";
import cartSlice from "./features/cart/cartSlice";
import saleSlice from "./features/sale/saleSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    cart: cartSlice,
    sale: saleSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

store.dispatch(fetchCategories());
store.dispatch(fetchProducts());
