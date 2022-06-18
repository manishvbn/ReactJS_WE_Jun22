/* eslint-disable */

import React from 'react';
import CrudAssignment from '../1_crud/CrudAssignment';
import AjaxComponent from '../2_ajax/AjaxComponent';
import EffectHookAjax from '../3_hooks/EffectHookAjax';
import EffectHookDemo from '../3_hooks/EffectHookDemo';
import StateHookDemo from '../3_hooks/StateHookDemo';
import ErrorHandler from '../common/ErrorHandler';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <CrudAssignment /> */}
                {/* <AjaxComponent /> */}
                {/* <StateHookDemo /> */}
                {/* <EffectHookDemo /> */}
                <EffectHookAjax />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;