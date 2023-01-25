import { HeaderContainer, HeaderNavLink } from './Header.styles';
import { House, UserCirclePlus, UserList } from "phosphor-react";
import React from "react";
import { RouterEnum } from "../../@enum/RouterEnum";

export const Header = () => {
  
  return (
    <HeaderContainer>
      <div>
        imagem
      </div>
      
      <nav>
        <HeaderNavLink
          to={RouterEnum.Home}
          title="Timer">
          <House size={25}/>
        </HeaderNavLink>
        
        <HeaderNavLink
          to={RouterEnum.CreateDynamicForm}
          title="Timer">
          <UserCirclePlus size={25}/>
        </HeaderNavLink>
        
        <HeaderNavLink
          to={RouterEnum.ShowDynamicForm}
          title="History">
          <UserList size={25}/>
        </HeaderNavLink>
      </nav>
    </HeaderContainer>
  )
}
