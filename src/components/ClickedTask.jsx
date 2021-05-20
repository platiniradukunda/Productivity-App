import React from 'react';

function clickedTask({currentTask}) {
    return (
        <div className="clickedTask">
            <h1>{`Current Task: ${currentTask}`}</h1>
        </div>
    );
}

export default clickedTask;