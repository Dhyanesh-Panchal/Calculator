import React from 'react'

export const Keys = (props) => {
    return (
        <div className='keys'>
            <button className="key horizontal-key AC">AC</button>
            <button className="key">/</button>
            <button className="key">*</button>
            <button className="key">7</button>
            <button className="key">8</button>
            <button className="key">9</button>
            <button className="key">-</button>
            <button className="key">4</button>
            <button className="key">5</button>
            <button className="key">6</button>
            <button className="key">+</button>
            <button className="key">1</button>
            <button className="key">2</button>
            <button className="key">3</button>
            <button className="key vertical-key" disabled={!props.validExpression} >=</button>
            <button className="key horizontal-key 0">0</button>
            <button className="key">.</button>
        </div>
    )
}
