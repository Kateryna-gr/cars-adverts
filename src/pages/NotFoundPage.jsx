import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  align-items: center;
  margin: 60px auto;
`;

const NotFoundPage = () => {
  return (
    <Container>
      <div>
        This page doesn't exist! Return to {" "}
        <NavLink to="/">Home page</NavLink>
      </div>
    </Container>
  );
};

export default NotFoundPage;
