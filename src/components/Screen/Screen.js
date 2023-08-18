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

    const handleClick = (value) => {
        if(value.target.className === 'button'){
            setValueFromKeypod(valueFromKeypod + value.target.textContent)          
        }

        if(value.target.textContent === 'AC'){
            setValueFromKeypod('')
            prevValue = '';
        }

        if(value.target.textContent === '+/-'){
            setValueFromKeypod(Number(valueFromKeypod) * -1)
            prevValueRef.current = valueFromKeypod; 
            return;
        }

        if(value.target.textContent === '%'){
            setValueFromKeypod(Number(valueFromKeypod) / 100)
            prevValueRef.current = valueFromKeypod; 
            return;
        }

        if(value.target.className !== 'button') {
            prevValueRef.current = valueFromKeypod; 
            setValueFromKeypod('')
            setOperation(value.target.textContent)
        }

        if(value.target.textContent === '=') {
            if(operation === '+'){
                setValueFromKeypod(Number(prevValue) + Number(valueFromKeypod))
            }
            if(operation === '-') {
                setValueFromKeypod(Number(prevValue) - Number(valueFromKeypod))
            }
            if(operation === '÷') {
                setValueFromKeypod(Number(prevValue) / Number(valueFromKeypod))
            }
            if(operation === 'x') {
                setValueFromKeypod(Number(prevValue) * Number(valueFromKeypod))
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