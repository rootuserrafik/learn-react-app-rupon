import React from 'react'

function NumberDoubled() {
    const number = [1,2,3,4,5,6,7];
    const doubled = number.map((number) => number * 2);
    console.log(doubled[5]);
    return (
        <div>
            <ul>
    <li>{number}</li>
    <li>{doubled}</li>
            </ul>
        </div>
    )
}

export default NumberDoubled
