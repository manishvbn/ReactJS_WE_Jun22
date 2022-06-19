import React from 'react';
import ReactDOM from "react-dom";

const WithPortal = ({ message, isOpen, onClose }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className='app-modal'>
            <h2>{message}</h2>
            <button className='close' onClick={onClose}>Close</button>
        </div>, document.body
    );
};

export default WithPortal;