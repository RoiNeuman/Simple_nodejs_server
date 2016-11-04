/**
 * Created by Roi on 30/07/2016.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'

class HomeHeader extends Component {

    render() {
        return (
            <header className="header-home-title">
                <h1><b><Link to="/">Home Page</Link></b></h1>
            </header>
        )
    }
}

export default HomeHeader