import React, { useState } from 'react';
import { useEffect } from 'react';

const EffectHookDemo = () => {
    const [flag, setFlag] = useState(false);
    const [person, setPerson] = useState({ fname: "Manish", lname: "Sharma" });

    //  Without second parameter, useEffect behaves like ComponentDidUpdate()
    // useEffect(() => {
    //     console.log("useEffect is called, whenever any state updates....");
    // });

    // With second parameter as empty array, useEffect behaves like ComponentDidMount()
    // useEffect(() => {
    //     console.log("useEffect is called, on mounting....");
    // }, []);

    useEffect(() => {
        console.log("useEffect is called, whenever flag updates....");
    }, [flag]);

    return (
        <div>
            <h3 className="text-primary">Firstname: {person.fname}</h3>
            <h3 className="text-primary">Lastname: {person.lname}</h3>
            <button className='btn btn-primary' onClick={(e) => { setFlag(!flag); }}>Change Flag</button>
            <button className='btn btn-primary' onClick={(e) => { setPerson({ fname: 'Abhijeet', lname: 'Gole' }); }}>Change Person</button>
        </div>
    );
};

export default EffectHookDemo;