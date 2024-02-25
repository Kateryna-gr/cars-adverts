import FilterBar from 'components/FilterBar/FilterBar';
import AdvertsFavList from 'components/AdvertsList/AdvertFavList';
import MainNav from 'components/Navigation/Navigation';

const FavoritesPage = () => {
  return (
    <div>
      <MainNav />
      <FilterBar />
      <AdvertsFavList />
    </div>
  );
};

export default FavoritesPage;
