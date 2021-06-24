import React, { Component } from 'react'

class HoverCounter2 extends Component {
    
    render() {
        return (
            <h1 onMouseOver={this.props.clicked}>Hovered {this.props.count} times</h1>
        )
    }
}

export default HoverCounter2
