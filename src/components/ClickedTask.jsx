import React from 'react';

function clickedTask({currentTask}) {
    return (
        <div>
            <h1>{`Current task: ${currentTask}`}</h1>
        </div>
    );
}

export default clickedTask;