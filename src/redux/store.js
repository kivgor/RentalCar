import { configureStore } from '@reduxjs/toolkit';
import { carReducer } from './cars/slice.js';

export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});
