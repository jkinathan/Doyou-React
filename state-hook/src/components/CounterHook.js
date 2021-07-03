import React, {useState} from 'react'

function CounterHook() {

    const [count,countUpdater] = useState(0)

    
    return (
        <div>
            <button onClick={() => countUpdater(count-1)}>Count{count}</button>
        </div>
    )
}

export default CounterHook
