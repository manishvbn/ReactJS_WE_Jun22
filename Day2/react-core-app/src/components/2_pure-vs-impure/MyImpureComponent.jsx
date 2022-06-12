// import React, { Component } from 'react';

// class MyImpureComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//     }

//     render() {
//         console.log("MyImpureComponent - Render Called....");
//         return (
//             <h1>
//                 Count Value is: {this.state.count}
//             </h1>
//         );
//     }

//     componentDidMount() {
//         setInterval(() => {
//             // this.setState({ count: this.state.count + 1 });
//             this.setState({ count: 0 });
//         }, 1000);   
//     }
// }

// export default MyImpureComponent;

// ------------------------------------------------------------------------ With Reference

import React, { Component } from 'react';

class MyImpureComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { numbers: [1, 2] };
    }

    render() {
        console.log("MyImpureComponent - Render Called....");
        return (
            <h1>
                Array Length is: {this.state.numbers.length}
            </h1>
        );
    }

    componentDidMount() {
        // setInterval(() => {
        //     var last = this.state.numbers[this.state.numbers.length - 1];
        //     this.state.numbers.push((last + 1));
        //     this.setState({ numbers: this.state.numbers }, () => {
        //         console.log(this.state.numbers);
        //     });
        // }, 1000);

        setInterval(() => {
            var last = this.state.numbers[this.state.numbers.length - 1];
            this.setState({ numbers: [...this.state.numbers, (last + 1)] }, () => {
                console.log(this.state.numbers);
            });
        }, 1000);
    }
}

export default MyImpureComponent;