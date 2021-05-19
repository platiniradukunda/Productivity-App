import React from 'react';

function clickedTask({currentTask}) {
    return (
        <div>
            <h1>{currentTask}</h1>
        </div>
    );
}

export default clickedTask;