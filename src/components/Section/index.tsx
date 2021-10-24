import React from 'react';

import {
  ButtonGroup,
  Buttons,
  DownArrow,
  ItemText,
  LeftButton,
  RightButton,
  SectionContainer,
} from './styles';

interface SectionProps {
  title: string;
  description?: string;
  leftButtonText: string;
  rightButtonText?: string;
  backgroundImage: string;
}

const Section = ({
  title,
  description,
  leftButtonText,
  rightButtonText,
  backgroundImage,
}: SectionProps) => (
  <SectionContainer bgImg={backgroundImage}>
    <ItemText>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </ItemText>
    <Buttons>
      <ButtonGroup>
        <LeftButton>{leftButtonText}</LeftButton>
        {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
      </ButtonGroup>
      <DownArrow src="/images/down-arrow.svg" />
    </Buttons>
  </SectionContainer>
);

Section.defaultProps = {
  description: '',
  rightButtonText: '',
};

export default Section;
