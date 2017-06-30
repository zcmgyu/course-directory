import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Login extends Component {
    render() {
        <div>
            <input type='text' placeholder='Username' ref={this.input} />
            <input type='password' placeholder='Password' />
        </div>
    }
}