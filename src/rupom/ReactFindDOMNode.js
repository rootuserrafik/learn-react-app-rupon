import React, { Component } from 'react';
import ReactDOM from "react-dom";

export default class ReactFindDOMNode extends Component {

    btnImgEx(){
        var changeOnimg = document.getElementById("imgLinkA");
        ReactDOM.findDOMNode(changeOnimg).src="https://images.pexels.com/photos/690596/pexels-photo-690596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    }
    render() {
        return (
            <div>
                <button onClick={this.btnImgEx} >Change Images</button><br/>
                <img id="imgLinkA" width="450px" src="https://images.pexels.com/photos/2923156/pexels-photo-2923156.jpeg" alt="Old Images"/>
            </div>
        )
    }
}
