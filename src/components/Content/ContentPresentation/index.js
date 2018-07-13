import React, { Component, Fragment } from 'react'
import Button from '../../Button'

class ContentPresentation extends Component {
    render() {
        return (
            <Fragment>
                <h2>Preparamos uma apresentação<br/>especial para vocês!</h2>
                <img src={require('../../../assets/images/geovanna-icon-presentation.svg')} alt="Imagem de um cardápio decorado com corações" className="sr-2" />
                <h3>conheça detalhadamente os nossos serviços</h3>
                <a href="https://www.geovannagarcia.com.br/files/geovanna-apresentacao.pdf" target="_blank" rel="noopener noreferrer" download>
                    <Button 
                        id="btn-presentation"
                        label="BAIXAR A APRESENTAÇÃO"
                        type="white">
                    </Button>
                </a>
            </Fragment>
        );
    }
}

export default ContentPresentation