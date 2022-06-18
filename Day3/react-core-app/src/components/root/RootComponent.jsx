/* eslint-disable */

import React from 'react';
import CrudAssignment from '../1_crud/CrudAssignment';
import AjaxComponent from '../2_ajax/AjaxComponent';
import ErrorHandler from '../common/ErrorHandler';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <CrudAssignment /> */}
                <AjaxComponent />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;