import React, { Component } from 'react'

class ConditionReturnVariable extends Component{
    
    // Conditional Return variable elements
    constructor(){
        super()
        this.state={
            login:true
        }
    }

    render(){
        return(
            this.state.login?
            (
                <h1>True</h1>
            )  : (
                <h1>false</h1>
            )
        )
    }
}

export default ConditionReturnVariable
