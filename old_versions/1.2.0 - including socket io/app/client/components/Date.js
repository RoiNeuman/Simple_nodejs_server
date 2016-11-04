/**
 * Created by Roi on 28/07/2016.
 */
import React, { Component } from 'react'

class Date extends Component {

    render() {
        return (
            <b>{this.props.date.text}</b>
        )
    }
}

export default Date