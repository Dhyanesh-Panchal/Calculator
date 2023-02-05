import React, { Component } from 'react'
import { Display } from './Display'
import { Keys } from './Keys'
import Evaluator from './Evaluator';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validExpression: true,
            expression: '0',
            answer: '0',
            decimalPossible: true
        }
        this.handleKey = this.handleKey.bind(this);
    }

    handleKey(event) {
        console.log(event)
        let keyPressed = event.target.name;
        if (keyPressed === 'AC') {
            this.setState({
                expression: '0',
                answer: '0',
                validExpression: true,
                decimalPossible: true
            })
        }
        else if (keyPressed === '=') {

            // console.log(Evaluator('sasas'))
            this.setState(state => ({
                answer: Evaluator(state.expression)
            }))
        }
        else if (keyPressed === '.') {
            if (this.state.decimalPossible) {
                this.setState(state => ({
                    validExpression: false,
                    expression: state.expression + keyPressed,
                    answer: state.expression + keyPressed,
                    decimalPossible: false
                }))
            }
        }
        else if (keyPressed === '+' || keyPressed === '-' || keyPressed === '*' || keyPressed === '/') {
            //testing if last character is a operator or not
            if (/[+|*|/|-]/.test(this.state.expression[this.state.expression.length - 1])) {
                if (keyPressed === '-') {
                    this.setState(state => ({
                        validExpression: false,
                        expression: state.expression + keyPressed,
                        answer: state.expression + keyPressed,
                        decimalPossible: true
                    }))
                }
                else {
                    this.setState(state => ({
                        validExpression: false,
                        expression: state.expression.slice(0, state.expression.length - 1) + keyPressed,
                        answer: state.expression.slice(0, state.expression.length - 1) + keyPressed,
                        decimalPossible: true
                    }))

                }
            }
            else if (this.state.expression[this.state.expression.length - 1] === '.') {
                return;
            }
            else {
                this.setState(state => ({
                    validExpression: false,
                    expression: state.expression + keyPressed,
                    answer: state.expression + keyPressed,
                    decimalPossible: true
                }))
            }
        }

        else {
            if (this.state.expression === '0') {
                this.setState({
                    validExpression: true,
                    expression: keyPressed,
                    answer: keyPressed
                })
            }
            else {
                this.setState(state => ({
                    validExpression: true,
                    expression: state.expression + keyPressed,
                    answer: state.expression + keyPressed
                }))
            }
        }
        // console.log(event.target.id);


    }
    render() {
        return (
            <div className='calculator'>
                <Display state={this.state} />
                <Keys validExpression={this.state.validExpression} handleKey={this.handleKey} />
            </div>
        )
    }
}
