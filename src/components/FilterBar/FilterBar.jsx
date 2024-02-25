import { Formik } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  StyledField,
  StyledForm,
  StyledOption,
  StyledTitle,
} from './FilterBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectFilterBrand } from 'redux/selectors';
import { changeFilterBrand } from 'redux/filterSlice';

const FilterBar = () => {
  const allCars = useSelector(selectCars);
  const filterBrand = useSelector(selectFilterBrand);
  console.log(filterBrand);

  const brandNames = [];
  allCars.map(car => brandNames.push(car.make));
  brandNames.sort();
  for (let i = 0; i < brandNames.length; i++) {
    if (brandNames[i] === brandNames[i + 1]) {
      brandNames.splice(i, 1);
    }
  }

  // const prices = [];
  // allCars.map(car => prices.push(car.rentalPrice));

  const dispatch = useDispatch();


  return (
    <Formik
      initialValues={{ brand: '', price: '', mileageMin: '', mileageMax: '' }}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(changeFilterBrand(values.brand));
        // actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          <StyledTitle>Car brand</StyledTitle>
          <StyledField as="select" name="brand">
            {brandNames.map(brand => (
              <StyledOption key={brand} name="brand" value={brand}>
                {brand}
              </StyledOption>
            ))}
          </StyledField>
        </label>
        <label>
          <StyledTitle>Price/ 1 hour</StyledTitle>
          <StyledField className="price" as="select" name="price" />
        </label>
        <label>
          <StyledTitle>Car mileage / km</StyledTitle>
          <StyledField className="mileagemin" type="text" name="mileageMin" />
          <StyledField className="mileagemax" type="text" name="mileageMax" />
        </label>
        <Button type="submit">Search</Button>
      </StyledForm>
    </Formik>
  );
};

export default FilterBar;
