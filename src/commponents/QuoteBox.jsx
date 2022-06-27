import React from 'react';

const QuoteBox = ({textcolor}) => {
    return (
        <div className='quotes' style={{ color: textcolor }}>
            <h1>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nostrum similique aspernatur, repellendus iusto accusamus?"</h1>
            <br />
            <p>-Nombre Autor</p>
        </div>
    );
};

export default QuoteBox;