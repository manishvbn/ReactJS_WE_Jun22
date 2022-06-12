import React, { Component } from 'react';

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { childState: 1 };
        console.log("Child - Ctor");
    }

    handleClick() {
        this.setState({ childState: this.state.childState + 1 });
    }

    handleUpdate() {
        console.log("Child - forceUpdate");
        this.forceUpdate();
    }

    render() {
        console.log("Child - Render");

        return (
            <div>
                <h2 className="text-success">Child Component</h2>
                <h3 className="text-success">Props Value: {this.props.value}</h3>
                <h3 className="text-success">Child State: {this.state.childState}</h3>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-outline-success"
                        onClick={this.handleClick.bind(this)}>Change Child State</button>
                    <button className="btn btn-outline-success"
                        onClick={this.handleUpdate.bind(this)}>Force Update</button>
                </div>
            </div>
        );
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("Child - getDerivedStateFromProps");
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Child - getSnapshotBeforeUpdate");
        return null;
    }

    componentDidMount() {
        console.log("Child - componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Child - shouldComponentUpdate");
        // return true;
        return false;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Child - componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("Child - componentWillUnmount");
    }
}

class LCDemoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { data: 0, flag: true };
    }

    handleChange() {
        this.setState({ data: this.state.data + 1 });
    }

    handleLoad() {
        this.setState({ flag: !this.state.flag });
    }

    render() {
        return (
            <div className='text-center'>
                <h2 className="text-primary">Life Cycle Demo Component</h2>
                <h3 className="text-info">State: {this.state.data}</h3>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-outline-info"
                        onClick={this.handleChange.bind(this)}>Click to Change</button>
                    <button className="btn btn-outline-warning"
                        onClick={this.handleLoad.bind(this)}>Show/Hide Child</button>
                </div>
                <hr />
                {
                    this.state.flag
                        ? null
                        : <ChildComponent value={this.state.data} />
                }
            </div>
        );
    }
}

export default LCDemoComponent;