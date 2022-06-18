import React from 'react';
import { useReducer } from 'react';

const initialState = { count: 0 };

// Pure Function
// const counterReducer = (state, action) => {
//     switch (action.type) {
//         case 'increment':
//             return { count: state.count + 1 };
//         case 'decrement':
//             return { count: state.count - 1 };
//         default:
//             throw new Error('Invalid Action executed');
//     }
// }

// const Counter = (props) => {
//     const [state, dispatch] = useReducer(counterReducer, initialState);

//     return (
//         <React.Fragment>
//             <div className="text-center mb-5">
//                 <h3 className="text-primary">Counter Component</h3>
//             </div>
//             <div className="d-grid gap-2 mx-auto col-6">
//                 <h2 className="text-info text-center">
//                     {state.count}
//                 </h2>
//                 <button className="btn btn-info"
//                     onClick={() => {
//                         dispatch({ type: 'increment' })
//                     }}>
//                     <span className='fs-4'>+</span>
//                 </button>
//                 <button className="btn btn-info"
//                     onClick={() => {
//                         dispatch({ type: 'decrement' })
//                     }}>
//                     <span className='fs-4'>-</span>
//                 </button>
//             </div>
//         </React.Fragment >
//     );
// }

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        default:
            throw new Error('Invalid Action executed');
    }
}

const Counter = (props) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <React.Fragment>
            <div className="text-center mb-5">
                <h3 className="text-primary">Counter Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <h2 className="text-info text-center">
                    {state.count}
                </h2>
                <button className="btn btn-info"
                    onClick={() => {
                        dispatch({ type: 'increment', payload: 5 })
                    }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={() => {
                        dispatch({ type: 'decrement', payload: 5  })
                    }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </React.Fragment >
    );
}

// Will Have a different Copy of State
// If you want to share the same state, combine the same with context
const CounterSibling = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div className="text-center">
            <h3 className="text-success">Counter Sibling Component</h3>
            <h2>Current Count is: {state.count}</h2>
        </div>
    );
}

const ReducerHook = () => {
    return (
        <div>
            <Counter />
            <hr />
            <CounterSibling />
        </div>
    );
};

export default ReducerHook;