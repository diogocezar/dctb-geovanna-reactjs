import React, { Component } from 'react'

import './menu.css'

class Menu extends Component {
	constructor(props){
		super(props)
		this.setClick = this.setClick.bind(this)
	}
	setClick(e){
		document.getElementById(e.target.getAttribute('data-target')).scrollIntoView({behavior: 'smooth', block: 'start'})
	}
	render() {
		return (
			<nav id="header-menu">
				<div className="container">
					<header>
						<div title="Menu" className="hamburguer d-xs-block d-sm-block d-md-block d-lg-none">
							<span></span>
						</div>
						<a href="" className="a-header">
							<img src={require('../../assets/images/geovanna-logo-nav.svg')} alt="Logotipo Geovanna"/>
						</a>
					</header>
					<nav className="menu-desktop bg-transparent bg-shared d-none d-md-block">
						<div className="menu-container nav navbar-nav">
							<ul>
								<li className="menu-item">
									<a data-target="presentation" onClick={this.setClick}>Apresentação</a>
								</li>
								<li className="menu-item">
									<a data-target="about" onClick={this.setClick}>Sobre</a>
								</li>
								<li className="menu-item">
									<a data-target="services" onClick={this.setClick}>Serviços</a>
								</li>
								<li className="menu-item">
									<a data-target="testmonials" onClick={this.setClick}>Depoimentos</a>
								</li>
								<li className="menu-item">
									<a data-target="contact" onClick={this.setClick}>Contato</a>
								</li>
							</ul>
						</div>
					</nav>
					<nav className="menu-mobile bg-transparent bg-shared d-xs-block d-sm-block d-md-block d-lg-none">
						<div className="menu-container nav navbar-nav">
							<ul>
								<li className="menu-item">
									<a href="#apresentacao">Apresentação</a>
								</li>
								<li className="menu-item">
									<a href="#sobre">Sobre</a>
								</li>
								<li className="menu-item">
									<a href="#servicos">Serviços</a>
								</li>
								<li className="menu-item">
									<a href="#depoimentos">Depoimentos</a>
								</li>
								<li className="menu-item">
									<a href="#contato">Contato</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</nav>
		);
	}
}

export default Menu