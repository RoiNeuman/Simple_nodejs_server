/**
 * Created by Roi on 30/07/2016.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'

class AsideRight extends Component {

    render() {
        return (
            <aside className='aside-right'>
                <div className='top-btn'>
                    <button id='profile-btn'>Profile</button>
                    <Link to="/"><button id='logout-btn'>Logout</button></Link>
                </div>
            </aside>
        )
    }
}

export default AsideRight