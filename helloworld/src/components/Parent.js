import React, {Component} from 'react';
import Child from './Child';

class Parent extends Component{
    
    constructor(){
    super()
        this.state = {
            ParentName: "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        // alert('Hello'+this.state.ParentName)
        // ES6
        alert(`Hello ${this.state.ParentName} from ${childName}`)
    }
    render(){
        return(
            <div>
                <Child greetHandler={this.greetParent}></Child>
            </div>
        )
    }
}

export default Parent