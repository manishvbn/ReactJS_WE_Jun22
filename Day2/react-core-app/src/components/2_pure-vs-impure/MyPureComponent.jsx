// import React, { Component } from 'react';

// class MyPureComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//     }

//     render() {
//         console.log("MyPureComponent - Render Called....");
//         return (
//             <h1>
//                 Count Value is: {this.state.count}
//             </h1>
//         );
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         console.log("MyPureComponent - shouldComponentUpdate Called....");
//         if (this.state.count !== nextState.count)
//             return true;
//         else
//             return false;
//     }

//     componentDidMount() {
//         setInterval(() => {
//             this.setState({ count: 0 });
//         }, 1000);
//     }
// }

// export default MyPureComponent;

// ----------------------------------------------------------------

// import React, { PureComponent } from 'react';

// class MyPureComponent extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//     }

//     render() {
//         console.log("MyPureComponent - Render Called....");
//         return (
//             <h1>
//                 Count Value is: {this.state.count}
//             </h1>
//         );
//     }

//     componentDidMount() {
//         setInterval(() => {
//             this.setState({ count: 0 });
//         }, 1000);
//     }
// }

// export default MyPureComponent;

// ----------------------------------------------------------------

import React, { PureComponent } from 'react';

class MyPureComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { numbers: [1, 2] };
    }

    render() {
        console.log("MyPureComponent - Render Called....");
        return (
            <h1>
                Array Length is: {this.state.numbers.length}
            </h1>
        );
    }

    componentDidMount() {
        setInterval(() => {
            var last = this.state.numbers[this.state.numbers.length - 1];
            this.setState({ numbers: [...this.state.numbers, (last + 1)] }, () => {
                console.log(this.state.numbers);
            });
        }, 1000);
    }

    // We can Immutable.js to work with Immutability
}

export default MyPureComponent;

// React.PureComponent's shouldComponentUpdate() only shallowly compares the objects.
// React.PureComponent's shouldComponentUpdate() skips prop updates for the whole component subtree.