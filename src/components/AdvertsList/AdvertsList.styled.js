import styled from 'styled-components';

export const ListContainer = styled.ul`
  width: 1183px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
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
  background-position: center;
`;

export const ItemIcon = styled.div`
  width: 18px;
  height: 18px;
  fill: none;
  stroke-width: 1.5px;
  stroke-opacity: 0.8;
  stroke: var(--whiteColor);

  position: absolute;
  top: 14px;
  right: 14px;

  &.active,
  &:hover {
    fill: var(--accentColor);
    stroke: var(--accentColor);
    cursor: pointer;
  }
`;

export const ItemTitleWrapper = styled.div`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--primaryTextColor);

  height: 24px;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const ItemTitleModel = styled.span`
  color: var(--accentColor);
`;

export const ItemTitlePrice = styled.span`
  position: absolute;
  right: 0;
`;

export const ItemDetailsWrapper = styled.div`
  height: 40px;
  margin-bottom: 28px;

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  row-gap: 4px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 40px;
    width: 274px;
    height: 28px;
    background: var(--whiteColor);
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

export const ItemButton = styled.button`
  border: none;
  border-radius: 12px;
  padding: 12px 99px;
  width: 274px;
  height: 44px;
  background: var(--accentColor);
  margin-bottom: 0;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--buttonTextColor);

  &:hover {
    background: var(--accentHoverColor);
    cursor: pointer;
  }
`;

export const LoadMoreButton = styled.button`
  display: block;
  border: none;
  background: none;
  width: 120px;
  height: 44px;
  padding: 10px 20px;
  margin: 100px auto 150px;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--accentColor);

  &:hover {
    color: var(--accentHoverColor);
    cursor: pointer;
  }
`;
