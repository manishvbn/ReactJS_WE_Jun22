import React, { Component } from 'react';

export const CounterContext = React.createContext();

class CounterContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.setCount = this.setCount.bind(this);
    }

    setCount(cCount) {
        this.setState({ count: cCount });
    }

    render() {
        return (
            <CounterContext.Provider value={[this.state.count, this.setCount]}>
                {this.props.children}
            </CounterContext.Provider>
        );
    }
}

export default CounterContextProvider;