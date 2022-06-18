import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CounterContextProvider, { CounterContext } from '../../context/CounterContext';

class Counter extends Component {
    static contextType = CounterContext;

    constructor(props) {
        super(props);
        this._inc = this._inc.bind(this);
        this._dec = this._dec.bind(this);
    }

    _inc(e) {
        var [count, setCount] = this.context;
        setCount(count + this.props.interval);
    }

    _dec(e) {
        var [count, setCount] = this.context;
        setCount(count - this.props.interval);
    }

    render() {
        return (
            <React.Fragment>
                <div className="text-center mb-5">
                    <h3 className="text-primary">Counter Component</h3>
                </div>
                <div className="d-grid gap-2 mx-auto col-6">
                    <h2 className="text-info text-center">
                        {this.context[0]}
                    </h2>
                    <button className="btn btn-info"
                        onClick={this._inc}>
                        <span className='fs-4'>+</span>
                    </button>
                    <button className="btn btn-info"
                        onClick={this._dec}>
                        <span className='fs-4'>-</span>
                    </button>
                </div>
            </React.Fragment >
        );
    }

    static get defaultProps() {
        return {
            interval: 1
        };
    }

    static get propTypes() {
        return {
            interval: PropTypes.number
        };
    }
}

class CounterSibling extends Component {
    static contextType = CounterContext;

    render() {
        return (
            <div className="text-center">
                <h3 className="text-success">Counter Sibling Component</h3>
                <h2>Current Count is:  {this.context[0]}</h2>
            </div>
        );
    }
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