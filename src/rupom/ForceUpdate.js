import React, {Component} from 'react';

class ForceUpdate extends Component{
    constructor(){
        super();
        this.updateData=this.updateData.bind(this);
        
    }

    updateData(){
        this.ForceUpdate();
    }

    // https://www.youtube.com/watch?v=VqvmNQ9SFo8&list=PLkyGuIcLcmx2abvUMewDtJf_jHjrX__0C&index=23

    render(){
        return(
            <div>
                <button onClick={this.updateData} >New Update</button>
                <h1>{Math.random()}</h1>
            </div>
        )
    }
}

export default ForceUpdate
