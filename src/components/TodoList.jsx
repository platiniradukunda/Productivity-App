import React, { Component } from 'react';
import RenderTasks from './RenderTasks';
import TimeAndDate from './TimeAndDate';
class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            toDoThings: [],
            date: null,
            time: null,
        }
    }

    componentDidMount(){
        // function to get the time data
        var determineTime = () => {
            var date = new Date();
            // variable for the hour of the day
            var hours = date.getHours();
            // variable for the minute of the day
            var minutes = date.getMinutes();
            // variable for the second of the day
            var seconds = date.getSeconds();
            // variable for the year
            var year = date.getFullYear();
            // variable for the month. we have to using this because getMonth() returns the month in integer form. ex: May as 4.
            var options = {month: 'long'};
            var month = new Intl.DateTimeFormat('en-US', options).format(date);
            console.log(month);
            // variable for the date on the calendar month
            var dateCalendar = date.getDate();
            // variable for the day of the week. the day of the week returns as a number so it has to be changed into a string.
            var day = date.getDay();
            console.log(day)
            // declaring the variables for the integers returned when getDay is called for specific days
            var weekDay = new Array(7);
            weekDay[1]="Monday";
            weekDay[2]="Tuesday";
            weekDay[3]="Wednesday";
            weekDay[4]="Thursday";
            weekDay[5]="Friday";
            weekDay[6]="Saturday";
            weekDay[0]="Sunday";
            // Putting together the day that will be pushed to state and rendered to the DOM
            var dayDisplayed = weekDay[day]+ ", " + month+ "-" + dateCalendar+ "-" + year;


            // function to update the time of the day. takes a parameter t that's equivalent to hours, minutes or seconds
            var updateTime = (t) => {
                if(t<10){
                    return "0" + t
                } else {
                    return t;
                }
            }

            //  calling on the updateTime function so that we can get updated time
            hours = updateTime(hours);
            minutes = updateTime(minutes);
            seconds = updateTime(seconds);
            
            // ternary statement for if it is AM or PM
            var midday = (hours >= 12 ) ? "PM" : "AM";
            
            // variable that holds the time of the day to be pushed into state and rendered to the DOM
            const time = hours + ":" + minutes + ":" + seconds + midday;
            // updating state with the current time and greeting statement
            console.log(date);
            console.log(time);
            this.setState({
                date: dayDisplayed,
                time: time,
            })
        }
        // calling on the function so that it renders on component Mount
        determineTime();
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
                    <TimeAndDate date={this.state.date} time={this.state.time} />
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
