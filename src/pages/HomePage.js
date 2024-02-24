// import { useAuth } from 'redux/auth/useAuthHook';
import styled from 'styled-components';

const Container = styled.div`
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  `;

// const LinkText = styled.div`
//   width: 350px;
//   margin: 0 auto;
// `;

const Title = styled.h1`
    fontWeight: 460,
    fontSize: 48,
`;

const HomePage = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <Container>
      <Title>Welcome to cars adverts site</Title>
    </Container>
  );
};
export default HomePage;
