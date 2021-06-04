import React from 'react';

// function Greet(){
//     return <h1> Hello Jordan</h1>
// }

const Greet = (props) => {
    console.log(props)

    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroname} !</h1>
            {props.children}
        </div>
        
    );
    
}
// or
// export const Greet = ()=> <h1>Hello Jordy!</h1>



export default Greet;