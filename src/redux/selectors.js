import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.adverts.cars;

export const selectFavCars = state => state.adverts.favorites;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectFilterBrand = state => state.adverts.filterBrand;

export const selectFilterPrice = state => state.adverts.filterPrice;

export const selectFilterMileageMin = state => state.adverts.filterMileageMin;

export const selectFilterMileageMax = state => state.adverts.filterMileageMax;

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
