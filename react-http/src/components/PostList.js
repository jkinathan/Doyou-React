import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    componentDidMount(){
        axios.get()
    }
    
    render() {
        return (
            <div>
                List of Posts
            </div>
        )
    }
}

export default PostList
