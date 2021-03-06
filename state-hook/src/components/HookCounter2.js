import React, {useState} from 'react'

function HookCounter2() {

    const initialCount = 0
    const [count,setCount] = useState(initialCount)

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount((prevCount) => prevCount +1)}>Add</button>
            <button onClick={() => setCount((prevCount) => prevCount-1)}>Subtract</button>

        </div>
    )
}

export default HookCounter2
