import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             description: '',
             topic: 'React'
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

    topicChange = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.description} ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.usernameChange}></input>
                    <br></br>
                    <label>Description</label>
                    
                    <textarea type="text" value={this.state.description} onChange={this.descriptionChange}>

                    </textarea>
                    <br></br>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.topicChange}>
                        <option value="react">React</option>
                        <option value="django">Django</option>
                        <option value="laravel">Laravel</option>
                    </select>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}

// Exporting our file accessible inside App.js
export default Form
