
import React, { Component } from 'react';

class Welcome extends Component{
    render(){
        return (
                <div>
                    <h1>Welcome { this.props.name } Kinda { this.props.heroname }</h1>
                    <h3>{ this.props.children }</h3>
                </div>
            );
    }
}

export default Welcome;