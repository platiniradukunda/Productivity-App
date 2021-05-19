import React, {useEffect} from 'react';
import useSound from 'use-sound';
import drumRoll from '../sound/drumRoll.mp3';

function TimeUp({setTimeLeft, setIsPaused}) {
    // variable where we pass the object name of our sound ie drumRoll at volume 20%
    const [play] = useSound(drumRoll, {volume: 0.20});
    // function where we pass in the sound that we want to play when time winds down for that task
    // only plays once when the TimeUp component is rendered to the screen
    useEffect(()=>{
        play();
    }, [play])

    return (
        <div className="finishedTask">
            {/* The message that will be rendered when the TimeUp component renders */}
            <h1>Good job, you have powered through this task!</h1>
            {/* on click; two things happen.  The timeLeft is set back to zero and isPaused is set back to false so that the timer stops counting down. This is just like how we started */}
            <button onClick={()=>{setTimeLeft(0);setIsPaused(true)}}>Reset</button>
        </div>
    );
}

export default TimeUp;