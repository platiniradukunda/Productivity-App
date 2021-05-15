import React from 'react';

function RenderTasks(props) {
    return (
        <div className="renderTasks">
            {props.tasks.map((taskInTheList, i) => {
               return <ul key={i}> <li key={i}> {taskInTheList} </li></ul>
            })
            }
        </div>
    );
}

export default RenderTasks;