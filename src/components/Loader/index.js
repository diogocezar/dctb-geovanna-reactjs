import React, { Component } from 'react'

import './loader.css'

class Loader extends Component {
    render() {
        return (
            <section id="loader">
                <img src={require('../../assets/images/geovanna-logo-loader.svg')} alt="Logotipo Geovanna Garcia"/>
            </section>
        );
    }
}

export default Loader