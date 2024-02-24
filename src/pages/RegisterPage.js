import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  margin: 60px auto;
`;

export default function Register() {
  return (
    <Container>
      <title>Registration</title>
      <RegisterForm />
    </Container>
  );
}
