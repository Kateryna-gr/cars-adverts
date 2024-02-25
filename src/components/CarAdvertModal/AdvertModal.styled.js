import styled from 'styled-components';
import Modal from 'react-modal';

export const ModalContainer = styled(Modal)`
  border-radius: 24px;
  width: 541px;
  min-height: 752px;
  position: relative;
  border: none;
  backround-color: red;

  top: 50px;
  left: 50%;
  bottom: 150px;
  transform: translate(-50%, 0);
  padding: 0%;
  z-index: 1000;

  &.ReactModal__Overlay--after-open {
    backround-color: var(--secondaryTextColor);
  }
`;

export const AdvertContainer = styled.div`
  border-radius: 24px;
  width: 541px;
  min-height: 752px;
  padding: 40px;
  border: none;
  background: var(--whiteColor);
  position: relative;
`;

export const ItemImage = styled.div`
  border-radius: 14px;
  width: 461px;
  height: 248px;

  background-image: ${props => props.image !== '' && `url("${props.image}")`};
  background-size: cover;
  background-position: center;
`;

export const ItemIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  fill: none;
  stroke-width: 1.5px;
  stroke-opacity: 0.8;
  stroke: var(--primaryTextColor);

  position: absolute;
  top: 16px;
  right: 16px;

  &.active,
  &:hover {
    fill: var(--accent-color);
    stroke: var(--accent-color);
    cursor: pointer;
  }
`;

export const ItemTitleWrapper = styled.div`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: var(--primaryTextColor);

  height: 24px;
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const ItemTitleModel = styled.span`
  color: var(--accent-color);
`;

export const ItemDetailsWrapper = styled.div`
  min-height: 40px;
  width: 400px;
  margin-bottom: 14px;

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  row-gap: 4px;
  position: relative;

  &.accessories {
    min-height: 18px;
    margin-bottom: 4px;
  }

  &.functionalities {
    min-height: 18px;
    margin-bottom: 0;
  }
`;

export const ItemDetail = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: var(--secondaryTextColor);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: calc(100% + 6px);
    height: 16px;
    border: 1px solid var(--secondaryTextColor);
  }

  &:last-child::after {
    content: '';
    position: absolute;
    left: calc(100% + 6px);
    height: 0;
    border: none;
  }
`;

export const ItemDescr = styled.div`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--primaryTextColor);

  min-height: 40px;
`;

export const ItemAccessoriesTitle = styled.div`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--primaryTextColor);

  height: 20px;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const ItemConditionFlex = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const ItemConditionWrapper = styled.div`
  border-radius: 35px;
  padding: 7px 14px;
  height: 32px;
  background: var(--conditionBgColor);
`;

export const ItemConditionTitle = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: var(--conditionTextColor);
`;

export const ItemConditionSpan = styled.span`
  font-weight: 600;
  color: var(--accent-color);
`;

export const ItemButton = styled.button`
  border: none;
  border-radius: 12px;
  padding: 12px 50px;
  width: 168px;
  height: 44px;
  background: var(--accent-color);

  font-family: var(--font-family);
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--buttonTextColor);

  &:hover,
  &:focus {
    background: var(--accent-hover-color);
    cursor: pointer;
  }
`;

export const ButtonTel = styled.a`
  color: var(--buttonTextColor);

  &:hover,
  &:focus,
  &:active {
    color: var(--buttonTextColor);
    cursor: pointer;
  }
`;

