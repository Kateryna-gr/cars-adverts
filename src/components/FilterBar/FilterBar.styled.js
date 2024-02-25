import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  gap: 18px;
  width: 859px;
  height: 74px;
  margin: 150px auto 50px;
`;

export const StyledTitle = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--filterTitleColor);
  height: 18px;
  margin-bottom: 8px;
`;

export const StyledOption = styled.option`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: var(--filterUnactiveColor);
  height: 20px;
  margin-bottom: 8px;

  &:hover {
    color: var(--filterTitleColor);
  }
`;

export const StyledField = styled(Field)`
  border-radius: 14px;
  padding: 14px 14px 14px 18px;
  width: 224px;
  height: 48px;
  border: none;
  background: var(--filterBackground);
  position: relative;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: var(--primaryTextColor);

  &.price {
    width: 125px;
  }

  &.mileagemin {
    border-radius: 14px 0 0 14px;
    width: 160px;
  }

  &.mileagemax {
    border-radius: 0 14px 14px 0;
    width: 160px;
  }
`;

export const Button = styled.button`
  border-radius: 12px;
  padding: 14px 44px;
  width: 136px;
  height: 48px;
  border: none;
  background: var(--accent-color);
  margin-top: auto;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--buttonTextColor);

  &:hover,
  &:focus {
    background: var(--accent-hover-color);
    cursor: pointer;
  }
`;
