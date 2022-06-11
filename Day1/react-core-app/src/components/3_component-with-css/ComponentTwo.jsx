import React, { Component } from 'react';

const card = {
    margin: '1em',
    paddingLeft: 0,
    border: '2px solid blue'
};

class ComponentTwo extends Component {
    render() {
        return (
            <>
                <h2 className='text-primary'>Hello from Component Two</h2>
                <h2 style={card}>From Component Two</h2>
            </>
        );
    }
}

export default ComponentTwo;