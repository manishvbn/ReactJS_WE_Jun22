/* eslint-disable */

import React from 'react';
import LCDemoComponent from '../1_lifecycle-demo/LCDemoComponent';
import PureImpureComponent from '../2_pure-vs-impure/PureImpureComponent';
import EventComponent from '../3_synthetic-events/EventComponent';
import CounterAssignment from '../4_counter-assignment/CounterAssignment';
import ControlledVsUncontrolledComponent from '../5_controlled-vs-uncontrolled/ControlledVsUncontrolledComponent';
import CalculatorAssignment from '../6_calculator-assignment/CalculatorAssignment';
import ListRoot from '../7_list/ListComponent';
import ContextAPIDemo from '../8_context/ContextAPIDemo';
import SiblingCommunication from '../8_context/SiblingCommunication';

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <LCDemoComponent /> */}
            {/* <PureImpureComponent /> */}
            {/* <EventComponent /> */}
            {/* <CounterAssignment /> */}
            {/* <ControlledVsUncontrolledComponent /> */}
            {/* <CalculatorAssignment /> */}
            {/* <ListRoot /> */}
            {/* <ContextAPIDemo /> */}
            <SiblingCommunication />
        </div>
    );
};

export default RootComponent;