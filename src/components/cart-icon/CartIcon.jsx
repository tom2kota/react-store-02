import React from "react";
import {ReactComponent as ShoppingIcon} from "../../images/shopping-bag.svg";
import {CartDropdown} from "../cart-dropdown/CartDropdown";
import './CartIcon.scss';

export const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
        <CartDropdown/>
    </div>
)