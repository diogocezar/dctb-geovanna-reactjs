import React, { Component, Fragment } from 'react'
import Button from '../../Button'

import './content-presentation.css'

class ContentPresentation extends Component {
    render() {
        return (
            <Fragment>
                <div id="content-presentation">
                    <h2 className="sr-1">Preparamos uma apresentação<br/>especial para vocês!</h2>
                    <img src={require('../../../assets/images/geovanna-icon-presentation.svg')} alt="Imagem de um cardápio decorado com corações" className="sr-2" />
                    <h3 className="sr-1">conheça detalhadamente os nossos serviços</h3>
                    <a href="https://www.geovannagarcia.com.br/files/geovanna-apresentacao.pdf" target="_blank" rel="noopener noreferrer" className="sr-4" download>
                        <Button 
                            id="btn-presentation"
                            label="BAIXAR A APRESENTAÇÃO"
                            type="white"
                            sr="sr-2">
                        </Button>
                    </a>
                </div>
            </Fragment>
        );
    }
}

export default ContentPresentation