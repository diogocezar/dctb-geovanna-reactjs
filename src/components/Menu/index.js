import React, { Component } from 'react'

import './menu.css'

class Menu extends Component {
	render() {
		return (
			<nav id="header-menu">
				<div className="container">
					<header>
						<div title="Menu" className="hamburguer d-xs-block d-sm-block d-md-block d-lg-none">
							<span></span>
						</div>
						<a href="" className="a-header" data-menu="top">
							<img src={require('../../assets/images/geovanna-logo-nav.svg')} alt="Logotipo Geovanna"/>
						</a>
					</header>
					<nav className="menu-desktop bg-transparent bg-shared d-none d-md-block">
						<div className="menu-container nav navbar-nav">
							<ul>
								<li className="menu-item">
									<a href="#apresentacao" data-menu="true">Apresentação</a>
								</li>
								<li className="menu-item">
									<a href="#sobre" data-menu="true">Sobre</a>
								</li>
								<li className="menu-item">
									<a href="#servicos" data-menu="true">Serviços</a>
								</li>
								<li className="menu-item">
									<a href="#depoimentos" data-menu="true">Depoimentos</a>
								</li>
								<li className="menu-item">
									<a href="#contato" data-menu="true">Contato</a>
								</li>
							</ul>
						</div>
					</nav>
					<nav className="menu-mobile bg-transparent bg-shared d-xs-block d-sm-block d-md-block d-lg-none">
						<div className="menu-container nav navbar-nav">
							<ul>
								<li className="menu-item">
									<a href="#apresentacao" data-menu="true">Apresentação</a>
								</li>
								<li className="menu-item">
									<a href="#sobre" data-menu="true">Sobre</a>
								</li>
								<li className="menu-item">
									<a href="#servicos" data-menu="true">Serviços</a>
								</li>
								<li className="menu-item">
									<a href="#depoimentos" data-menu="true">Depoimentos</a>
								</li>
								<li className="menu-item">
									<a href="#contato" data-menu="true">Contato</a>
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