import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectCars,
  // selectFavCars,
} from '../../redux/selectors';
import { getAllAdverts } from '../../redux/operations';
import { ListContainer, LoadMoreButton } from './AdvertsList.styled';
import AdvertItem from './AdvertsItem';
// import { addToFav, deleteFromFav } from 'redux/operations';

const AdvertsList = () => {
  const currentCars = useSelector(selectCars);
  // const favCars = useSelector(selectFavCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAdverts());
  }, [dispatch]);

  // const handleAddToFav = id => {
  //   const isFav = favCars.findIndex(car => car.id === id);
  //   if (isFav === -1) {
  //     dispatch(addToFav(id));
  //   } else dispatch(deleteFromFav(id));
  // };

  return (
    <>
      {isLoading && <h5>Loading...</h5>}
      {error && <h5>Error...</h5>}
      {currentCars?.length ? (
        <>
          <ListContainer>
            {currentCars.map(car => (
              <li key={car.id}>
                <AdvertItem car={car}  />
                {/* <AdvertItem car={car} handleAddToFav={handleAddToFav} /> */}
              </li>
            ))}
          </ListContainer>
          <LoadMoreButton>Load more</LoadMoreButton>
        </>
      ) : (
        <h5>No cars</h5>
      )}
    </>
  );
};
export default AdvertsList;