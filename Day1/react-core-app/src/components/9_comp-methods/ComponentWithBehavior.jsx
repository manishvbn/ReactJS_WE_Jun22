import React, { Component } from 'react';

class ChildComponent extends Component {
    render() {
        return (
            <div>
                <hr />
                <h3 className="text-success">Child Component</h3>
                <h3 className="text-success">Count : {this.props.cnt}</h3>
            </div>
        );
    }
}

class ComponentWithBehavior extends Component {
    constructor(props) {
        super(props);
        this.state = { id: 1, count: 0 };
    }

    handleClick() {
        // alert("Button Clicked....");
        // console.log("Inside handleClick, this:", this);

        // If you want the UI to be in sync with the current state,
        // do not mutate state directly, instead use setState()
        // this.state.count += 1;
        // console.log(this.state);

        // setState is an Async Function 
        // this.setState({ count: this.state.count + 1 });
        // console.log(this.state);

        // If you want to perform any operation after the state changes,
        // put the code in the callback function
        this.setState({ count: this.state.count + 1 }, () => {
            console.log(this.state);
        });
    }

    render() {
        return (
            <div className='row text-center'>
                <h2 className="text-primary">Component with Behavior</h2>
                <h2 className="text-primary">Id: {this.state.id}</h2>
                <h2 className="text-primary">Count: {this.state.count}</h2>

                <ChildComponent cnt={this.state.count} />

                <div className="d-grid gap-2 col-6 mx-auto mt-5">
                    <button className='btn btn-outline-primary' onClick={this.handleClick.bind(this)}>
                        Click
                    </button>
                </div>
            </div>
        );
    }
}

export default ComponentWithBehavior;