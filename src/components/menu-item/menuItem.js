import React from "react";
import './menuItem.scss'

export const MenuItem = ({title, image}) => (
    <div className='menu-item'>
        <div className='background-image' style={{backgroundImage: `url(${image})`}} />
        <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)
