
import React, { Component } from 'react';

class Welcome extends Component{
    // destructuring props in the class components
    render(){
        const { name,heroname } = this.props
        // simply extracting the necessary props
        return (
                <div>
                    <h1>Welcome { name } Kinda { heroname }</h1>
                    {/* <h3>{ this.props.children }</h3> */}
                </div>
            );
    }
}

export default Welcome;