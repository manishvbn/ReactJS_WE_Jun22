import React, { Component } from 'react';

import './ComponentTwo.css';

class ComponentTwo extends Component {
    render() {
        return (
            <>
                <h2 className='text-primary'>Hello from Component Two</h2>
                <h2 className='cardTwo'>From Component Two</h2>
            </>
        );
    }
}

export default ComponentTwo;