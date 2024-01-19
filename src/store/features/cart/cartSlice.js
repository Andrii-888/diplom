import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import uniqid from "uniqid";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  status: "idle",
};

export const submitOrder = createAsyncThunk(
  "cart/submitOrder",
  async (data) => {
    const res = await axios.post(`${BASE_URL}/order/send`, data);
    if (res.status === 200) {
      const id = uniqid();

      localStorage.setItem(`cart-${id}`, JSON.stringify(data));
      return await res.data;
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      if (
        !state.products.find(
          (product) => +product.item.id === +action.payload.id
        )
      ) {
        state.products.push({
          amount: 1,
          item: action.payload,
        });
      }
    },
    removeAllFromCart(state) {
      state.products = [];
    },
    removeFromCart(state, action) {
      const idx = state.products.findIndex(
        (product) => +product.item.id === +action.payload
      );

      state.products.splice(idx, 1);
    },
    resetCartStatus(state) {
      state.status = "idle";
    },
    changeProductAmount(state, action) {
      const idx = state.products.findIndex((product) => {
        return +product.item.id === +action.payload.id;
      });

      if (idx >= 0) {
        const isOperationNotAllowed =
          !action.payload.operand &&
          state.products[idx].amount + action.payload.operand === 1;

        state.products[idx].amount = isOperationNotAllowed
          ? state.products[idx].amount
          : state.products[idx].amount + action.payload.operand;
        if (!state.products[idx].amount && action.payload.operand < 0) {
          state.products.splice(idx, 1);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitOrder.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(submitOrder.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(submitOrder.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "error";
    });
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  resetCartStatus,
  changeProductAmount,
  removeAllFromCart,
} = cartSlice.actions;

export const selectCartProducts = (state) => state.cart.products;
export const selectCartStatus = (state) => state.cart.status;
export const selectCartError = (state) => state.cart.error;
export const selectCartProductsLength = (state) => state.cart.products.length;
export const selectProductInCartById = createSelector(
  selectCartProducts,
  (_, productId) => productId,
  (products, productId) =>
    !!products.find((product) => +product.item.id === +productId)
);
export const selectCartTotal = createSelector(selectCartProducts, (products) =>
  products.reduce((total, product) => {
    return (
      total +
      product.amount *
        (product.item.discont_price
          ? product.item.discont_price
          : product.item.price)
    );
  }, 0)
);
