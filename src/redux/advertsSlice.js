import { createSlice } from '@reduxjs/toolkit';
import { getAllAdverts, addToFav, deleteFromFav } from './operations';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    cars: [],
    favorites: [],
    filterBrand: '',
    filterPrice: '',
    filterMileageMin: '',
    filterMileageMax: '',
    isLoading: false,
    error: null,
  },

  reducers: {
    changeFilterBrand(state, { payload }) {
      state.filterBrand = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getAllAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cars = payload;
      })
      .addCase(getAllAdverts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addToFav.pending, state => {
        state.isLoading = true;
      })
      .addCase(addToFav.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const { data, id } = payload;
        const car = data.find(car => car.id === id);
        state.favorites.push(car);
      })
      .addCase(addToFav.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteFromFav.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteFromFav.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const id = payload;
        const index = state.favorites.findIndex(car => car.id === id);
        state.favorites.splice(index, 1);
      })
      .addCase(deleteFromFav.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { changeFilterBrand } = advertsSlice.actions;

export const advertsReducer = advertsSlice.reducer;
