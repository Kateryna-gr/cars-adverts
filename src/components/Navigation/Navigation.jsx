import { NavigationLink, Navigation } from './Navigation.styled';

const MainNav = () => {
  return (
    <Navigation>
      <NavigationLink to="/catalog">Catalog</NavigationLink>
      <NavigationLink to="/favorites">Favorites</NavigationLink>
    </Navigation>
  );
};

export default MainNav;
