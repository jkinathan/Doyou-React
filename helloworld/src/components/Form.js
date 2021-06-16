import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             description: ''
        }
    }

    usernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    descriptionChange = (event) =>{
        this.setState({
            description: event.target.value
        })
    }
    
    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.usernameChange}></input>
                    <label>Description</label>
                    <textarea type="text" value={this.state.description} onChange={this.descriptionChange}>

                    </textarea>
                </div>
            </form>
        )
    }
}

// Exporting our file accessible inside App.js
export default Form
