import { LinkNav } from 'components/AuthNav/AuthNav.styled';
import { useAuth } from 'redux/auth/useAuthHook';
import styled from 'styled-components';

const Container = styled.div`
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  `;

const LinkText = styled.div`
  width: 350px;
  margin: 0 auto;
`;

const Title = styled.h1`
    fontWeight: 460,
    fontSize: 48,
`;

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <Title>Welcome to contacts book</Title>
      {isLoggedIn ? (
        <LinkText>
          Return to your saved
          <LinkNav to="/contacts">Contacts</LinkNav>
        </LinkText>
      ) : (
        <LinkText>
          <LinkNav to="/register">Register</LinkNav> or
          <LinkNav to="/login">Log In</LinkNav>
          to save your contacts
        </LinkText>
      )}
    </Container>
  );
}
