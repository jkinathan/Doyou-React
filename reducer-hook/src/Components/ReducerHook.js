import React, {useReducer} from 'react'


const initialState = 0
const reducer = (currentState, action)=>{ //reducer function accepts also two parameters currentState
    // and second the action to be done on the current state hehehe
    //it will return a single value the new state
    switch(action){
        case 'increment':
            return currentState + 1
        case 'decrement':
            return currentState -1
        case 'reset':
            return initialState
        default:
            return currentState
    }

}
function ReducerHook() {

    const[newCount, dispatch] = useReducer(reducer,initialState) //useReducer function accepts two args, first is the reducer function
    //second is the initial state
    //useReducer function returns two pair values, one is the newState and second is the dispatch
    //method dispatch which calls the respective action on the ---current state---
    //we shall use array distructuring
    //dispatch action executes the code present in the reducer function
    return (
        <div>

            Count: {newCount}
            
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>


        </div>
    )
}

export default ReducerHook
