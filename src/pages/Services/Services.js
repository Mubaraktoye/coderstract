import React from 'react';
import { InfoSection, Pricing } from '../../components';
import PricingCopy from '../../components/Pricing/PricingCopy';
import { homeObjOne, homeObjThree } from './Data';

function Services() {
  return (
    <>
      <Pricing />
      <PricingCopy/> 
      <InfoSection {...homeObjOne} />
      
    </>
  );
}

export default Services;
