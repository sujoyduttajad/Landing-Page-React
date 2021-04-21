import React from 'react';
import { InfoSection } from '../../components/InfoSection/InfoSection';
import { Pricing } from '../../components/Pricing/Pricing';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjTwo} />
            <Pricing />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home;