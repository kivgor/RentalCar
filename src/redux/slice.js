import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './operations';
// import { selectNameFilter } from './filtersSlice';

const initialState = {
  cars: {
    items: [],
  },
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchData.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});
export const carReducer = slice.reducer;
export const selectCars = state => state.cars.cars.items;
export const selectIsLoading = state => state.cars.isLoading;
export const selectIsError = state => state.cars.isError;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (phonebook, statusFilter) => {
//     const newPhonebook = phonebook.filter(contact =>
//       contact.name
//         .toLowerCase()
//         .trim()
//         .includes(statusFilter.toLowerCase().trim())
//     );
//     return newPhonebook;
//   }
// );
