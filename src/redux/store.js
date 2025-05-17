import { configureStore } from '@reduxjs/toolkit';
import { carReducer } from './slice';
// import { filterReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    cars: carReducer,
    // filters: filterReducer,
  },
});
