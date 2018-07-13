import React, { Component } from 'react'
import DocumentMeta         from 'react-document-meta'
import { MetaTag }          from '../../configs/'
import Menu                 from '../../components/Menu'
import Section              from '../../components/Section'
import BoxCenter            from '../../components/Section/BoxCenter'
import Button               from '../../components/Button'
import Content              from '../../components/Content'

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
				<Section id="presentation">
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
				<Section id="about">
					<Content id="content-about">
						<div className="row">
							<div className="col-lg-7 col-md-7 col-sm-12">
								<h2>sobre nós</h2>
								<h3>Oi, sou a Geovanna Garcia</h3>
								<p>Saber que seus bens estão seguros é viver com mais tranquilidade, podendo dedicar seu tempo no que mais importa para você. Pensando nisso a LIEN Corretora de Seguros trabalha oferecendo facilidade e transparência. Uma corretora atual que busca a melhoria contínua em seus processos e serviços.</p>
								<p>Nosso objetivo é proporcionar segurança e despreocupação, por isso contamos com uma consultoria especializada que visa orientar e apresentar a proposta de seguro mais adequada às suas necessidades, através de uma análise minuciosa para oferecer o melhor custo-benefício com a certeza de uma apólice bem elaborada.</p>
								<p>No site é possível solicitar cotações, tirar dúvidas e compreender em detalhes tudo sobre o seguro contratado. Isso permitirá usufruir de todas as facilidades que o seguro oferece e ainda ter a certeza de estar realmente assistido, caso tenha a necessidade de acionar os serviços. Com a LIEN Corretora de Seguros você estará protegido e terá todo o suporte de nossa consultoria especializada com agilidade e clareza. Conheça nossos serviços, faça um seguro com a LIEN.</p>
								<img src={require('../../assets/images/geovanna-icon-heart.svg')} alt="Ícone de dois corações" />
								<h3>A nossa missão</h3>
								<p>é planejar com total dedicação o momento mais importante na vida de um casal, acompanhando todo processo com muito profissionalismo transmitindo tranquilidade e confiança para que os noivos possam desfrutar ao máximo esse momento único e especial.</p>
							</div>
						</div>
					</Content>
				</Section>
				<Section id="services">
					<Content id="content-services">
						<div className="row">
							<div className="col">
								<h2>Tipos de Serviços</h2>
								<img src={require('../../assets/images/geovanna-icon-ring.svg')} alg="Ícone de um anel de casamento"/>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-12">
								<h3>Assessoria<br/><span className="hl">Completa</span></h3>
								<p>Nessa modalidade, iniciamos com a consultoria e seguimos acompanhando o casal durante todo o processo: elaboração do <i>layout</i>, estilo do casamento, busca por fornecedores, visitas técnicas, contratações e organização de planilhas para o controle de orçamento.</p>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<h3>Assessoria<br/><span className="hl">Intermediária</span></h3>
								<p>Essa modalidade é para o casal que já contratou alguns serviços, porém, encontraram dificuldades em organizar o casamento no meio do processo. Teremos reuniões em que os noivos nos contam como será o grande dia, e então preparamos todo o suporte daqui pra frente.</p>
							</div>
						</div>
						<a href="https://www.geovannagarcia.com.br/files/geovanna-apresentacao.pdf" target="_blank" rel="noopener noreferrer" download>
							<Button 
								id="btn-presentation"
								label="BAIXAR A APRESENTAÇÃO"
								type="white">
							</Button>
						</a>
					</Content>
				</Section>
				<Section id="testmonials">
					<h1>Depoimentos</h1>
				</Section>
				<Section id="contact">
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