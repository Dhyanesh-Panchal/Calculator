import React, { Component } from 'react'
import { Display } from './Display'
import { Keys } from './Keys'

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validExpression: true,
            expression: '0',
            answer: '0'
        }
    }
    render() {
        return (
            <div className='calculator'>
                <Display state={this.state} />
                <Keys validExpression={this.state.validExpression} />
            </div>
        )
    }
}
