/**
 * Created by Roi on 31/07/2016.
 */
import React, { Component } from 'react'

if (process.env.BROWSER) {
    require("../style/main.css");
}

class Main extends Component {
    render() {
        return (
            <div>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

export default Main