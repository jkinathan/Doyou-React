import React, {useState, useEffect} from 'react'

function CounterOne() {

    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    //useEffect accepts a function as a parameter or argument
    //causing sideeffects from a functional component using effect hook
    useEffect(()=>{
        document.title = `You click ${count}`;
        console.log('Updating....')
    },[count])

    //if you leave the [] empty, the useEffect is run only once on initial render

    //what is included in the second argument is prop or state which if it changes
    //is when the useEffect will be run

    return (
        <div>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
            <button onClick={()=>setCount(count-1)}>Count:{count}</button>
        </div>
    )
}

export default CounterOne
