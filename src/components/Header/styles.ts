import { Close } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  padding: 0 20px;
`;

export const Menu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  a {
    flex-wrap: nowrap;
    padding: 0 10px;
    font-weight: 600;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 10px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

export const BurgerNav = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  padding: 20px;
  background-color: #fff;
  list-style: none;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgb(0 0 0 / 20%);

    a {
      font-weight: 600;
    }
  }
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseIcon = styled(Close)`
  cursor: pointer;
`;
