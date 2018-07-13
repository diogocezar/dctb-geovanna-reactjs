import React, { Component } from 'react'

import './box-center.css'

class BoxCenter extends Component {
    render() {
        return (
            <div id={this.props.id}>
                {this.props.children}
            </div>
        );
    }
}

export default BoxCenter