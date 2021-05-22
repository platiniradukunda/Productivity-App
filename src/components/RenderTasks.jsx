import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class RenderTasks extends Component {
    constructor(props){
        super(props);
        this.state={
            array: this.props.tasks,
        }
    }

    // functionToListen = () => {
    //     window.addEventListener('storage', ()=>{
    //         // this.setState({
    //         //     array: JSON.parse(localStorage.getItem('toDoThings')),
    //         // })
    //         console.log(JSON.parse(localStorage.getItem('toDoThings')))
    //     })
    // }
        
        

    deletingTask = (index) => {
        // setting the array in state to be newArray
        let newArray = this.state.array
        // deleting the word that I click on. takes the index to start splicing from and how many words after that it should delete
        newArray.splice(index, 1);
        this.setState({
            array: newArray,
        })
        // equating the current state to local storage to update the DOM
        localStorage.setItem('toDoThings', JSON.stringify(newArray));
        }
        
    render() {
        return (
            <div className="renderTasks">
                {this.functionToListen}
                {/* mapping over the array to render it to the DOM and also passing each individual item as a prop */}
                {/* The passed prop will be used on the next page (where it is linked to. match concept is used here) */}
                {this.state.array && this.state.array.map( (taskInTheList, i) => {
                       return <ul key={i}> <li>{taskInTheList}</li> <Link to={`/task/${taskInTheList}`}> <button>Start</button></Link> <button onClick={()=>this.deletingTask(i)} >Delete</button> </ul>
                       }
                )}
            </div>
        );
    }
}

export default RenderTasks;