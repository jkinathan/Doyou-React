import React, { Component } from 'react'

class PropCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0 //state property initialized to 0
        }
    }
    
    clicked=()=>{
        this.setState(prevState=>{ //the argument is a function which accepts the previous state as a parameter
            return {count: prevState.count - 1}
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count,this.clicked)}
            </div>
        )
    }
}

export default PropCounter
