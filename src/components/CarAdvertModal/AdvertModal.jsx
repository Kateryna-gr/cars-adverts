import Modal from 'react-modal';
import CarAdvert from './CarAdvert';
import { ModalContainer } from './AdvertModal.styled';
Modal.setAppElement('#root');

const AdvertModal = ({ car, isOpen, closeModal }) => {
  return (
    <ModalContainer isOpen={isOpen} onRequestClose={closeModal}>
      <CarAdvert car={car} closeModal={closeModal} />
    </ModalContainer>
  );
};

export default AdvertModal;
