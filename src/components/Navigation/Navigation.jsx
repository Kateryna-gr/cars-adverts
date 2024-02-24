import { NavLink } from 'react-router-dom';
import { useAuth } from 'redux/auth/useAuthHook';
import styled from 'styled-components';

export const LinkNav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  .active {
    color: #e84a5f;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <LinkNav to="/">Home</LinkNav>
      {isLoggedIn && <LinkNav to="/contacts">Contacts</LinkNav>}
    </nav>
  );
};
