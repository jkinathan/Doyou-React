import React from 'react';

function FunctionClick(){

    function clickHandler(){
        console.log("Button Clicked")
    }
    return (
        <div>
            {/* <button onClick={()=>this.clickHandler}> Click Me</button> for Class Component where function there after doesnt have the word function*/}
            {/* or */}
            <button onClick={clickHandler}> Click Me</button>
        </div>
    )
}

export default FunctionClick