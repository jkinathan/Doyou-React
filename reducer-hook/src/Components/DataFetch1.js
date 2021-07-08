import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetch1() {


const [loading, setLoading] = useState(true)
const [post,setPost] = useState({})
const [errorr,setError] = useState('')


useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response=>{
        setLoading(false)
        setPost(response.data)
        setError('')
        
    })
    .catch(error=>{
        setLoading(false)
        setPost({})
        setError('Something went wrong')
        console.log(error)
    })
},[])

    return (
        <div>
            {loading ? "Loading..." : post.title}
            {errorr ? errorr : null}
        </div>
    )
}

export default DataFetch1
