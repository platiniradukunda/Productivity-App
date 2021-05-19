import React, {useState, useEffect, useRef} from 'react';

function TimeAndDate (props) {

    // const [time, setTime] = useState(props);
    // console.log(time);
    // useEffect(() => {setTime(props)}, [props]);

    // const [second, setSecond] = useState(props.second);
    // console.log(time.second);
    // const [minute, setMinute] = useState(time.minute);
    // const [hour, setHour] = useState(time.hour);

    // let intervalRef = useRef();
    // // function that ensures the timer counts down
    //  useEffect(()=>{
    //     //  variable that holds the setInterval function which will decrement the seconds by 1 second as a second passes
    //     const id = setInterval(()=>{
    //         // setSecond(props.second+1)   
    //     }, 1000);
    //     // useRef is initialized to the passed argument in this case id which holds the function that......
    //     intervalRef.current=id;
    //     return () => clearInterval(intervalRef.current);
    //  });

    return (
        <div className="timeAndDate">
            <h1>{props.date}</h1>
            <h1>{`${props.hour}:${props.minute} ${props.midday}`}</h1>
        </div>
    );
}

export default TimeAndDate;