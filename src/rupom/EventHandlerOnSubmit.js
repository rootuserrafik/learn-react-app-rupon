import React, { Component } from 'react'

export default class EventHandlerOnSubmit extends Component {

    constructor(){
        super()
        this.state={
            username: ""
        }
    }


    eventHandlerOnSubmit = (event) => {
        var userName = event.target.name;
        var userNameValue = event.target.value;

        this.setState({[userName]:userNameValue})
    }
    eventHandlerOnSubmitFun = () => {
        alert(this.state.username);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.eventHandlerOnSubmitFun} action="">
                    <input onChange={this.eventHandlerOnSubmit} name="username" type="text"/>
                    <input type="submit" value="Submit Name"/>
                    <h1>{this.state.username}</h1>
                </form>
            </div>
        )
    }
}
