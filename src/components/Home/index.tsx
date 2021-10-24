import React from 'react';

import Section from '../Section';
import HomeContainer from './styles';

const Home = () => (
  <HomeContainer>
    <Section
      title="Model S"
      description="Order Online for Touchless Delivery"
      leftButtonText="Custom Order"
      rightButtonText="Existing Inventory"
      backgroundImage="model-s.jpg"
    />
    <Section
      title="Model Y"
      description="Order Online for Touchless Delivery"
      leftButtonText="Custom Order"
      rightButtonText="Existing Inventory"
      backgroundImage="model-y.jpg"
    />
    <Section
      title="Model 3"
      description="Order Online for Touchless Delivery"
      leftButtonText="Custom Order"
      rightButtonText="Existing Inventory"
      backgroundImage="model-3.jpg"
    />
    <Section
      title="Model X"
      description="Order Online for Touchless Delivery"
      leftButtonText="Custom Order"
      rightButtonText="Existing Inventory"
      backgroundImage="model-x.jpg"
    />
    <Section
      title="Lower Cost Solar Panels"
      description="Money-back Guarantee"
      leftButtonText="Order Now"
      rightButtonText="Learn More"
      backgroundImage="solar-panel.jpg"
    />
    <Section
      title="Solar for New Roofs"
      description="Solar Roof Costs Less"
      leftButtonText="Order Now"
      rightButtonText="Learn More"
      backgroundImage="solar-roof.jpg"
    />
    <Section
      title="Accessories"
      leftButtonText="Shop Now"
      backgroundImage="accessories.jpg"
    />
  </HomeContainer>
);

export default Home;
