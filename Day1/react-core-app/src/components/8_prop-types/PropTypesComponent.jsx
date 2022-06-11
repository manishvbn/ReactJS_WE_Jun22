// import React, { Component } from 'react';

// class PropTypesComponent extends Component {
//     render() {
//         return (
//             <div>
//                 <h2 className="text-info">Hello, {this.props.name.toUpperCase()}</h2>
//                 <h2 className="text-info">Age is, {this.props.age}</h2>
//             </div>
//         );
//     }

//     static get defaultProps() {
//         return {
//             name: "na",
//             age: 0
//         };
//     }
// }

// class PropTypesRoot extends Component {
//     render() {
//         return (
//             <div>
//                 <h2 className="text-primary text-center">Default Props Demo</h2>
//                 <PropTypesComponent />
//                 <PropTypesComponent name={"abhijeet"} />
//                 <PropTypesComponent name={"abhijeet"} age={10} />
//             </div>
//         );
//     }
// }

// export default PropTypesRoot;

// ------------------------------------------------------------------------
// npm install --save prop-types
// npm i prop-types

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class PropTypesComponent extends Component {
//     render() {
//         return (
//             <div>
//                 <h2 className="text-info">Hello, {this.props.name.toUpperCase()}</h2>
//                 <h2 className="text-info">Age is, {this.props.age}</h2>
//             </div>
//         );
//     }

//     static get propTypes() {
//         return {
//             name: PropTypes.string.isRequired,
//             // age: PropTypes.number.isRequired
//             age: function(props, propName, componentName) {
//                 if(props[propName] < 20) {
//                     return new Error(`Invalid prop '${propName}', supplied to '${componentName}' - age must be greater than 20`)
//                 }
//             }
//         };
//     }
// }

const PropTypesComponent = (props) => {
    return (
        <div>
            <h2 className="text-info">Hello, {props.name.toUpperCase()}</h2>
            <h2 className="text-info">Age is, {props.age}</h2>
        </div>
    );
}

PropTypesComponent.propTypes = {
    name: PropTypes.string.isRequired,
    // age: PropTypes.number.isRequired
    age: function (props, propName, componentName) {
        if (props[propName] < 20) {
            return new Error(`Invalid prop '${propName}', supplied to '${componentName}' - age must be greater than 20`)
        }
    }
};

PropTypesComponent.defaultProps = {
    name: "na",
    age: 21
};

class PropTypesRoot extends Component {
    render() {
        return (
            <div>
                <h2 className="text-primary text-center">Prop Types Demo</h2>
                <PropTypesComponent />
                {/* <PropTypesComponent name={"manish"} age={"10"}/> */}
                {/* <PropTypesComponent name={"manish"} age={10} /> */}
            </div>
        );
    }
}

export default PropTypesRoot;