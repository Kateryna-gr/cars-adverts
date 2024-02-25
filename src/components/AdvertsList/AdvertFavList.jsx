// import { useEffect } from 'react';
// import { useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectFavCars,
} from '../../redux/selectors';
// import { addToFav, deleteFromFav } from '../../redux/operations';
import { ListContainer, LoadMoreButton } from './AdvertsList.styled';
import AdvertItem from './AdvertsItem';

const AdvertsFavList = () => {
  const favoritesCars = useSelector(selectFavCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(addToFav());
  //   }, [dispatch]);

  //   console.log(favoritesCars);
  return (
    <>
      {isLoading && <h5>Loading...</h5>}
      {error && <h5>Error...</h5>}
      {favoritesCars?.length ? (
        <>
          <ListContainer>
            {favoritesCars.map(car => (
              <li key={car.id}>
                <AdvertItem car={car} />
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
export default AdvertsFavList;
