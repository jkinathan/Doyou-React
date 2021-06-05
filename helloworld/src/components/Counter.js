import React, { Component } from 'react'

class Counter extends Component {

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    addMe(){
        // this.setState({
        //     count: this.state.count+1
        // },
        // // call back function - execute some code only after state has been updated
        // // execute some code after the state has changed
        // ()=> { console.log('Call back value:',this.state.count )})

        this.setState((previousState,props)=>({
            count: previousState.count + 1
        }))
    }

    addFive(){
        this.addMe()
        this.addMe()
        this.addMe()
        this.addMe()
        this.addMe()
    }
    render() {
        return (
            <div>
                Count - {this.state.count}
                <br></br>
                <button onClick={()=>this.addFive()}>Add</button>               
            </div>
        )
    }
}

export default Counter
