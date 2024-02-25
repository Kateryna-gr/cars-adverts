import { Field, Formik } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
import { Button, StyledField, StyledForm, StyledTitle } from './FilterBar.styled';

const FilterBar = () => {

  return (
    <Formik
      initialValues={{ brand: '', price: '', mileageMin: '', mileageMax: '' }}
      onSubmit={(values, actions) => {
        console.log(values);
        // actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          <StyledTitle>Car brand</StyledTitle>
          <StyledField type="select" name="brand" />
        </label>
        <label>
          <StyledTitle>Price/ 1 hour</StyledTitle>
          <StyledField className="price" type="select" name="price" />
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
