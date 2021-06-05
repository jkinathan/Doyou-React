import React, { Component } from 'react'

class Counter extends Component {

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    addMe(){
        this.setState({
            count: this.state.count+1
        })
    }
    render() {
        return (
            <div>
                Count - {this.state.count}
                <br></br>
                <button onClick={()=>this.addMe()}>Add</button>               
            </div>
        )
    }
}

export default Counter
