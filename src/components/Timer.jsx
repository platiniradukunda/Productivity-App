import React, {useEffect, useRef} from 'react';
import RenderedTime from './RenderedTime';

function Timer({timeLeft, setTimeLeft, isPaused, setIsPaused}) {

     // converting timeLeft(seconds) from seconds to minutes and seconds
     let  minutes = Math.floor(timeLeft/60);
     let seconds = Math.floor(timeLeft-60*minutes);  

     let intervalRef = useRef();
    // function that ensures the timer counts down
     useEffect(()=>{
        //  variable that holds the setInterval function which will decrement the timeLeft by 1 second as a second passes
        const id = setInterval(()=>{
            // ternary statement that checks if the state is true and if it is then it will clear the interval.
            // if it's false then we will decrement the timer(timeLeft) by 1 sec
            {
               isPaused? clearInterval(intervalRef.current):setTimeLeft(timeLeft-1)
            }
            
        }, 1000);
        // useRef is initialized to the passed argument in this case id which holds the function that decrements timeLeft
        intervalRef.current=id;
        return () => clearInterval(intervalRef.current);
     });

    return (
        <div className="containerTimer">
             <div className="timer">
                <RenderedTime param="Minutes" number={minutes}/>:<RenderedTime param="Seconds" number={seconds}/>
            </div>
            {/* on click; two things happen.  The timeLeft is set back to zero and isPaused is set back to false so that the timer stops counting down. This is just like how we started */}
            <button onClick={()=>{setTimeLeft(0);setIsPaused(true)}}>Reset</button>
        </div>
    );
}

export default Timer;