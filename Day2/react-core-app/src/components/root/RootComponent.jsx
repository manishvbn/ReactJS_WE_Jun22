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
import ErrorHandler from '../common/ErrorHandler';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <LCDemoComponent /> */}
                {/* <PureImpureComponent /> */}
                {/* <EventComponent /> */}
                {/* <CounterAssignment /> */}
                {/* <ControlledVsUncontrolledComponent /> */}
                {/* <CalculatorAssignment /> */}
                <ListRoot />
                {/* <ContextAPIDemo /> */}
                {/* <SiblingCommunication /> */}
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;