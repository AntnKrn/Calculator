import React, { useState } from 'react'
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
    const [button, setButton] = useState(buttons)
    return (
        <div className="screen">
            <h1 className='input'>1</h1>
            <div className='keypad'>
                {buttons.map((el, index) => (
                        <Button index={index} value={el} />
                    ))
                }                
            </div>
        </div>
    )
}

export default Screen;