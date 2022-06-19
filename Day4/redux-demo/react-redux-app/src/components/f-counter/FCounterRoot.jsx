import React from 'react';
import FCounter from './FCounter';
import FCounterSibling from './FCounterSibling';

const FCounterRoot = () => {
    return (
        <>
            <FCounter />
            <hr />
            <FCounterSibling />
        </>
    );
};

export default FCounterRoot;