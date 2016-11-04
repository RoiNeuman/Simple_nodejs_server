/**
 * Created by Roi on 30/07/2016.
 */
import React, { Component } from 'react'

class AsideLeft extends Component {

    render() {
        return (
            <aside className='aside-left'>
                <div className='aside-left-container'>
                    <h3>Options:</h3>
                    <ul className='aside-left-options-list'>
                        <li><span>Explore</span></li>
                        <li><span>Upload clip</span></li>
                    </ul>
                </div>
            </aside>
        )
    }
}

export default AsideLeft