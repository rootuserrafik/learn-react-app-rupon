import React from 'react';

function ComProps(props) {
    return (
        <div>
            
            <h1>Welcome To Back! {props.name}</h1>
            <h1>Welcome To Back! {props.phone}</h1>
            <h1>Welcome To Back! {props.email}</h1>
            <h1>{props.contact}</h1>
        </div>
    )
}

export default ComProps
