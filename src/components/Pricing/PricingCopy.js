import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import {FaNodeJs , FaReact, FaJava } from 'react-icons/fa';
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
} from './Pricing.elementsCopy';

function PricingCopy() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading></PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  < FaNodeJs/>
                </PricingCardIcon>
                <PricingCardPlan>React/NodeJS Tract</PricingCardPlan>
                <PricingCardCost>$180</PricingCardCost>
                <PricingCardLength>18 weeks/108 hours</PricingCardLength>
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
                  <FaReact />
                </PricingCardIcon>
                <PricingCardPlan> React Native Tract</PricingCardPlan>
                <PricingCardCost>$100</PricingCardCost>
                <PricingCardLength>10 weeks(60hours)</PricingCardLength>
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
                  <FaJava />
                </PricingCardIcon>
                <PricingCardPlan>Java Tract</PricingCardPlan>
                <PricingCardCost>$120</PricingCardCost>
                <PricingCardLength>10 weeks (72 hours)</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>10 Hours/Week</PricingCardFeature>
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
export default PricingCopy;
