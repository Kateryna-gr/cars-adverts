import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.adverts.cars;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectFilterBrand = state => state.adverts.filters.brand;

export const selectFilterPrice = state => state.adverts.filters.price;

export const selectFilterMileageMin = state => state.adverts.filters.mileageMin;

export const selectFilterMileageMax = state => state.adverts.filters.mileageMax;

export const selectCurrentCars = createSelector(
  [
    selectCars,
    selectFilterBrand,
    selectFilterPrice,
    selectFilterMileageMin,
    selectFilterMileageMax,
  ],
  (cars, filterBrand, filterPrice, filterMileageMin, filterMileageMax) => {
    let currentCars = cars;
    if (!filterBrand && !filterPrice && !filterMileageMin && !filterMileageMax)
      return cars;
    if (filterBrand)
      currentCars.filter(car =>
        car.make.toLowerCase().includes(filterBrand.toLowerCase())
      );
    if (filterPrice) currentCars.filter(car => car.rentalPrice === filterPrice);
    if (filterMileageMin)
      currentCars.filter(car => car.mileage >= filterMileageMin);
    if (filterMileageMax)
      currentCars.filter(car => car.mileage <= filterMileageMax);
    if (filterMileageMin && filterMileageMax)
      currentCars.filter(
        car =>
          car.mileage >= filterMileageMin && car.mileage <= filterMileageMax
      );
    return currentCars;
  }
);
