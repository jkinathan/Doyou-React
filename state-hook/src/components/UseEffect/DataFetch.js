import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetch() {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            setPosts(response.data) //setting the setPosts to get the response data and fill it into the array
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    },[]) //running the setEffect to run only once only on initial render leave array [] empty

    return (
        <div>
            <ul>
                {
                    posts.map((post,id)=>{
                        return(
                            <li key={id}>
                                {post.title}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default DataFetch
