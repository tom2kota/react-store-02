import React from "react";
import './CheckoutPage.scss'

const CheckoutPage = ({cartItems = [{name: 'Product #1'}, {name: 'Product #2'}], total = 10}) => (
    <div className='checkout-page'>

        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>

        {cartItems.map(cartItem => cartItem.name)}

        <div className='total'>
            <span>Total: ${total}</span>
        </div>

    </div>
)

export default CheckoutPage