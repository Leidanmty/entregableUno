import React from 'react';
import Button from './Button';

const QuoteBox = ({textcolor, phrase, author, change}) => {
    return (
        <div className='quotes' style={{ color: textcolor }}>
            <h1>"{phrase}"</h1>
            <br />
            <p>-{author}</p>
            <br />
            <Button otherPhrase={change}/>
        </div>
    );
};

export default QuoteBox;