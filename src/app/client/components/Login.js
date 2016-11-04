/**
 * Created by Roi on 31/07/2016.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'
// import components


if (process.env.BROWSER) {
    require("../style/login.css");
}

class Login extends Component {

    render() {
        return (
            <div>
                <header className="login-title">
                    <Link to="/"><h1><b>Login Page</b></h1></Link>
                </header>
                <section id='login-section' className='login-section'>
                    <Link to="/home"><button id='login-btn' className='login-btn'><span>Login </span></button></Link>
                </section>
            </div>
        )
    }
}

export default Login