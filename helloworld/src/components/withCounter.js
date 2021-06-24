import React from 'react';

// below function originalComponent(WrappedComponent) that returns a newComponent (WithCounter)
const withCounter = (WrappedComponent, incrementNumber) =>{
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        
        incrementCount=()=>{
            this.setState(prevState=>{
                return {count: prevState.count + incrementNumber}
            })
        }
    
        render(){
            console.log(this.props.name)
            return <WrappedComponent 
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    {...this.props}
                    // passing down the rest of the props from the HOC
                    />
        }
    }
    return WithCounter;
}

export default withCounter;

// Higher order function is afunction that accepts original component and returns a new component