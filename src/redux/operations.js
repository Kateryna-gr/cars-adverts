import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCars, getOneCar } from 'services/api';

export const getAllAdverts = createAsyncThunk(
  'adverts/getAllAdverts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllCars();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCarDetails = createAsyncThunk(
  'adverts/getCarDetails',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await getOneCar(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
