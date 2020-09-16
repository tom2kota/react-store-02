import React from "react";
import {CustomButton} from "../custom-button/CustomButton";
import {CartItem} from "../cart-item/CartItem";
import './CartDropdown.scss'

export const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <CartItem/>
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
)