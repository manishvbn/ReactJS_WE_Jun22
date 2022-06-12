/* eslint-disable */

import React from 'react';
import LCDemoComponent from '../1_lifecycle-demo/LCDemoComponent';
import PureImpureComponent from '../2_pure-vs-impure/PureImpureComponent';
import EventComponent from '../3_synthetic-events/EventComponent';

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <LCDemoComponent /> */}
            {/* <PureImpureComponent /> */}
            <EventComponent />
        </div>
    );
};

export default RootComponent;