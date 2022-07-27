import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock, GiJapan } from 'react-icons/gi';
import { SiReact, SiCsharp,SiPython } from 'react-icons/si';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Available Tracts</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiReact />
                </PricingCardIcon>
                <PricingCardPlan>Front-end React Tract</PricingCardPlan>
                <PricingCardCost>$100</PricingCardCost>
                <PricingCardLength>10 weeks (60 hours)</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature> 6 Hours/Week</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Join Next Cohort</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiCsharp />
                </PricingCardIcon>
                <PricingCardPlan> C# .NET Tract</PricingCardPlan>
                <PricingCardCost>$100</PricingCardCost>
                <PricingCardLength>12 weeks (72hours)</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>6 Hours/Week</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Join Next Cohort</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiPython />
                </PricingCardIcon>
                <PricingCardPlan>Python Tract</PricingCardPlan>
                <PricingCardCost>$100</PricingCardCost>
                <PricingCardLength>10 weeks (60 hours)</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>6 Hours/Week</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Join Next Cohort</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
