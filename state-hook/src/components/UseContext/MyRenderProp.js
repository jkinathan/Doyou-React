import React,{useState} from 'react'

function MyRenderProp(props) {


    const [count,setCount] = useState(0)

    // props.counter = count

    const myFunction = ()=>{
        setCount(count -1)
    }

    return (
        <div>
            
            <br></br>
            {
                props.name(count,myFunction)
            }
        </div>
    )
}

export default MyRenderProp
