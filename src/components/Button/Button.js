import React from 'react'
import './Button.css'

const Button = (props) => {
    return(
        <button 
          className='button'
          key={props.index}
          style={
            typeof(props.value) !== 'number' && props.value !== '.' ? {backgroundColor: 'orange'} : null | 
            props.value === 0 ? {width: 140} : null
          }
          onClick={props.click}
        >
          {props.value}
        </button>
    )
}

export default Button;