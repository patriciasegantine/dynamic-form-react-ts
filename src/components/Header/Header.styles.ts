import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: .5rem;
  }

  a {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props => props.theme['gray-100']};

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &.active {
      color: ${props => props.theme['brand-500']};
    }

    &:hover {
      border-bottom: 3px solid ${props => props.theme['brand-500']};
    }
  }


`

export const HeaderNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme['dark-blue']};
`
