import React from 'react'

function RenderSon(props) {
    return (
        <div>
            Clicked: {props.count}
            <br>
            </br>
            <button onClick={props.myFunc}>Click</button>
        </div>
    )
}

export default RenderSon
