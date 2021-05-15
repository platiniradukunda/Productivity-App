import React from 'react';

function TimeAndDate(props) {
    return (
        <div className="timeAndDate">
            <h1>{props.date}</h1>
            <h1>{props.time}</h1>
        </div>
    );
}

export default TimeAndDate;