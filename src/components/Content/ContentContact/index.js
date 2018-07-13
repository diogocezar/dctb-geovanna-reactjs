import React, { Component, Fragment } from 'react'

class ContentContact extends Component {
    render() {
        return (
            <Fragment>
                <h2>entrem em contato</h2>
                <img src={require('../../../assets/images/geovanna-icon-rings.svg')} alt="Imagem de dois anéis de noivado" />
                <h3>Seré um prazer<br/>conversar com vocês!</h3>
                <h4>Whatsapp e Telefone</h4>
                <p className="bigger"><a href="tel:43996923296">(43) 996 923 296</a><small>clique no número!</small></p>
                <h4>E-mail</h4>
                <p><a href="mailto:geovannagarcia.assesoria@gmail.com">geovannagarcia.assesoria@gmail.com</a></p>
                <ul>
                    <li><a href="https://www.instagram.com/geovannagarcia/" target="_blank" rel="noopener noreferrer"><img src={require('../../../assets/images/geovanna-icon-instagram.svg')} alt="Ícone Instagram"/></a></li>
                    <li><a href="https://www.facebook.com/geovannagarciaeventos/" target="_blank" rel="noopener noreferrer"><img src={require('../../../assets/images/geovanna-icon-facebook.svg')} alt="Ícone Facebook"/></a></li>
                </ul>
            </Fragment>
        );
    }
}

export default ContentContact