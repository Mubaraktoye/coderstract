import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing, } from '../../components';
import PricingCopy from '../../components/Pricing/PricingCopy';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <PricingCopy/>
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;
