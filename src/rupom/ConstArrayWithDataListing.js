import React, { Component } from 'react'

export default class ConstArrayWithDataListing extends Component {

    DataListingOption = (data) => {
        return <option>{data}</option>
    }
    render() {

        const country=['Bangladesh', 'India', 'Canada'];
        const dataItems=country.map(this.DataListingOption)

        return (
            <div>
                <select name="" id="">
                    {dataItems}
                </select>
            </div>
        )
    }
}
