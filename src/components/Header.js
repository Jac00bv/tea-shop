import React from 'react'
import '../scss/header.scss'
import logo from '../images/icon2.png'

const Header= () => {
    return (
        <header>
            <h1>Tea Shop</h1>
            <img src={logo} alt="logo"/>
        </header>
    )
}

export default Header