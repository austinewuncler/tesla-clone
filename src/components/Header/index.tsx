import React from 'react';

import { CustomMenu, HeaderContainer, Menu, RightMenu } from './styles';

const Header = () => (
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
      <CustomMenu />
    </RightMenu>
  </HeaderContainer>
);

export default Header;
