import React, {Component} from 'react';

class Usergreeting extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedin : true
        }
    }
    render(){
        // let message

        // if(this.state.isLoggedin){
        //     message =  <div>Welcome Jordan</div>
        // }
        // else{
        //     message =  <div>Welcome Guest</div>
        // }

        return(
            this.state.isLoggedin ? <div>Welcome Jordan</div> : <div>Welcome Guest</div>
        )
        // if(this.state.isLoggedin){
        //     return(
        //         <div>
        //             Welcome Jordan
        //         </div>
        //     )
        // }
        // else{
        //     return (
        //         <div> Welcome Guest</div>
        //     )
        // }
        // return(

        //     <div>
        //         <div>Welcome Jordan</div>
        //         <div>Welcome Guest</div>
        //     </div>
        
        // )
    }
}

export default Usergreeting