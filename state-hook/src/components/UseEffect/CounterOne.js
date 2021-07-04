import React, {useState, useEffect} from 'react'

function CounterOne() {

    const [count,setCount] = useState(0)

    //useEffect accepts a function as a parameter or argument
    //causing sideeffects from a functional component using effect hook
    useEffect(()=>{
        document.title = `You click ${count}`;
    })

    return (
        <div>
            <button onClick={()=>setCount(count-1)}>Count:{count}</button>
        </div>
    )
}

export default CounterOne
