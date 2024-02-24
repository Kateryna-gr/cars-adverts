import { LoginForm } from 'components/LoginForm/LoginForm';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  margin: 60px auto;
`;

export default function Login() {
  return (
    <Container>
      <title>Login</title>
      <LoginForm />
    </Container>
  );
}
