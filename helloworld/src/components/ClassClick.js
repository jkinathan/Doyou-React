
import React, {Component} from 'react';

class ClassClick extends Component{

    ClickHandler(){
        console.log("Class Button Clicked")
    }
    
    render(){
        return (
            <div>
                <button onClick={this.ClickHandler}>
                    CLicke MMEe
                </button>
            </div>
        )
    }
}

export default ClassClick