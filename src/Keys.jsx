import React from 'react'

export const Keys = (props) => {
    return (
        <div className='keys'>
            <button className="key horizontal-key AC" onClick={props.handleKey} id='AC' >AC</button>
            <button className="key" onClick={props.handleKey} id='/' >/</button>
            <button className="key" onClick={props.handleKey} id='*' >*</button>
            <button className="key" onClick={props.handleKey} id='7' >7</button>
            <button className="key" onClick={props.handleKey} id='8' >8</button>
            <button className="key" onClick={props.handleKey} id='9' >9</button>
            <button className="key" onClick={props.handleKey} id='-' >-</button>
            <button className="key" onClick={props.handleKey} id='4' >4</button>
            <button className="key" onClick={props.handleKey} id='5' >5</button>
            <button className="key" onClick={props.handleKey} id='6' >6</button>
            <button className="key" onClick={props.handleKey} id='+' >+</button>
            <button className="key" onClick={props.handleKey} id='1' >1</button>
            <button className="key" onClick={props.handleKey} id='2' >2</button>
            <button className="key" onClick={props.handleKey} id='3' >3</button>
            <button className="key vertical-key" disabled={!props.validExpression} onClick={props.handleKey} id='=' >=</button>
            <button className="key horizontal-key 0" onClick={props.handleKey} id='0' >0</button>
            <button className="key" onClick={props.handleKey} id='.' >.</button>
        </div>
    )
}
