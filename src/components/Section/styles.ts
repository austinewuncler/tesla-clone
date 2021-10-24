import styled from 'styled-components';

export const SectionContainer = styled.div<{ bgImg: string }>`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: ${(props) => `url(/images/${props.bgImg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftButton = styled.div`
  display: flex;
  width: 256px;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin: 8px;
  background-color: rgb(23 26 32 / 80%);
  border-radius: 100px;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  opacity: 85%;
  text-transform: uppercase;
`;

export const RightButton = styled(LeftButton)`
  background-color: #fff;
  color: #000;
  opacity: 65%;
`;

export const DownArrow = styled.img`
  height: 40px;
  margin-top: 20px;
  animation: animate-down infinite 1.5s;
  overflow-x: hidden;
`;
