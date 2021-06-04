import React, { Component } from 'react';

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: "Welcome Visitor"
        }
    }
    
    callMessage(){
        this.setState({
            message: "Thank You for Subscribing!!!"
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.callMessage()}>Change State</button>
            </div>
        )
    }
}

export default Message