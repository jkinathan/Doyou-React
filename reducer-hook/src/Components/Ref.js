import React,{useRef, useEffect} from 'react'

function Ref() {

    const inputRef = useRef(null)
    //pass in the initial value

    useEffect(()=>{
        inputRef.current.focus()
        //run it once as soon as the page is loaded
    },[])

    return (
        <div>
            <input ref={inputRef} type="text"/>
            {/* //use ref keyword for attaching the created ref to the input field */}
        </div>
    )
}

export default Ref
