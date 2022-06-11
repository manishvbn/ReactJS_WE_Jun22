import React, { Component } from 'react';

import classes from './ComponentOne.module.css';

class ComponentOne extends Component {
    render() {
        return (
            <>
                <h2 className='text-success'>Hello from Component One</h2>
                <h2 className={classes.card}>From Component One</h2>
            </>
        );
    }
}

export default ComponentOne;