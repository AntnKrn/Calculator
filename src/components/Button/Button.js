import React from 'react'
import './Button.css'

const Button = (props) => {
    return(
        <button className='button' key={props.index}>{props.value}</button>
    )
}

export default Button;