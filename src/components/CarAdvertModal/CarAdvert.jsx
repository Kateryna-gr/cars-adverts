import icon from '../../images/sprite.svg';
import {
  AdvertContainer,
  ItemIcon,
  ItemImage,
  ItemTitleWrapper,
  ItemTitleModel,
  ItemDetailsWrapper,
  ItemDetail,
  ItemDescr,
  ItemAccessoriesTitle,
  ItemConditionFlex,
  ItemConditionWrapper,
  ItemConditionTitle,
  ItemConditionSpan,
  ItemButton,
  ButtonTel,
} from './AdvertModal.styled';

const CarAdvert = ({ car, closeModal }) => {
  return (
    <AdvertContainer>
      <ItemIcon onClick={closeModal}>
        <svg width="12" height="12">
          <use href={`${icon}#close`}></use>
        </svg>
      </ItemIcon>
      <ItemImage image={car.img} />

      <ItemTitleWrapper>
        {car.make} <ItemTitleModel>{car.model}</ItemTitleModel>
        {', '} {car.year}
      </ItemTitleWrapper>
      <ItemDetailsWrapper>
        {/* <ItemDetail>{city}</ItemDetail>
          <ItemDetail>{country}</ItemDetail> */}
        <ItemDetail>Id: {car.id}</ItemDetail>
        <ItemDetail>Year: {car.year}</ItemDetail>
        <ItemDetail>Type: {car.type}</ItemDetail>
        <ItemDetail>Fuel Consumption: {car.fuelConsumption}</ItemDetail>
        <ItemDetail>Engine Size: {car.engineSize}</ItemDetail>
      </ItemDetailsWrapper>
      <ItemDescr>{car.description}</ItemDescr>
      <ItemAccessoriesTitle>
        Accessories and functionalities:
      </ItemAccessoriesTitle>
      <ItemDetailsWrapper className="accessories">
        <ItemDetail>{car.accessories[0]}</ItemDetail>
        <ItemDetail>{car.accessories[1]}</ItemDetail>
        <ItemDetail>{car.accessories[2]}</ItemDetail>
      </ItemDetailsWrapper>
      <ItemDetailsWrapper className="functionalities">
        <ItemDetail>{car.functionalities[0]}</ItemDetail>
        <ItemDetail>{car.functionalities[1]}</ItemDetail>
        <ItemDetail>{car.functionalities[2]}</ItemDetail>
      </ItemDetailsWrapper>
      <ItemAccessoriesTitle>Rental Conditions:</ItemAccessoriesTitle>
      <ItemConditionFlex>
        <ItemConditionWrapper>
          <ItemConditionTitle>
            Minimum age:{' '}
            <ItemConditionSpan>{2024 - car.year}</ItemConditionSpan>
          </ItemConditionTitle>
        </ItemConditionWrapper>
        <ItemConditionWrapper>
          <ItemConditionTitle>Valid driver’s license</ItemConditionTitle>
        </ItemConditionWrapper>
        <ItemConditionWrapper>
          <ItemConditionTitle>Security deposite required</ItemConditionTitle>
        </ItemConditionWrapper>
        <ItemConditionWrapper>
          <ItemConditionTitle>
            Mileage: <ItemConditionSpan>{car.mileage}</ItemConditionSpan>
          </ItemConditionTitle>
        </ItemConditionWrapper>
        <ItemConditionWrapper>
          <ItemConditionTitle>
            Price: <ItemConditionSpan>{car.rentalPrice}</ItemConditionSpan>
          </ItemConditionTitle>
        </ItemConditionWrapper>
      </ItemConditionFlex>
      <ItemButton>
        <ButtonTel href="tel:+380730000000">Rental car</ButtonTel>
      </ItemButton>
    </AdvertContainer>
  );
};

export default CarAdvert;
