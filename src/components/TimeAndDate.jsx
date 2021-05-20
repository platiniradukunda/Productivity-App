import React, {useState, useEffect,useRef} from 'react';

function TimeAndDate (props) {

    const [time, setTime] = useState(new Date());

    let intervalRef = useRef();
    useEffect(()=>{
        const id = setInterval( currentTime(), 1000 )
        intervalRef.current=id;
        return () => clearInterval(intervalRef.current);
    },[]);

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