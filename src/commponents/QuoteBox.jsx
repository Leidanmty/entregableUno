import React from 'react';

const QuoteBox = ({textcolor, phrase, author}) => {
    return (
        <div className='quotes' style={{ color: textcolor }}>
            <h1>"{phrase}"</h1>
            <br />
            <p>-{author}</p>
        </div>
    );
};

export default QuoteBox;