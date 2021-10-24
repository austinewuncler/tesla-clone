import React, { useState } from 'react';

import {
  BurgerNav,
  CloseIcon,
  CloseWrapper,
  CustomMenu,
  HeaderContainer,
  Menu,
  RightMenu,
} from './styles';

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <HeaderContainer>
      <a href="/">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        <a href="/">Model S</a>
        <a href="/">Model X</a>
        <a href="/">Model 3</a>
        <a href="/">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="/">Show</a>
        <a href="/">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CloseIcon onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="/">Existing Inventory</a>
        </li>
        <li>
          <a href="/">Used Inventory</a>
        </li>
        <li>
          <a href="/">Trade-In</a>
        </li>
        <li>
          <a href="/">Cybertruck</a>
        </li>
        <li>
          <a href="/">Roadster</a>
        </li>
      </BurgerNav>
    </HeaderContainer>
  );
};

export default Header;
