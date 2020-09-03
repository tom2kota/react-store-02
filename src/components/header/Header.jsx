import React from "react";
import imgLogo from '../../images/logo192.png'
import {HeaderContainer, LogoContainer, OptionsContainer, OptionsLink} from "./headerStyles";

export const Header = () => (
    <HeaderContainer>

        <LogoContainer to='/'>
            <img src={imgLogo} alt='Logo'/>
        </LogoContainer>

        <OptionsContainer>
            <OptionsLink to='/'>
                Home
            </OptionsLink>

            <OptionsLink to='/shop'>
                Shop
            </OptionsLink>

            <OptionsLink to='/contact'>
                Contact
            </OptionsLink>

            <OptionsLink to='/signin'>
                Sign In
            </OptionsLink>

            <OptionsLink as='div'>
                Sign Out
            </OptionsLink>

        </OptionsContainer>

    </HeaderContainer>
)