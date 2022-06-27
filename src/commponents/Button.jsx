import React from 'react';
import App from '../App';

const Button = (change) => {

    return (
        
        <button onClick={change}><i className="fa-solid fa-shuffle">→</i></button>
        
    );
};

export default Button;