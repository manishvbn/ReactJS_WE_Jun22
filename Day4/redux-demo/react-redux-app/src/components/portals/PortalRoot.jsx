import React, { Component } from 'react';
import WithoutPortal from './WithoutPortal';
import WithPortal from './WithPortal';

class PortalRoot extends Component {
    constructor(props) {
        super(props);
        this.state = { mflag: false, pflag: false };
        this.setmFlag = this.setmFlag.bind(this);
        this.setpFlag = this.setpFlag.bind(this);
    }

    setmFlag(f) {
        this.setState({ mflag: f });
    }

    setpFlag(f) {
        this.setState({ pflag: f });
    }

    render() {
        return (
            <div className="app-container">
                <div className="button-container">
                    <button className="button" onClick={() => { this.setmFlag(true) }}>
                        Without Portal
                    </button>
                    <button className="button" onClick={() => { this.setpFlag(true) }}>
                        With Portal
                    </button>
                </div>

                <WithoutPortal isOpen={this.state.mflag} message="Hello, I am a Modal Window"
                    onClose={() => { this.setmFlag(false) }} />

                <WithPortal isOpen={this.state.pflag} message="Hello, I am a Modal Window"
                    onClose={() => { this.setpFlag(false) }} />
            </div>
        );
    }
}

export default PortalRoot;