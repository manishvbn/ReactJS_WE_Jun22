// import React from 'react';

// class HelloComponent extends React.Component {
//     render() {
//         return <h1>Hello World!</h1>;
//     }
// }

// export default HelloComponent;

// --------------------------

// import React, { Component } from 'react';

// class HelloComponent extends Component {
//     render() {
//         return <h1>Hello World!</h1>;
//     }
// }

// export default HelloComponent;

// --------------------------

// import React, { Component } from 'react';

// class HelloComponent extends Component {
//     render() {
//         // Should return only one JSX Element 
//         return (
//             <div>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </div>
//         );
//     }
// }

// export default HelloComponent;

// ----------------------------------------------- Fragments

// import React, { Component } from 'react';

// class HelloComponent extends Component {
//     render() {
//         // Should return only one JSX Element 
//         return (
//             <React.Fragment>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </React.Fragment>
//         );
//     }
// }

// export default HelloComponent;

// import React, { Component, Fragment } from 'react';

// class HelloComponent extends Component {
//     render() {
//         // Should return only one JSX Element 
//         return (
//             <Fragment>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </Fragment>
//         );
//     }
// }

// export default HelloComponent;

// import React, { Component } from 'react';

// class HelloComponent extends Component {
//     render() {
//         // Should return only one JSX Element 
//         return (
//             <>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </>
//         );
//     }
// }

// export default HelloComponent;

// ------------------------------------- Function Syntax

// function HelloComponent() {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Function Declaration Syntax!</h1>
//         </>
//     );
// }

// const HelloComponent = function () {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Function Expression Syntax!</h1>
//         </>
//     );
// }

// const HelloComponent = () => {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Multiline Arrow Syntax!</h1>
//         </>
//     );
// }

// const HelloComponent = () => (
//     <>
//         <h1>Hello World!</h1>
//         <h1>Singleline Arrow Syntax!</h1>
//     </>
// );

// export default HelloComponent;

// Class Syntax - Stateful Components / Container Components
// Function Syntax - Stateless Components / Presentational Components

// --------------------------------------- Using Application Level CSS

// const HelloComponent = () => (
//     <>
//         <h1 className="red">Hello World!</h1>
//         <h1>Singleline Arrow Syntax!</h1>
//     </>
// );

const HelloComponent = () => (
    <div className="container">
        <h1 className="red">Hello World!</h1>
        <h1 className="text-primary">Hello World Again!</h1>
        <h1 className="text-success bi bi-activity"></h1>
    </div>
);

export default HelloComponent;