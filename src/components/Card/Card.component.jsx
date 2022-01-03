import React from 'react'
import './Card.styles.css'


export const Card = ({img,heading}) => {
    return (
        <div className='card-holder'>
            <img src={img}/>
            <h4 className="heading">{heading}</h4>
        </div>
    )
}
