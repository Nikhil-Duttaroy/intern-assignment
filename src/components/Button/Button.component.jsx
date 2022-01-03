import React from 'react'
import "./Button.styles.css"

const CustomButton = ({children,color}) => {
    return (
        <button className='custom-button' style={{color:color,border:`2px solid ${color}`}}>{children}</button>
    )
}

export default CustomButton
