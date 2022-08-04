import React, { Component } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default class OnChangeHandler extends Component {

    constructor(){
        super()
        this.state={
            Name: ""
        }
    }

    onChangeHandlerFun = (event) => {

        var userName = event.target.value;
        this.setState({Name:userName})
    }
    render() {
        return (
            <div>
                <form action="">                    
                    <br/>
                    <input onChange={this.onChangeHandlerFun}  type="text"/>
                    <input type="submit"/>
                    <h1>{this.state.Name}<ChevronRightIcon/></h1>
                </form>
            </div>
        )
    }
}
