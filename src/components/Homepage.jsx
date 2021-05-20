import React, { Component } from 'react';
import Greeting from './Greeting';
import RenderQuote from './RenderQuote';
import StartButton from './StartButton';

class Homepage extends Component {
    constructor () {
        super();
        this.state={
            quote: null,
            author: null,
            greeting: null,
            time: null,
        }
    }
    // using componentDidMount so that my function run when the component mounts
    componentDidMount (){

        // function to determine if it is the morning or evening so that I can display
        // Good morning or Good evening
        var determineTime = () => {
            // variable for my name
            var name = "Platin";
            
            var date = new Date();
            // variable for the hour of the day
            var hours = date.getHours();
            // variable for the minute of the day
            var minutes = date.getMinutes();
            // variable for the second of the day
            var seconds = date.getSeconds();
            // function to update the time of the day. take a parameter
            var updateTime = (t) => {
                if(t<10){
                    return "0"+t
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
            
            // variable that holds the time of the day
            const time = hours + ":" + minutes + ":" + seconds + midday;

            // conditional statements that check what time of the day it is
            if(hours<12) {
                var greetings = "Good Morning, " + name + ". Let's grind!"
            } else if(hours>=12 && hours<=18) {
                greetings = "Good Afternoon, " + name
            } else {
                greetings = "Good Evening, " + name
            }

            // updating state with the current time and greeting statement
            this.setState({
                greeting: greetings,
                time: time,
            })
        }

        // calling the function to get a greeting when component mounts
        determineTime();

        // function to call on the api to generate a quote
        var getQuote = async () => {
        // variable for the url that will make our api call
        const url = `https://type.fit/api/quotes`
        try {
            // fetching the data from the api url
            const response = await fetch(url);
            // converting the data to json
            const quotes = await response.json();

            // variable for the number that goes into the quote array data that goes into state
            var quoteNumber = Math.floor(Math.random()*1644); 
            // changing the quote in state to the generated quotes
            this.setState({
                quote: quotes[quoteNumber].text,
                author: quotes[quoteNumber].author,
            })
        }
        catch(err) {
            console.log(err);
        }
    }

    // calling on the function that calls on the api
    getQuote()
    }
    
    render() {
        return (
            <div className="homepage">

                <Greeting greetings={this.state.greeting}/>
              {/* renders the quote from the quote api */}
               <RenderQuote quote={this.state.quote} author={this.state.author}/>
               {/* renders the button that links to the page where you can add to your to-do list */}
               <StartButton />
            </div>
        );
    }
}

export default Homepage;