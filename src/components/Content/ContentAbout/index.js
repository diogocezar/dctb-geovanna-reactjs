import React, { Component, Fragment } from 'react'

class ContentAbout extends Component {
    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-12">
                        <h2>sobre nós</h2>
                        <h3>Oi, sou a Geovanna Garcia</h3>
                        <p>Saber que seus bens estão seguros é viver com mais tranquilidade, podendo dedicar seu tempo no que mais importa para você. Pensando nisso a LIEN Corretora de Seguros trabalha oferecendo facilidade e transparência. Uma corretora atual que busca a melhoria contínua em seus processos e serviços.</p>
                        <p>Nosso objetivo é proporcionar segurança e despreocupação, por isso contamos com uma consultoria especializada que visa orientar e apresentar a proposta de seguro mais adequada às suas necessidades, através de uma análise minuciosa para oferecer o melhor custo-benefício com a certeza de uma apólice bem elaborada.</p>
                        <p>No site é possível solicitar cotações, tirar dúvidas e compreender em detalhes tudo sobre o seguro contratado. Isso permitirá usufruir de todas as facilidades que o seguro oferece e ainda ter a certeza de estar realmente assistido, caso tenha a necessidade de acionar os serviços. Com a LIEN Corretora de Seguros você estará protegido e terá todo o suporte de nossa consultoria especializada com agilidade e clareza. Conheça nossos serviços, faça um seguro com a LIEN.</p>
                        <img src={require('../../../assets/images/geovanna-icon-heart.svg')} alt="Ícone de dois corações" />
                        <h3>A nossa missão</h3>
                        <p>é planejar com total dedicação o momento mais importante na vida de um casal, acompanhando todo processo com muito profissionalismo transmitindo tranquilidade e confiança para que os noivos possam desfrutar ao máximo esse momento único e especial.</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ContentAbout