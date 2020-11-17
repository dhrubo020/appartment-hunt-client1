import React from 'react';
import rentInfo from './rentInfo';
import serviceInfo from './serviceInfo';

const Buttons = () => {
    const addFakeData = () => {
            fetch('https://murmuring-dawn-07666.herokuapp.com/apartments', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(rentInfo, serviceInfo)
            })

            console.log('hi im there')
        }
    

    return (
        <div>
            <button className="btn" style={{backgroundColor: 'black', color: 'white'}} onClick={addFakeData}>Add All Services</button>
            <h1 style={{color: 'black'}}>hikkkii</h1>
        </div>
    );
};

export default Buttons;