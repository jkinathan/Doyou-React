import React, { Component } from 'react'
import axios from 'axios'

class FormPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userid: "",
             title: "",
             body: ""
        }
    }

    ChangeMe = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    Send = (event)=>{
        event.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response=>{
            console.log("Succesfully inserted State data")
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.Send}>
                    <div><input type="text" value={this.state.userid} onChange={this.ChangeMe}   name="userid"/></div>                    
                    <div><input type="text" value={this.state.title}  onChange={this.ChangeMe}  name="title"/></div>                    
                    <div><input type="text" value={this.state.body}   onChange={this.ChangeMe} name="body"/></div>                    
                    <div><button type="submit">Submit</button></div>
                </form>
            </div>
        )
    }
}

export default FormPost
