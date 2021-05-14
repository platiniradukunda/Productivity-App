import React, { Component } from 'react';

class Greeting extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.greetings}</h1>
            </div>
        );
    }
}

export default Greeting;