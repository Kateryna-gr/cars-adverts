import styled from 'styled-components';
import { Form } from 'formik';
import { Button } from '@mui/material';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  margin: 24px 0 10px;
`;

export const StyledButton = styled(Button)`
  height: 25px;
  background-color: #e3e3e3;
  border: 2px solid #d5d5d5;
  border-radius: 5px;

  &:hover,
  &:active {
    background-color: #949494;
    border-color: #747474;
    cursor: pointer;
  }
`;
