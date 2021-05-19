import React, { useState } from 'react';
import ClickedTask from './ClickedTask';
import EnterTime from './EnterTime';
import Timer from './Timer';
import TimeUp from './TimeUp';

function IndividualTask({match}) {
    // initializing timeLeft as 0 in state
    // setTimeLeft works likes setState. If we want to update timeLeft, we do it through setTimeLeft
    const [timeLeft, setTimeLeft] = useState(0);
    // isPaused starts at true in state. Controls whether we can decrement the timer or not. If it is true then timer won't count down
    const [isPaused, setIsPaused] = useState(true);

    return (
        <div className="individualTask">

            <div className="timeAndDayOnTask">


            </div>

            <div className="clickedOnTask">
                <ClickedTask currentTask={match.params.task}/>
            </div>

            <div className="taskDetails">
                <input type="text" name="" id="" />
            </div>

            {/* have the ability to manipulate the set time in the other components so we need to pass props */}
            <div className="timerInIndividualTask">
                <EnterTime setTimeLeft={setTimeLeft} setIsPaused={setIsPaused}/>
                {/* the timer will only be rendered if there is time left on the clock. other wise the timeup component will be rendered
                ie if time is less than 0 then show the TimeUp component. if it is greater than 0 show the Timer component  */}
                { timeLeft<0?
                <TimeUp setTimeLeft={setTimeLeft} setIsPaused={setIsPaused}/>:
                <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} isPaused={isPaused} setIsPaused={setIsPaused}/> 
                }
            </div>
        </div>
    );
}

export default IndividualTask;