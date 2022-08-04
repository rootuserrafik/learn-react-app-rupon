import React, { Component } from 'react'

export default class EventHandlerOnChange extends Component {

    constructor(){
        super()
        this.state={
            username: ""
        }
    }


    eventHandlerOnChange = (event) => {
        var userName = event.target.name;
        var userNameValue = event.target.value;

        this.setState({[userName]:userNameValue})
    }
    render() {
        return (
            <div>
                <input onChange={this.eventHandlerOnChange} name="username" type="text"/>
                <h1>{this.state.username}</h1>
            </div>
        )
    }
}
