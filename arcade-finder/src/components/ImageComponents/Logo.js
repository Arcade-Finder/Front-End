import React from 'react'
import logo from '../../images/logo.png'
import '../../styling/images.sass'

const LogoComponent = () => {
    return (
        <div>
            <img src={logo} alt="logo" className="logo"/>
        </div>
    );
}

export default LogoComponent
