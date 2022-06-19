// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import * as counterActions from '../../actions/counterActions';
// import CounterComponent from '../../components/counter/CounterComponent';
// import CounterSiblingComponent from '../../components/counter/CounterSiblingComponent';

// class CounterContainer extends Component {
//     render() {
//         return (
//             <div>
//                 <CounterComponent {...this.props} />
//                 <hr />
//                 <CounterSiblingComponent {...this.props} />
//             </div>
//         );
//     }
// }

// function mapStateToProps(state, ownProps) {
//     return {
//         count: state.counterReducer
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         inc: (by) => { dispatch(counterActions.incCounter(by)); },
//         dec: (by) => { dispatch(counterActions.decCounter(by)); }
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// // const componentEnhancer = connect(mapStateToProps, mapDispatchToProps);
// // const EnhancedCounterContainer = componentEnhancer(CounterContainer);
// // export default EnhancedCounterContainer;

// -----------------------------------------------------------------------------------

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as counterActions from '../../actions/counterActions';
import CounterComponent from '../../components/counter/CounterComponent';
import CounterSiblingComponent from '../../components/counter/CounterSiblingComponent';

class CounterContainer extends Component {
    render() {
        return (
            <div>
                <CounterComponent count={this.props.count}
                    inc={this.props.incCounter}
                    dec={this.props.decCounter} />
                <hr />
                <CounterSiblingComponent count={this.props.count} />
            </div>
        );
    }
}

// To map state of the store to props of Component
function mapStateToProps(state, ownProps) {
    return {
        count: state.counterReducer
    };
}

// To map dispatch(actions) to props of Component
function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(counterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);