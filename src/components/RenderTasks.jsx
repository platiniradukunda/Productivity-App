import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class RenderTasks extends Component {
    constructor(props){
        super(props);
        this.state={
            array: this.props.tasks,
        }
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
                {/* mapping over the array to render it to the DOM and also passing each individual item as a prop */}
                {/* The passed prop will be used on the next page (where it is linked to. match concept is used here) */}
                {this.state.array.map(
                    (taskInTheList, i) => {
                       return <ul key={i}> <input type="checkbox"/> <li>{taskInTheList}</li> <Link to={`/task/${taskInTheList}`}> <button>Start</button></Link> <button onClick={()=>this.deletingTask(i)} >Delete</button> </ul>
                       }
                )}
            </div>
        );
    }
}

export default RenderTasks;