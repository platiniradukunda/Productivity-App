import React, { useState } from 'react';
import EnterTime from './EnterTime';
import Timer from './Timer';
import TimeUp from './TimeUp';

function IndividualTask() {
    // time left on the timer starts of as zero in state
    const [timeLeft, setTimeLeft] = useState(0);
    // isPaused starts at true in state 
    const [isPaused, setIsPaused] = useState(true);

    return (
        // have the ability to set the time
        // the timer will only be rendered if there is time left on the clock. other wise the timeup component will be rendered
        // ie if time is less than 0 then show the TimeUp component. if it is greater than 0 show the Timer component
        <div className="individualTask">
            <EnterTime setTimeLeft={setTimeLeft} setIsPaused={setIsPaused}/>
            {
               timeLeft<0?
               <TimeUp setTimeLeft={setTimeLeft} setIsPaused={setIsPaused}/>:
               <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} isPaused={isPaused} setIsPaused={setIsPaused}/>
               
            }
            
        </div>
    );
}

export default IndividualTask;