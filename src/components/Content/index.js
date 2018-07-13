import React, { Component } from 'react'

import './content.css'

class Content extends Component {
    render() {
        return (
            <div id={this.props.id} className={!this.props.container ? 'container' : ''}>
                {this.props.children}
            </div>
        );
    }
}

export default Content