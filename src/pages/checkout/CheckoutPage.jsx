import React from "react";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import imgLogo from '../../images/logo192.png'
import './CheckoutPage.scss'

const CheckoutPage = ({
                          cartItems = [
                              {
                                  id: 1,
                                  name: 'Product #1',
                                  image: imgLogo,
                                  price: 20,
                                  quantity: 1
                              },
                              {
                                  id: 2,
                                  name: 'Product #2',
                                  image: imgLogo,
                                  price: 5,
                                  quantity: 10
                              }], total = 10
                      }) => (
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

        {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}

        <div className='total'>
            <span>Total: ${total}</span>
        </div>

    </div>
)

export default CheckoutPage