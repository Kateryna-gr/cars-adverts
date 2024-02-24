import styled from 'styled-components';
import { Button } from '@mui/material';

export const ButtonContainer = styled.span`
  margin-left: 20px;
`;

export const ButtonDelete = styled(Button)`
  height: 26px;
  font-size: 12px;
  background-color: #e3e3e3;
  border: 2px solid #d5d5d5;
  border-radius: 3px;

  &:hover,
  &:active {
    background-color: #949494;
    border-color: #747474;
    cursor: pointer;
  }
`;
