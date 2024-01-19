import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../constants";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios(`${BASE_URL}/products/all`);
    const data = await res.data;
    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;

export const selectAllProducts = (state) => state.products.data;
export const selectCategoryProducts = createSelector(
  selectAllProducts,
  (_, categoryId) => categoryId,
  (products, categoryId) =>
    products.filter((product) => product.categoryId === categoryId)
);
export const selectSaleProducts = createSelector(
  selectAllProducts,
  (products) => products.filter((product) => product.discont_price)
);
export const selectSaleProductsDashboard = createSelector(
  selectSaleProducts,
  (productsWithDiscount) => productsWithDiscount.slice(0, 4)
);
export const selectProductById = createSelector(
  selectAllProducts,
  (_, productId) => productId,
  (products, productId) =>
    products.find((product) => Number(product.id) === Number(productId)) || {}
);
