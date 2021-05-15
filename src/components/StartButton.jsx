import React from 'react';
import {Link} from 'react-router-dom'

function StartButton(props) {
    return (
        <div className="startWork">
            <Link to="/todolist">
            <button className="startWorkButton">Let's get to work</button>
            </Link>
        </div>
    );
}

export default StartButton;