import React, { useState } from 'react';

import { useAppSelector } from '../../app/hooks';
import { selectCars } from '../../features/car/carSlice';
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
  const cars = useAppSelector(selectCars);

  return (
    <HeaderContainer>
      <a href="/">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car) => (
            <a key={car} href="/">
              {car}
            </a>
          ))}
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
        {cars &&
          cars.map((car) => (
            <li key={car}>
              <a href="/">{car}</a>
            </li>
          ))}
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
