import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class RenderTasks extends Component {
    constructor(props){
        super(props);
        this.state={
            array: this.props.tasks,
        }
        console.log(this.state.array);
    }
    deletingTask = (index) => {
        let newArray = this.state.array
        newArray.splice(index, 1);
        this.setState({
            array: newArray,
        })
        }
    render() {
        return (
            <div className="renderTasks">
                {this.state.array.map(
                    (taskInTheList, i) => {
                       return <ul key={i}> <input type="checkbox"/> <li>{taskInTheList}</li> <Link to="/task"> <button>Start</button></Link> <button onClick={()=>this.deletingTask(i)} >Delete</button> </ul>
                       }
                )}
            </div>
        );
    }
}

export default RenderTasks;