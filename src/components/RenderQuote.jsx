import React, { Component } from 'react';

class RenderQuote extends Component {
    render() {
        return (
            <div className="renderQuote">
               <h1>{this.props.quote}</h1>
                <h1>{this.props.author}</h1> 
            </div>
        );
    }
}

export default RenderQuote;