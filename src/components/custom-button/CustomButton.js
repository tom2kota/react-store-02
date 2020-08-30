import React from "react";

import './CustomButton.scss'

export const CustomButton = ({children, ...restProps}) => (
    <button className='custom-button' {...restProps}>
        {children}
    </button>
)
