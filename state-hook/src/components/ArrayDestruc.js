import React, { Component } from 'react'

class ArrayDestruc extends Component {
    constructor(props) {
        super(props)
    
        const alphabet = ['A','B','C','D','E','F']
        const numbers = ['1','2','3','4','5','6']

        const newArray = [...alphabet, ...numbers] //combining two arrays


        const [a,,c, ...rest] = alphabet //getting first, skip second, get third and the rest of array
        console.log(a,c, rest)
        console.log(newArray)
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



