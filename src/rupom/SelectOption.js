import React, { Component } from 'react'

export default class SelectOption extends Component {

    constructor(){
        super();
        this.state={
            city1 : "Dhaka",
            city2 : "Barisal",
            city3 : "Rajshahi",
            city4 : "Khulna",
            city5 : "Potuyakhali",
            city6 : "Dinaspur",
            auto: "Select City",
        }
    }

    OneChangEventHandeler = (event) => {
        var setUserData = event.target.value;
        this.setState({getUserData:setUserData, auto:setUserData});
    }

    render() {
        return (
            <div>
                <select onChange={this.OneChangEventHandeler} name="" id="" value={this.state.auto}>
                    <option > {this.state.auto}</option>
                    <option > {this.state.city1}</option>
                    <option > {this.state.city2}</option>
                    <option > {this.state.city3}</option>
                    <option > {this.state.city4}</option>
                    <option > {this.state.city5}</option>
                    <option > {this.state.city6}</option>
                </select>
                <h1>{this.state.getUserData}</h1>
            </div>
        )
    }
}
