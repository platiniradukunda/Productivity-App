import React, { Component } from 'react';
import RenderTasks from './RenderTasks';
import TimeAndDate from './TimeAndDate';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            toDoThings: JSON.parse(localStorage.getItem('toDoThings')),
        }
    }

        changeUserInput=(input)=>{
            this.setState({
                userInput: input,
            })
        }

        addToLocalStorage = () => {
            // task variable holds what the user types in DOM
            var task = this.state.userInput;
            var getItems = localStorage.getItem('toDoThings');
            // conditional statement that checks if the array toDoThings already exists in local storage
            if(getItems == null) {
                // creating an array in local storage where we will push all the words, there is nothing with the name toDoThings
                var toDoThings = [];
                // pushing all the words a user types into the array that lives in local storage
                toDoThings.push(task);
                // putting the pushed information in json format so that the name of the array is the key and the name of the task goes in as a value
                localStorage.setItem('toDoThings', JSON.stringify(toDoThings));
            } else {
                // the array already exists in local storage so we just pull it so that we can add to it
                var toDoThings = JSON.parse(getItems);
                // adding to the array that already exists
                toDoThings.push(task);
                // putting the pushed information in json format so that the name of the array is the key and the name of the task goes in as a value
                localStorage.setItem('toDoThings', JSON.stringify(toDoThings));
            }
            this.setState({
                // setting state to the array that lives in local storage
                toDoThings: JSON.parse(getItems),
                userInput: '',
            })
            this.forceUpdate();
        }
    
        // addToList = (input) => {
        //     // event.preventDefault();
        //     let listArray = this.state.toDoThings;
        //     listArray.push(input);
        //     this.setState({
        //         toDoThings:listArray,
        //         userInput: '',
        //     })
        // }
    
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
                    <button className="button" type="submit" onClick={this.addToLocalStorage}>Add task</button>
                </div>

                <RenderTasks tasks={this.state.toDoThings}/>
            </div>
        );
    }
}

export default TodoList;
