import { LinkNav } from 'components/AuthNav/AuthNav.styled';
import styled from 'styled-components';

const Container = styled.div`
width: 400px;
  align-items: center;
  margin: 60px auto;
`;

export default function NotFound() {
  return (
    <Container>
      <div>
        This page doesn't exist! Return to 
        <LinkNav to="/">Home page</LinkNav>
      </div>
    </Container>
  );
}
