import React, { Component } from 'react';
import RenderTasks from './RenderTasks';
import TimeAndDate from './TimeAndDate';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            toDoThings: [],
        }
    }

        changeUserInput=(input)=>{
            this.setState({
                userInput: input,
            })
        }
    
        addToList = (input) => {
            // event.preventDefault();
            let listArray = this.state.toDoThings;
            listArray.push(input);
            this.setState({
                toDoThings:listArray,
                userInput: '',
            })
        }
    
    render() {
        return (
            <div className="toDoListPage">
                <div className="timeAndDate">
                    <TimeAndDate />
                </div>

                {/* div for the form that adds things to the to-do list */}
                <div className="innerFormDiv">
                    <h1>Today's agenda</h1>
                    <input type="text" placeholder="add task to list..." className="input" value={this.state.userInput} onChange={(event)=>{
                        this.changeUserInput(event.target.value)
                    }
                    }/>
                    <button className="button" type="submit" onClick={()=>this.addToList(this.state.userInput)}>Add task</button>
                </div>

                <RenderTasks tasks={this.state.toDoThings}/>
            </div>
        );
    }
}

export default TodoList;
