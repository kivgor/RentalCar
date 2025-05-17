import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://car-rental-api.goit.global/';

export const fetchData = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/cars');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
