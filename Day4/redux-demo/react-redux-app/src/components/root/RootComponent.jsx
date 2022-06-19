// /* eslint-disable */

// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

// import NavigationComponent from '../bs-nav/NavigationComponent';
// import ErrorHandler from '../common/ErrorHandler';

// const RootComponent = () => {
//     return (
//         <div className='container'>
//             <ErrorHandler>
//                 <Router>
//                     <NavigationComponent />
//                 </Router>
//             </ErrorHandler>
//         </div>
//     );
// };

// export default RootComponent;

// ------------------------------------------ Using Custom History
/* eslint-disable */

import React from 'react';
import { Router } from 'react-router-dom';

import NavigationComponent from '../bs-nav/NavigationComponent';
import ErrorHandler from '../common/ErrorHandler';

import history from '../../utilities/history';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                <Router history={history}>
                    <NavigationComponent />
                </Router>
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;