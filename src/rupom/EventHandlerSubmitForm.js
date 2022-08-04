import React, { Component } from 'react';

export default class EventHandlerSubmitForm extends Component {

    constructor(){
        super()
        this.state={
            FName: "",
            LName: "",
            Email: "",
            Phone: "",
            SPass: ""
        }
    }

    EventHandlerSubmitFormSUB = (event) => {
        var userdata = event.target.name;
        var userdataValue = event.target.value;
        this.setState({[userdata]:userdataValue})
    }
    

    render() {
        return (
            <div>
                <form action="">
                    <input onChange={this.EventHandlerSubmitFormSUB} name="FName" type="text" placeholder="First Name"/><br/>
                    <input onChange={this.EventHandlerSubmitFormSUB}  name="LName" type="text" placeholder="Last Name"/><br/>
                    <input onChange={this.EventHandlerSubmitFormSUB}  name="Email" type="text" placeholder="Email"/><br/>
                    <input onChange={this.EventHandlerSubmitFormSUB}  name="Phone" type="text" placeholder="Phone"/><br/>
                    <input onChange={this.EventHandlerSubmitFormSUB}  name="UPass" type="password" placeholder="Password"/><br/>
                    <input type="submit" value="Submit New"/>
                </form>
                <span>
                    <table>
                        <tr>
                            <th>First Name</th>
                            <td>{this.state.FName}</td>
                        </tr>
                        <tr>
                            <th>Last Name</th>
                            <td>{this.state.LName}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{this.state.Email}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{this.state.Phone}</td>
                        </tr>
                        <tr>
                            <th>Password</th>
                            <td>{this.state.UPass}</td>
                        </tr>
                    </table>
                </span>
            </div>
        )
    }
}
