import React, { Component } from 'react'

import './button.css'

class Button extends Component {
    render() {
        return (
            <button id={this.props.id} className={`button button-${this.props.type} ${this.props.sr}`}>
                {this.props.label}
            </button>
        );
    }
}

export default Button