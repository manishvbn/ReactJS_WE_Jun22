import React, { Component } from 'react';

class CalculatorOne extends Component {
    constructor(props) {
        super(props);
        this.t1 = React.createRef();
        this.t2 = React.createRef();
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ result: parseInt(this.t1.current.value) + parseInt(this.t2.current.value) });
    }

    reset(e) {
        this.setState({ data: { t1: 0, t2: 0 }, result: 0 });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form className="justify-content-center" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend className="text-center">Calculator One - Uncontrolled</legend>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t1">Number One</label>
                                <input type="text" className="form-control" id="t1" defaultValue={this.state.data.t1}
                                    ref={this.t1} />
                            </div>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t2">Number Two</label>
                                <input type="text" className="form-control" id="t2" defaultValue={this.state.data.t2}
                                    ref={this.t2} />
                            </div>
                            <div className="form-group mb-2 mt-2">
                                <h3>Result: {this.state.result}</h3>
                            </div>
                            <div className="d-grid gap-2 mx-auto">
                                <button type="submit" className="btn btn-success">Add</button>
                                <button type="reset" className="btn btn-primary" onClick={this.reset}>Reset</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

const CalculatorAssignment = () => {
    return (
        <div>
            <CalculatorOne />
        </div>
    );
};

export default CalculatorAssignment;