import React, {useState, useEffect} from 'react';

function TimeAndDate (props) {

    const [time, setTime] = useState(new Date());

    
    useEffect(()=>{
        const id = setInterval( currentTime(), 1000 )
        return () => clearInterval(id);
    });

    var currentTime =() =>{
                setTime(new Date());
            }

    return (
        <div className="timeAndDate">
            <h1>{props.date}</h1>
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    );
}

export default TimeAndDate;