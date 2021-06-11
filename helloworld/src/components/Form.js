import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: ''
        }
    }

    usernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    
    render() {
        return (
            <Form>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.usernameChange}></input>
                </div>
            </Form>
        )
    }
}

export default Form
