import React from 'react'

export const Keys = (props) => {
    return (
        <div className='keys'>
            <button className="key horizontal-key AC" onClick={props.handleKey} id='clear' name='AC'>AC</button>
            <button className="key" onClick={props.handleKey} id='divide' name='/' >/</button>
            <button className="key" onClick={props.handleKey} id='multiply' name='*' >*</button>
            <button className="key" onClick={props.handleKey} id='seven' name='7' >7</button>
            <button className="key" onClick={props.handleKey} id='eight' name='8' >8</button>
            <button className="key" onClick={props.handleKey} id='nine' name='9' >9</button>
            <button className="key" onClick={props.handleKey} id='subtract' name='-' >-</button>
            <button className="key" onClick={props.handleKey} id='four' name='4' >4</button>
            <button className="key" onClick={props.handleKey} id='five' name='5' >5</button>
            <button className="key" onClick={props.handleKey} id='six' name='6' >6</button>
            <button className="key" onClick={props.handleKey} id='add' name='+' >+</button>
            <button className="key" onClick={props.handleKey} id='one' name='1' >1</button>
            <button className="key" onClick={props.handleKey} id='two' name='2' >2</button>
            <button className="key" onClick={props.handleKey} id='three' name='3' >3</button>
            <button className="key vertical-key" disabled={!props.validExpression} onClick={props.handleKey} id='equals' name='='>=</button>
            <button className="key horizontal-key 0" onClick={props.handleKey} id='zero' name='0'>0</button>
            <button className="key" onClick={props.handleKey} id='decimal' name='.'>.</button>
        </div>
    )
}
