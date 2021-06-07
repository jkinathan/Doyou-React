import React, {Component} from 'react';

class EventBind extends Component{
    constructor(){
        super()
        this.state = {
            message: "Hello"
        }
        // Method 3 Event Binding
        // this.Clicker = this.Clicker.bind(this)
    }
    // Clicker(){
    //     this.setState({
    //         message: "Good Morning!"
    //     })
    // }
    // Method 4
    Clicker = ()=> {
        this.setState({
            message: "Good Morning!"
        })
    }
    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                {/* Event handler bing using .bind(this) <button onClick={this.Clicker.bind(this)}>The Click</button>*/}
                
                {/* Binding using arrowFunction <button onClick={()=>this.Clicker()}>The Click</button>*/}
                <button onClick={this.Clicker}>The Click</button>
            </div>
        )
    }
}

export default EventBind