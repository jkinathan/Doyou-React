import React from 'react';

// function Greet(){
//     return <h1> Hello Jordan</h1>
// }
// const Greet = ({name,heroname}) => {
    // or 
const Greet = (props) => {
    const {name, heroname} = props
    // extracting only name and heroname from the props
    // restructuring in the parameter
    return (
        <div>
            <h1>Hello {name} a.k.a {heroname} !</h1>
            {/* {props.children} */}
        </div>
        
    );
    
}
// or
// export const Greet = ()=> <h1>Hello Jordy!</h1>



export default Greet;