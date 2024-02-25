import { useState } from 'react';

import FilterBar from 'components/FilterBar/FilterBar';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import MainNav from 'components/Navigation/Navigation';

const CatalogPage = () => {
  const [filterBrand, setFilterBrand] = useState('');

  const onSelectChange = event => {
    const { value } = event.target;
    setFilterBrand(value);
  };

  return (
    <div>
      <MainNav />
      <FilterBar
        setFilterBrand={setFilterBrand}
        onSelectChange={onSelectChange}
      />
      <AdvertsList filterBrand={filterBrand} />
    </div>
  );
};

export default CatalogPage;
