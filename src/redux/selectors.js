import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars;

export const selectIsLoading = state => state.isLoading;

export const selectError = state => state.error;

// export const selectFilterName = state => state.filter.name;

export const selectCurrentCars = createSelector(
  // [selectCars, selectFilterName],
  // (cars, filterName) => {
  //   if (!filterName) return cars;
  //   else {
  //     return cars.filter(car =>
  //       car.name.toLowerCase().includes(filterName.toLowerCase())
  //     );
  //   }
  // }
);
