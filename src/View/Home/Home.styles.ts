import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContainerButtonHome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 5rem;
`

export const HomeNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  text-decoration: none;

  background: #F97268;
  border: none;
  border-radius: 1rem;
  height: 40px;
  width: 100%;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin: 10px auto;

  p {
    margin-left: .7rem;
  }

  &:hover {
    opacity: .9;
    transition: ease .1s;
  }
`
