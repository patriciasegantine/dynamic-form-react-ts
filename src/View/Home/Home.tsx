import React from 'react';
import { ContainerButtonHome, HomeNavLink } from "./Home.styles";
import { Container } from "../../Global.styles";
import { UserCirclePlus, UserList } from "phosphor-react";

export const Home = () => {
  return (
    <Container>
      
      <ContainerButtonHome>
        <HomeNavLink
          to="/create-dynamic-form"
          title="Create dynamic form"
        >
          <UserCirclePlus size={50}/>
          <p> Create a Dynamic Form</p>
        </HomeNavLink>
        
        <HomeNavLink
          to="/show-dynamic-form"
          title="Show dynamic form"
        >
          <UserList size={50}/>
          <p> Show Dynamic Form</p>
        </HomeNavLink>
      
      
      </ContainerButtonHome>
    </Container>
  );
};
