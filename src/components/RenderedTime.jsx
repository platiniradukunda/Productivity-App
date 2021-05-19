import React from 'react';

function RenderedTime({param, number}) {
    return (
        <div className="renderedTime">
            <h4>{number}</h4>
            <h4>{param}</h4>
        </div>
    );
}

export default RenderedTime;