/**
 * Created by Roi on 31/07/2016.
 */
import React, { Component } from 'react'
// import components
import AsideLeft from './homePage/AsideLeft'
import HomeHeader from './homePage/HomeHeader'
import AsideRight from './homePage/AsideRight'
import MainSection from './homePage/MainSection'
import HomeFooter from './homePage/HomeFooter'

if (process.env.BROWSER) {
    require("../style/home.css");
}

class Home extends Component {

    render() {
        return (
            <div>
                <AsideLeft/>
                <HomeHeader/>
                <AsideRight/>
                <MainSection {...this.props} />
                <HomeFooter/>
            </div>
        )
    }
}

export default Home