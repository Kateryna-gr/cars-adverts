import FilterBar from 'components/FilterBar/FilterBar';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import MainNav from 'components/Navigation/Navigation';

const CatalogPage = () => {
  return (
    <div>
      <MainNav />
      <FilterBar />
      <AdvertsList />
    </div>
  );
};

export default CatalogPage;
