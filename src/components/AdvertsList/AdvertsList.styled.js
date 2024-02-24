import styled from 'styled-components';

export const ListContainer = styled.ul`
  width: 1183px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 50px;
`;

export const ItemContainer = styled.div`
  width: 274px;
  height: 426px;
  position: relative;
`;

export const ItemImage = styled.div`
  border-radius: 14px;
  height: 268px;
  margin-bottom: 14px;

  background-image: ${props => props.image !== '' && `url("${props.image}")`};
  background-size: cover;
`;

export const ItemIcon = styled.div`
  width: 18px;
  height: 18px;
  fill: none;
  stroke-width: 1.5px;
  stroke-opacity: 0.8;
  stroke: var(--buttonTextColor);

  position: absolute;
  top: 14px;
  right: 14px;

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
  font-size: 16px;
  line-height: 18.24px;
  color: var(--primaryTextColor);

  height: 24px;
  margin-bottom: 8px;
`;

export const ItemTitleModel = styled.span`
  color: var(--accent-color);
`;

export const ItemDetailsWrapper = styled.div`
  max-height: 40px;
  margin-bottom: 28px;

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const ItemDetail = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 13.68px;
  color: var(--secondaryTextColor);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: calc(100% + 6px);
    height: 16px;
    border: 1px solid var(--secondaryTextColor);
  }
`;

export const ItemButton = styled.button`
  border: none;
  border-radius: 12px;
  padding: 12px 99px;
  width: 274px;
  height: 44px;
  background: var(--accent-color);
  margin-bottom: 0;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 15.96px;
  color: var(--buttonTextColor);

  &:hover,
  &:focus {
    background: var(--accent-hover-color);
    cursor: pointer;
  }
`;
