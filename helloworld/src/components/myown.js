import React, {Component} from 'react' ;


class Zaga extends Component{
    render(){
        return (
            <div>
               <p>The Kids: {this.props.children} </p>

            </div>
        );
        }
}

export default Zaga;