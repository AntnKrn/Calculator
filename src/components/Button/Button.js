import React from 'react'
import './Button.css'

const Button = (props) => {
    return(
        <button 
          className={typeof(props.value) === 'number' ? 'button' : 'buttonOperation'}
          key={props.index}
          style={ props.value === 0 ? {width: 140} : null }
          onClick={props.click}
        >
          {props.value}
        </button>
    )
}

export default Button;