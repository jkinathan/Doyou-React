import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props)
    
        // this.state = {
             
        // }
    }
    
    render() {
        return (
            <div>
                {this.props.render(true)}
                {/* Render prop is  sharing code between components using a prop whose value is a function*/}
            </div>
        )
    }
}

export default User
