import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  `;

const Title = styled.h1`
    fontWeight: 460,
    fontSize: 48,
`;

const HomePage = () => {
  return (
    <Container>
      <Title>Welcome to cars adverts site</Title>
      <Title>
        Go to <NavLink to="/catalog">Catalog</NavLink>
      </Title>
    </Container>
  );
};
export default HomePage;
