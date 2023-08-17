import React from 'react'
import Button from '../Button/Button'

import './Screen.css'

const buttons = [
    'AC', '+/-', '%', '÷',
      7,   8,   9,    'x',
      4,   5,   6,    '-',
      1,   2,   3,    '+',
      0,       '.',   '='
];

const Screen = () => {
    const handleClick = (value) => {
        console.log(value.target.textContent)
    }
    
    return (
        <div className="screen">
            <h1 className='input'>123</h1>
            <div className='keypad'>
                {buttons.map((el, index) => (
                        <Button 
                          key={index} 
                          value={el} 
                          click={handleClick}  
                        />
                    ))
                }                
            </div>
        </div>
    )
}

export default Screen;