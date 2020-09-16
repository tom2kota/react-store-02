import React from "react";
import {SHOP_DATA} from '../../pages/shop/shopData'
import imgLogo from '../../images/logo192.png'
import './CartItem.scss';

export const CartItem = ({image = imgLogo, price = 10, name = 'product_name', quantity = 1}) => (
    <>
        <div className='cart-item'>
            <img src={image} alt='item'/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity}x ${price}</span>
            </div>
        </div>
        {SHOP_DATA.map(x =>
            <div key={x.id}>
                {x.items.map(y =>
                    <div key={y.id} className='cart-item'>
                        <img src={y.image} alt='item'/>
                        <div className='item-details'>
                            <span className='name'>{y.name}</span>
                            <span className='price'>{y.quantity}x ${y.price}</span>
                        </div>
                    </div>
                )}
            </div>
        )}
    </>
)