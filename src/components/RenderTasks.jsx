import React from 'react';
import {Link} from 'react-router-dom'

function RenderTasks(props) {
    return (
        <div className="renderTasks">
            {props.tasks.map((taskInTheList, i) => {
               return <ul key={i}> <input type="checkbox"/> <li>{taskInTheList}</li> <Link to="/task"> <button>Start</button> <button>Delete</button></Link> </ul>
            })
            }
        </div>
    );
}

export default RenderTasks;