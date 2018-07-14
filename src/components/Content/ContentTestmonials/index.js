import React, { Component, Fragment } from 'react'

import Carousel from '../../Carousel'

class ContentTestmonials extends Component {
    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col">
                        <h2 className="sr-1">depoimentos</h2>
                        <img src={require('../../../assets/images/geovanna-icon-ballons.svg')} alt="Ícone de dois balões com coração" className="sr-4" />
                        <h3 className="sr-3">Aqui estão os depoimentos de alguns casais que contrataram os nossos serviços</h3>
                    </div>
                </div>
                <div className="row">
                    <Carousel id="carousel-default"></Carousel>
                </div>
            </Fragment>
        );
    }
}

export default ContentTestmonials