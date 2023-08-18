import React, { useEffect, useRef, useState } from 'react'
import Button from '../Button/Button'
import Display from '../../Display/Display';

import './Screen.css'

const buttons = [
    'AC', '+/-', '%', '÷',
      7,   8,   9,    'x',
      4,   5,   6,    '-',
      1,   2,   3,    '+',
      0,       '.',   '='
];

        // через свитч делать операции
const Screen = () => {
    const [valueFromKeypod, setValueFromKeypod] = useState('');
    const [displayOutput, setDisplayOutput] = useState(0)
    const [operation, setOperation] = useState()

    const prevValueRef = useRef();

    let prevValue = prevValueRef.current; 

    const sum = (val1, val2) => val1 + val2;

    const raz = (val1, val2) => val1 - val2;

    const umn = (val1, val2) => val1 * val2;

    const del = (val1, val2) => val1 / val2;

    const handleClick = (value) => {
        if(Number(value.target.className === 'button')){
            setValueFromKeypod(valueFromKeypod + value.target.textContent)          
        }

        if(value.target.textContent === 'AC'){
            setValueFromKeypod('')
            prevValue = '';
        }

        if(value.target.textContent === '+') {
            prevValueRef.current = valueFromKeypod; 
            setValueFromKeypod('')
            setOperation(value.target.textContent)
        }

        if(value.target.textContent === '-') {
            prevValueRef.current = valueFromKeypod; 
            setValueFromKeypod('')
            setOperation(value.target.textContent)
        }

        if(value.target.textContent === '=') {
            if(operation === '+'){
                setValueFromKeypod(sum(Number(prevValue), Number(valueFromKeypod)))
            }
            if(operation === '-') {
                setValueFromKeypod(raz(Number(prevValue), Number(valueFromKeypod)))
            }

        }


    }
 
    console.log(prevValue)
    console.log(valueFromKeypod)

    return (
        <div className="screen">
            <Display 
              displayValue={valueFromKeypod}
            />
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


/*         if(Number(value.target.className === 'button')){
            setValueFromKeypod(value.target.textContent)
            prevValueRef.current = valueFromKeypod;

        }

        if(value.target.textContent === 'AC'){
            setValueFromKeypod(0)
            prevValue = 0;
        }
        if(value.target.textContent === '+') {
            prevValueRef.current = valueFromKeypod;
            //setValueFromKeypod(value.target.textContent)
        }
        if(value.target.textContent === '=') {
            setValueFromKeypod(sum(prevValue, valueFromKeypod))
        } */