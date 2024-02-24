import icon from '../../images/sprite.svg';
import {
  ItemContainer,
  ItemImage,
  ItemIcon,
  ItemTitleWrapper,
  ItemTitleModel,
  ItemDetailsWrapper,
  ItemDetail,
  ItemButton,
} from './AdvertsList.styled';

const AdvertItem = ({ car }) => {
  const address = car.address.split(', ');
  const country = address[address.length - 1];
  const city = address[address.length - 2];
  return (
    <>
      <ItemContainer>
        <ItemImage image={car.img} />
        <ItemIcon>
          <svg width="18" height="18">
            <use href={`${icon}#heart`}></use>
          </svg>
        </ItemIcon>
        <ItemTitleWrapper>
          {car.make}{' '}
          <ItemTitleModel>
            {car.model}
            {', '}
          </ItemTitleModel>
          {car.rentalPrice}
        </ItemTitleWrapper>
        <ItemDetailsWrapper>
          <ItemDetail>{city}</ItemDetail>
          <ItemDetail>{country}</ItemDetail>
          <ItemDetail>{car.rentalCompany}</ItemDetail>
          <ItemDetail>{car.type}</ItemDetail>
          <ItemDetail>{car.model}</ItemDetail>
          <ItemDetail>{car.id}</ItemDetail>
          <ItemDetail>{car.accessories[0]}</ItemDetail>
        </ItemDetailsWrapper>
        <ItemButton>Learn more</ItemButton>
      </ItemContainer>
    </>
  );
};

export default AdvertItem;
