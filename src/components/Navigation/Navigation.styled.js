import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.div`
  display: flex;
  gap: 28px;
  padding: 16px 60px;
  font-size: 18px;
`;

export const NavigationLink = styled(NavLink)`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--secondaryTextColor);

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: var(--accentColor);
    font-weight: 700;
  }
`;
