import React, { Component } from 'react';

import './ComponentOne.css';

class ComponentOne extends Component {
    render() {
        return (
            <>
                <h2 className='text-success'>Hello from Component One</h2>
                <h2 className='cardOne'>From Component One</h2>
            </>
        );
    }
}

export default ComponentOne;