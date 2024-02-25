import { useState } from 'react';

import icon from '../../images/sprite.svg';
import {
  ItemContainer,
  ItemImage,
  ItemIcon,
  ItemTitleWrapper,
  ItemTitleModel,
  ItemTitlePrice,
  ItemDetailsWrapper,
  ItemDetail,
  ItemButton,
} from './AdvertsList.styled';
import AdvertModal from 'components/CarAdvertModal/AdvertModal';

const AdvertItem = ({ car }) => {
  const address = car.address.split(', ');
  const country = address[address.length - 1];
  const city = address[address.length - 2];

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <ItemContainer onClick={openModal}>
        <ItemImage image={car.img} />
        <ItemIcon>
          <svg width="18" height="18">
            <use href={`${icon}#heart`}></use>
          </svg>
        </ItemIcon>
        <ItemTitleWrapper>
          {car.make} <ItemTitleModel>{car.model}</ItemTitleModel>
          {', '} {car.year}
          <ItemTitlePrice>{car.rentalPrice}</ItemTitlePrice>
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

        <ItemButton onClick={openModal}>Learn more</ItemButton>
      </ItemContainer>
      <AdvertModal
        style={{ backroundColor: 'var(--secondaryTextColor)' }}
        car={car}
        isOpen={isOpen}
        openModal={openModal}
        closeModal={() => setIsOpen(false)}
      />
    </>
  );
};

export default AdvertItem;
