/* eslint-disable */

import React from 'react';
import LCDemoComponent from '../1_lifecycle-demo/LCDemoComponent';
import PureImpureComponent from '../2_pure-vs-impure/PureImpureComponent';

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <LCDemoComponent /> */}
            <PureImpureComponent />
        </div>
    );
};

export default RootComponent;