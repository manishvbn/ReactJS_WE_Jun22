/* eslint-disable */

import React from 'react';

class ComponentOne extends React.Component {
    render() {
        console.log("State: ", this.state);
        console.log("Props: ", this.props);
        return (
            <h2 className="text-info">Using Class Syntax</h2>
        );
    }
}

// Functional / Stateless / Presentational
const ComponentTwo = function () {
    console.log("this: ", this);

    return (
        <h2 className="text-info">Using Anonymous Function Syntax</h2>
    );
}

const ComponentThree = () => {
    console.log("this: ", this);

    return (
        <h2 className="text-info">Using Arrow Function Syntax</h2>
    );
}

const ComponentFour = (props) => {
    console.log("props: ", props);

    return (
        <h2 className="text-info">Using Arrow Function Syntax</h2>
    );
}

// Object Destructuring
const ComponentFive = ({ id, name }) => {
    console.log("Id: ", id);
    console.log("Name: ", name);

    return (
        <h2 className="text-info">Using Arrow Function Syntax</h2>
    );
}

// Object Destructuring with Rest
const ComponentSix = ({ id, name, ...address }) => {
    console.log("Id: ", id);
    console.log("Name: ", name);
    console.log("Address: ", address);

    return (
        <h2 className="text-info">Using Arrow Function Syntax</h2>
    );
}

const ClassVsFunctionalComponents = () => {
    var data = { id: 1, name: 'Manish', city: 'Pune', state: 'MH' };

    return (
        <div>
            {/* <ComponentOne /> */}
            {/* <ComponentTwo /> */}
            {/* <ComponentThree /> */}
            {/* <ComponentFour id={1} name={'Manish'} city={'Pune'} state={'MH'} /> */}
            {/* <ComponentFive id={1} name={'Manish'} city={'Pune'} state={'MH'} /> */}
            {/* <ComponentSix id={1} name={'Manish'} city={'Pune'} state={'MH'} /> */}
            <ComponentSix {...data} />
        </div>
    );
};

export default ClassVsFunctionalComponents;