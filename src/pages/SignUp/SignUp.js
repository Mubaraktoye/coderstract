import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjThree } from './Data';
import REGFORM from './Regform';

function SignUp() {
  return (
    <>
      <REGFORM />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
