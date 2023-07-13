import React from 'react';
import { InfoSection,InfoVideo } from "../../components";
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';

const Home = () => {
    return (
        <>
            <InfoVideo {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home;