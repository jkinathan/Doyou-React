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
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(
            response => {
                console.log(response)
                this.setState({posts: response.data})
            }
        )
        .catch(error=>{
            console.log(error)

        })
    }
    
    render() {
        return (
            <div>
                List of Posts
                {
                    
                    this.state.posts.map((item,id)=>{
                        return(

                            <div key={ item.id }>
                            
                                <p> { item.title } </p>
                            
                            </div>
                        )
                        
                    })
                }
            </div>
        )
    }
}

export default PostList
