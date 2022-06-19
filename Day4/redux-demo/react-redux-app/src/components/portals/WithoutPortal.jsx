import React from 'react';

const WithoutPortal = ({message, isOpen, onClose}) => {
    if (!isOpen) return null;

    return (
        <div className='app-modal'>
            <h2>{message}</h2>
            <button className='close' onClick={onClose}>Close</button>
        </div>
    );
};

export default WithoutPortal;