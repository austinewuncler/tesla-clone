import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
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
