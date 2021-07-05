import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetch() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [buttonid,setButtonId] = useState(1)

    const sender = () =>{
        setButtonId(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
        .then(response=>{
            setPost(response.data) //setting the setPosts to get the response data and fill it into the array
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    },[buttonid]) //running the setEffect to run only once only on initial render leave array [] empty

    
    return (
        <div>
            
                <input type="text" value={id} onChange={(event)=>setId(event.target.value)}/>
                <button type="submit" onClick={sender}> Send </button>
            
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
