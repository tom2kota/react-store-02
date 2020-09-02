import React from "react";
import imgLogo from '../../images/logo192.png'
import {HeaderContainer, LogoContainer, OptionDiv, OptionsContainer, OptionsLink} from "./headerStyles";

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

            <OptionDiv>
                Sign Out
            </OptionDiv>

        </OptionsContainer>

    </HeaderContainer>
)