import React, {useReducer} from 'react'


const initialState = {
    firststate: 0,
    Countstate2 : 0
}
const reducer = (currentState, action)=>{ //reducer function accepts also two parameters currentState
    // and second the action to be done on the current state hehehe
    //it will return a single value the new state
    switch(action.type){
        case 'increment':
            return {
                ...currentState,
                firststate: currentState.firststate + action.value
            }
        case 'decrement':
            return {
                ...currentState,
                firststate: currentState.firststate - action.value }
        case 'Secondincrement':
            return {
                ...currentState,
                Countstate2: currentState.Countstate2 + action.value
            }
        case 'Seconddecrement':
            return {
                ...currentState,
                Countstate2: currentState.Countstate2 - action.value }
        case 'reset':
            return initialState
        default:
            return {currentState}
    }

}
function ReducerHookReduxmethod() {

    const[newCount, dispatch] = useReducer(reducer,initialState) //useReducer function accepts two args, first is the reducer function
    //second is the initial state
    //useReducer function returns two pair values, one is the newState and second is the dispatch
    //method dispatch which calls the respective action on the ---current state---
    //we shall use array distructuring
    //dispatch action executes the code present in the reducer function
    return (
        <div>

            Count: {newCount.firststate}
            <br>
            </br>
            
            <button onClick={()=>dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={()=>dispatch({ type: 'decrement', value:1 })}>Decrement</button>

            <button onClick={()=>dispatch({ type: 'increment', value: 5 })}>Increment by 5</button>
            <button onClick={()=>dispatch({ type: 'decrement', value: 5 })}>Decrement by 5</button>
            
            <br>
            </br>
            Second Counter : {newCount.Countstate2}
            <br>
            </br>
            
            <button onClick={()=>dispatch({ type: 'Secondincrement', value: 10 })}>Secondincrement by 10</button>
            <button onClick={()=>dispatch({ type: 'Seconddecrement', value: 10 })}>Secondincrement by 10</button>



<button onClick={()=>dispatch({ type: 'reset' })}>Reset</button>


        </div>
    )
}

export default ReducerHookReduxmethod
