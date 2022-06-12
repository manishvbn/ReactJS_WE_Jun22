import React, { Component } from 'react';

class MyImpureComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        console.log("MyImpureComponent - Render Called....");
        return (
            <h1>
                Count Value is: {this.state.count}
            </h1>
        );
    }

    componentDidMount() {
        setInterval(() => {
            // this.setState({ count: this.state.count + 1 });
            this.setState({ count: 0 });
        }, 1000);   
    }
}

export default MyImpureComponent;