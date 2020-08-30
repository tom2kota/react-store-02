import React from "react";

import './CollectionItem.scss'

export const CollectionItem = ({id, name, price, image}) => (
    <div className='collection-item'>
        <div className='image' style={{backgroundImage: `url(${image})`}}/>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
)