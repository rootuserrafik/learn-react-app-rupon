import React, { Component } from 'react';

class State extends Component{

    constructor(){
        super()
// Two way you can use STATE
        // Part 1
        this.state={
            name: "Md. Rafikul Islam",
            age: "26",
            address: "Uttara, Dhaka"
        }

        // Part 2
        var object={            
            nameB: "Pavel Rahoman",
            ageB: ["26", "27", "28", "29"], // if you want to you can add funcation by using array value
            addressB:{
                country: ["Bangladesh", "India", "United State", "Japan", "Canada"] ,
                states: ["Barisal", "Dhaka", "Khulna", "Noyakhali"],
                district: ["Barisal","Dhaka" , "Uttara", "Khulna", "Noyakhali"]
            } // also create child object

        }
        this.stateB = object;
    }

    render(){
    return <div>
            <h1>My Name is {this.state.name}. I'm {this.state.age} Years old. I live in {this.state.address}.</h1>
            <h1>My Name is {this.stateB.nameB}. I'm {this.stateB.ageB[0]} Years old. I live in {this.stateB.addressB.district[0]}, {this.stateB.addressB.country[0]}.</h1>
    </div>
    }
}

export default State
