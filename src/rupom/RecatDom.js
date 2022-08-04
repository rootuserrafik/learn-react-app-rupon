import React, { Component } from 'react';
import RecatDOM from 'react-dom';

export default class RecatDom extends Component {

    qusAns(){
        var container = document.getElementById("ans");
        var element = <h1>I am ReactDOM. I am a JavaScript Framework.</h1>
        var callback = function() {
            alert("This working!")
        }
        
        RecatDOM.render(element, container, callback);
        // or 
        // RecatDOM.hydrate(element, container,callback);
    }
    render() {
        return (
            <div>
                <button onClick={this.qusAns}>Show ans</button>
                <h1 id="ans">Who are you?</h1>
            </div>
        )
    }
}
