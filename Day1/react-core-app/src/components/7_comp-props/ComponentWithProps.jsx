import React, { Component } from 'react';

class ComponentWithProps extends Component {
    // If you want to access props in constructor, accept a constructor parameter and pass it to super()
    constructor(props) {
        super(props);

        // this.props = { name: "Manish" };            // Props cannot be initialized inside the component
        // this.props.name = 'Abhijeet';               // Error - Props are readonly

        // Reference Copy
        // Never assign props directly to state because updates to props won't be reflected in state.
        // this.state = this.props;
        // this.state.name = 'Abhijeet';

        // Shallow Copy
        // this.state = Object.assign({}, this.props);
        // this.state = { ...this.props };
        // this.state.name = 'Abhijeet';
        // this.state.address.city = 'Mumbai';

        // Deep Copy
        this.state = JSON.parse(JSON.stringify(this.props));
        this.state.name = 'Abhijeet';
        this.state.address.city = 'Mumbai';

        // We can use lodash to do deep copying also

        console.log("Ctor, State: ", this.state);
        console.log("Ctor, Props: ", this.props);
    }
    render() {
        console.log("Render, State: ", this.state);
        console.log("Render, Props: ", this.props);

        return (
            <div>
                <h2 className="text-primary">Component with Props</h2>
            </div>
        );
    }
}

export default ComponentWithProps;