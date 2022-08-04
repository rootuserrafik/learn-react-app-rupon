import React, { Component } from 'react'


// Conditional Return if else

class ConditionReturnIfElse extends Component{

    constructor(){
        super()
        this.state={
            login:{
                userName: "rafik",
                userPass: "505050"
            }
        }
    }
    render() {

        if(this.state.login.userPass==505050){
            
            return (
                <div>
                    <h1>Login Success</h1>
                    <button>Logout</button>
                </div>
            )
        } else {
            return(
                <div>
                    <input />
                    <button>Login</button>
                </div>
            )
        }
    }
}


export default ConditionReturnIfElse
