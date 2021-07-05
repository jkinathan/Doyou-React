import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetch() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            setPost(response.data) //setting the setPosts to get the response data and fill it into the array
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    },[id]) //running the setEffect to run only once only on initial render leave array [] empty

    return (
        <div>
            <form onSubmit={(event)=>setId(event.target.value)}>
                <input type="text" value={id}/>
                
                <button type="submit">Send</button>
            </form>
            
            {/* <ul>
                {
                    posts.map((post,id)=>{
                        return(
                            <li key={id}>
                                {post.title}
                            </li>
                        )
                    })
                }
            </ul> */}

            <p>{post.title}</p>
        </div>
    )
}

export default DataFetch
