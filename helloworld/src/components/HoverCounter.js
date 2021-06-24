import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementHover=()=>{
        this.setState(prevSState=>{
            return {
                count : prevSState.count + 2
            }
        })
    }
    
    render() {
        return (
            <div>
                <h2 onMouseOver={this.incrementHover}>Hovered {this.state.count} times</h2>
            </div>
        )
    }
}

export default HoverCounter
