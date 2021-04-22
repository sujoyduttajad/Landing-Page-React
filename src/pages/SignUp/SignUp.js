import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne } from './Data';

function SignUp() {
  return (
    <>
      <InfoSection {...homeObjOne} />
    </>
  );
}

export default SignUp;