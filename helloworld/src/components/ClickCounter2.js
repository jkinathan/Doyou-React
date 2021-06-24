import React, { Component } from 'react'

class ClickCounter2 extends Component {
    
    render() {
        return (
            <button onClick={this.props.clicked}>Clicked {this.props.count} times</button>
        )
    }
}

export default ClickCounter2
