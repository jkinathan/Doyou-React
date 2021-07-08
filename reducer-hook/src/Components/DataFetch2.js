import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    errorr: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type){
        case 'Fetch_success':
            return {
                loading: false,
                errorr: '',
                post: action.payload
            }
        case 'Fetch_error':
            return{
                loading: false,
                errorr: 'Something went Wrong',
                post: {}
            }
        default:
            return state
    }
}
function DataFetch2() {

    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            dispatch({type: 'Fetch_success', payload: response.data })
            
        })
        .catch(error=>{
            dispatch({type: 'Fetch_error'})
        })
    },[])

    return (
        <div>
            {state.loading ? "Loading..." : state.post.title}
            {state.errorr ? state.errorr : null}
        </div>
    )
}

export default DataFetch2
