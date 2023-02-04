import React from 'react'

export const Display = (props) => {
    return (
        <div className='display'>
            <p className="expression text-display">{props.state.expression}</p>
            <p className="answer text-display" id='display'>{props.state.answer}</p>
        </div>
    )
}
