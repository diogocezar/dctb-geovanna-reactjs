import React, { Component } from 'react'
import DocumentMeta         from 'react-document-meta'
import { MetaTag }          from '../../configs/'
import Menu                 from '../../components/Menu'
import Section              from '../../components/Section'
import BoxCenter            from '../../components/Section/BoxCenter'
import Button               from '../../components/Button'

class Home extends Component {
	render() {
		return(
			<DocumentMeta {...MetaTag}>
				<Menu/>
				<Section id="home">
					<BoxCenter id="box-home">
						<h2>O grande momento está chegando?</h2>
						<h3>Vocês vão se casar? Não se preocupe!</h3>
						<h4>Sou a <span className="hl">Geovanna Garcia</span>,</h4>
						<h4>Estou aqui para lhe ajudar</h4>
						<Button 
							id="btn-contact"
							label="ENTRE EM CONTATO"
							type="transparent">
						</Button>
					</BoxCenter>
				</Section>
				<Section id="apresentacao">
					<BoxCenter id="box-presentation">
						<h2>Preparamos uma apresentação<br/>especial para vocês!</h2>
						<img src={require('../../assets/images/geovanna-icon-presentation.svg')} alt="Imagem de um cardápio decorado com corações" className="sr-2" />
						<h3>conheça detalhadamente os nossos serviços</h3>
						<a href="https://www.geovannagarcia.com.br/files/geovanna-apresentacao.pdf" target="_blank" rel="noopener noreferrer" download>
							<Button 
								id="btn-presentation"
								label="BAIXAR A APRESENTAÇÃO"
								type="white">
							</Button>
						</a>
					</BoxCenter>
				</Section>
				<Section id="sobre">
					<h1>Sobre</h1>
				</Section>
				<Section id="servicos">
					<h1>Servicos</h1>
				</Section>
				<Section id="depoimentos">
					<h1>Depoimentos</h1>
				</Section>
				<Section id="contato">
					<BoxCenter id="box-contact">
						<h2>entrem em contato</h2>
						<img src={require('../../assets/images/geovanna-icon-rings.svg')} alt="Imagem de dois anéis de noivado" />
						<h3>Seré um prazer<br/>conversar com vocês!</h3>
						<h4>Whatsapp e Telefone</h4>
						<p class="bigger"><a href="tel:43996923296">(43) 996 923 296</a><small>clique no número!</small></p>
						<h4>E-mail</h4>
						<p><a href="mailto:geovannagarcia.assesoria@gmail.com">geovannagarcia.assesoria@gmail.com</a></p>
						<ul>
							<li><a href="https://www.instagram.com/geovannagarcia/" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/images/geovanna-icon-instagram.svg')} alt="Ícone Instagram"/></a></li>
							<li><a href="https://www.facebook.com/geovannagarciaeventos/" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/images/geovanna-icon-facebook.svg')} alt="Ícone Facebook"/></a></li>
						</ul>
					</BoxCenter>
				</Section>
			</DocumentMeta>
		)
	}
}

export default Home