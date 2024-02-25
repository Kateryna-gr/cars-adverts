import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCars, getOneCar } from 'services/api';

export const getAllAdverts = createAsyncThunk(
  'adverts/getAllAdverts',
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await getAllCars(page);
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

export const addToFav = createAsyncThunk(
  'adverts/addToFav',
  async (id, { rejectWithValue }) => {
    try {
      // const { data } = await getAllCars();
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFromFav = createAsyncThunk(
  'adverts/deleteFromFav',
  async (id, { rejectWithValue }) => {
    try {
      // const { data } = await getAllCars();
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
