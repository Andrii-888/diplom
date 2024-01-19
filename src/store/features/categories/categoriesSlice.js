import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../constants";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
  const res = await axios(`${BASE_URL}/categories/all`);
  const data = await res.data;
  return data;
});

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default categoriesSlice.reducer;

export const selectAllCategories = (state) => state.categories.data;
export const selectHomeCategories = createSelector(selectAllCategories, (categories) => categories.slice(0, 4));
export const selectCategoryTitleById = createSelector(
  selectAllCategories,
  (_, categoryId) => categoryId,
  (categories, categoryId) => categories.find((category) => category.id === categoryId)?.title || "",
);