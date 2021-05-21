import React, { Component } from 'react';

class TimeAndDate extends Component {
    constructor(){
        super();
        this.state= {
            time: new Date(),
        }
    }
    // function to set state with the new time so that it can be updated to the DOM
    currentTime(){
        this.setState({
            time: new Date(),
        })
    }
    // Update the DOM with the new time every second
    componentWillMount(){
        // the function that updates the state with the current time will be run every second
        setInterval(()=>this.currentTime(),1000)
    }
    render() {
        return (
            <div className="timeAndDate">
                {/* Rendering the date */}
                <h1>{this.state.time.toDateString()}</h1>
                {/* Rendering the time */}
                <h1>{this.state.time.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default TimeAndDate;