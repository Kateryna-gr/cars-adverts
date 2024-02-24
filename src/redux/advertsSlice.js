import { createSlice } from '@reduxjs/toolkit';
import { getAllAdverts, getCarDetails } from './operations';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    cars: [],
    carDetails: {},
    filters: {
      brand: null,
      price: null,
      mileageMin: null,
      mileageMax: null,
    },
    isLoading: false,
    error: null,
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
      .addCase(getCarDetails.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCarDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.carDetails = payload;
      })
      .addCase(getCarDetails.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
