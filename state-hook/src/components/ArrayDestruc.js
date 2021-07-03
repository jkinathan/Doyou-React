import React, { Component } from 'react'

class ArrayDestruc extends Component {
    constructor(props) {
        super(props)
    
        const alphabet = ['A','B','C','D','E','F']


        const [a,b,c, ...rest] = alphabet
        console.log(a,b,c, rest)
    }
    
    
    render() {
        return (
            <div>
                
                <p> hello</p>

                
            </div>
        )
    }
}

export default ArrayDestruc



