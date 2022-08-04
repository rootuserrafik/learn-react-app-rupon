import React from 'react'

function Clock(props) {
    return (
        <div>
            <h1>Now time is: {props.data.toLocaleTimeString()}</h1>
        </div>
    )
}

export default Clock
