import React from "react";
import {Link} from "react-router-dom";
import imgLogo from '../../images/logo192.png'
import './Header.scss'

export const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <img src={imgLogo} alt='Logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>
                Shop
            </Link>
            <Link to='/shop' className='option'>
                Contact
            </Link>
        </div>
    </div>
)