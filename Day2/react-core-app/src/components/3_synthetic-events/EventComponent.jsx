import React, { Component } from 'react';

class EventComponent extends Component {
    constructor(props) {
        super(props);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick5 = this.handleClick5.bind(this, "Abhijeet");
    }

    handleClick1(e) {
        console.log("event: ", e);
        console.log("this: ", this);
        e.preventDefault();
    }

    handleClick2(e) {
        console.log("event: ", e);
        console.log("this: ", this);
        e.preventDefault();
    }

    handleClick3(e) {
        console.log("event: ", e);
        console.log("this: ", this);
        e.preventDefault();
    }

    handleClick4(name, e) {
        console.log("name: ", name);
        console.log("event: ", e);
        console.log("this: ", this);
        e.preventDefault();
    }

    handleClick5(name, e) {
        console.log("name: ", name);
        console.log("event: ", e);
        console.log("this: ", this);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h2 className="text-primary">Synthetic Event Object</h2>
                <div className="mt-2">
                    <a href="https://www.google.com" onClick={this.handleClick1}>Click One</a>
                </div>
                <div className="mt-2">
                    <a href="https://www.google.com" onClick={this.handleClick2.bind(this)}>Click Two</a>
                </div>
                <div className="mt-2">
                    <a href="https://www.google.com" onClick={this.handleClick3}>Click Three</a>
                </div>
                <div className="mt-2">
                    <a href="https://www.google.com" onClick={this.handleClick4.bind(this, "Synechron")}>Click Four</a>
                </div>
                <div className="mt-2">
                    <a href="https://www.google.com" onClick={this.handleClick5}>Click Five</a>
                </div>
                <div className="mt-2">
                    <a href="https://www.google.com" onClick={
                        function (e) {
                            console.log("event: ", e);
                            console.log("this: ", this);
                            e.preventDefault();
                        }
                    }>Click Six - Anonymous Function</a>
                </div>
                <div className="mt-2">
                    <a href="https://www.google.com" onClick={
                        (function (e) {
                            console.log("event: ", e);
                            console.log("this: ", this);
                            e.preventDefault();
                        }).bind(this)
                    }>Click Seven - Anonymous Function</a>
                </div>
                <div className="mt-2">
                    <a href="https://www.google.com" onClick={
                        (e) => {
                            console.log("event: ", e);
                            console.log("this: ", this);
                            e.preventDefault();
                        }
                    }>Click Eight - Arrow Function</a>
                </div>
                <div className="mt-2">
                    <a href="https://www.google.com" onClick={
                        (e) => {
                            this.handleClick4("Manish", e);
                        }
                    }>Click Nine - Arrow Function</a>
                </div>
            </div>
        );
    }
}

export default EventComponent;