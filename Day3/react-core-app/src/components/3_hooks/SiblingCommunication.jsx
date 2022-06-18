import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CounterContextProvider, { CounterContext } from '../../context/CounterContext';
import { useContext } from 'react';

const Counter = (props) => {
    const [count, setCount] = useContext(CounterContext);

    return (
        <React.Fragment>
            <div className="text-center mb-5">
                <h3 className="text-primary">Counter Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <h2 className="text-info text-center">
                    {count}
                </h2>
                <button className="btn btn-info"
                    onClick={() => { setCount(count + 1); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={() => { setCount(count - 1); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </React.Fragment >
    );
}

Counter.defaultProps = {
    interval: 1
};

Counter.propTypes = {
    interval: PropTypes.number
};

const CounterSibling = () => {
    const [count] = useContext(CounterContext);

    return (
        <div className="text-center">
            <h3 className="text-success">Counter Sibling Component</h3>
            <h2>Current Count is: {count}</h2>
        </div>
    );
}

const SiblingCommunication = () => {
    return (
        <CounterContextProvider>
            <div className='mt-5'>
                <Counter />
                <hr />
                <CounterSibling />
            </div>
        </CounterContextProvider>
    );
};

export default SiblingCommunication;