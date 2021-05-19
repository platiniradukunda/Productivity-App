import React, {useEffect, useRef} from 'react';
import RenderedTime from './RenderedTime';

function Timer({timeLeft, setTimeLeft, isPaused, setIsPaused}) {

     // converting timeLeft(seconds) from seconds to minutes and seconds
     let  minutes = Math.floor(timeLeft/60);
     let seconds = Math.floor(timeLeft-60*minutes);  

     let intervalRef = useRef();


    return (
        <div>
             <div className="timer">
                <RenderedTime param="Minutes" number={minutes}/>:<RenderedTime param="Seconds" number={seconds}/>
            </div>

        </div>
    );
}

export default Timer;