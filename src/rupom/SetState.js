import React, { Component } from 'react';

class SetState extends Component{

    constructor(){
        super()
        this.state={
            name: "Old text"
        }


    }
    
    changeName(a) {
        this.setState({name:a})
    }


    render(){
        return <div>
            <h1>This is {this.state.name}.</h1>
            <button onClick={this.changeName.bind(this, "New Text ♎️")}> Add New Text </button>
        </div>
    }
}
export default SetState