import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectCars,
} from '../../redux/selectors';
import { getAllAdverts } from '../../redux/operations';
import { ListContainer } from './AdvertsList.styled';
import AdvertItem from './AdvertsItem';

const AdvertsList = () => {
  const currentCars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAdverts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <h5>Loading...</h5>}
      {error && <h5>Error...</h5>}
      {currentCars?.length ? (
        <ListContainer>
          {currentCars.map(car => (
            <li key={car.id}>
              <AdvertItem car={car} />
            </li>
          ))}
        </ListContainer>
      ) : (
        <h5>No cars</h5>
      )}
    </>
  );
};
export default AdvertsList;
