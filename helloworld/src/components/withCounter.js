import React from 'react';

// below function originalComponent(WrappedComponent) that returns a newComponent (WithCounter)
const withCounter = WrappedComponent =>{
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        
        incrementCount=()=>{
            this.setState(prevState=>{
                return {count: prevState.count+1}
            })
        }
    
        render(){
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}/>
        }
    }
    return WithCounter;
}

export default withCounter;

// Higher order function is afunction that accepts original component and returns a new component