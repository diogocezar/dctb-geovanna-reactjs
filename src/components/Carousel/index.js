import React, { Component } from 'react'

import './carousel.css'

class Carousel extends Component {
    render() {
        return (
            <div id="carousel-testimony" className="owl-carousel owl-theme carousel-default">
                <div className="item">
                    <div className="row row-testimony">
                        <div className="col-md-6 col-sm-12">
                            <p>Queremos te agradecer por todo seu empenho, vocês foram simplesmente incríveis, obrigada por todo carinho e atenção em cada detalhe escolhido. Foi muito mais fácil lidar com tudo de longe, tendo vocês ao nosso lado, confiamos
                            de olhos fechados e o resultado foi maravilhoso! Somos eternamente gratos por tudo.</p>
                            <img src={require('../../assets/images/geovanna-casal-01.png')} alt="Imagem de um casal que fez um depoimento" />
                            <h4>Lais e Marcos</h4>
                            <h5>04/11/2018</h5>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p>Você e sua equipe foram muito importante nesse momento. Agradecemos muito por tudo que fez, quero te levar para sempre em nossas vidas. Você foi perfeita em tudo exatamente tudo. Cuidou de cada detalhe com muito cuidado, carinho, amor e atenção. Uma profissional admirável e de exemplo.</p>
                            <img src={require('../../assets/images/geovanna-casal-02.png')} alt="Imagem de um casal que fez um depoimento" />
                            <h4>Lirian e Eduardo</h4>
                            <h5>13/05/17</h5>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row row-testimony">
                        <div className="col-md-6 col-sm-12">
                            <p>Não poderia ter escolhido melhor assessora, fez do meu dia um sonho mágico. Agradeço a Deus todos os dias pelo dias por ter colocado você no meu caminho e por ter proporcionado um dia maravilhoso, você é sua equipe são nota 1000.</p>
                            <img src={require('../../assets/images/geovanna-casal-03.png')} alt="Imagem de um casal que fez um depoimento" />
                            <h4>Aline e Matheus</h4>
                            <h5>16/12/18</h5>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p>Melhor assessora do mundo, impecável, super profissional, resolve problemas que ocorrem no dia sem stress com todo cuidado, grande dedicação pelo seu trabalho, amor e carinho por seus clientes, em todo tempo cuidou do meu casamento como se fosse o dela.</p>
                            <img src={require('../../assets/images/geovanna-casal-04.png')} alt="Imagem de um casal que fez um depoimento" />
                            <h4>Isabela e Jeison</h4>
                            <h5>27/11/16</h5>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row row-testimony">
                        <div className="col-md-6 col-sm-12">
                            <p>A Geovanna Garcia é uma excelente profissional, desde o primeiro atendimento nos atendeu com paciência e passando muita tranquilidade. Foi o melhor investimento que fiz no meu casamento, porque a tranquilidade que tive no dia do casamento dinheiro nenhum paga!</p>
                            <img src={require('../../assets/images/geovanna-casal-05.png')} alt="Imagem de um casal que fez um depoimento" />
                            <h4>Renata e Douglas</h4>
                            <h5>10/09/16</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel