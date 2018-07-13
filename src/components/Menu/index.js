import React, { Component } from 'react'

import './menu.css'

class Menu extends Component {
	render() {
		return (
			<nav id="header-menu">
				<div class="container">
					<header>
						<div title="Menu" class="hamburguer d-xs-block d-sm-block d-md-block d-lg-none">
							<span></span>
						</div>
						<a href="#" class="a-header" data-menu="top">
							<img src="./images/geovanna-logo-nav.svg"/>
						</a>
					</header>
					<nav class="menu-desktop bg-transparent bg-shared d-none d-md-block">
						<div class="menu-container nav navbar-nav">
							<ul>
								<li class="menu-item">
									<a href="#apresentacao" data-menu="true">Apresentação</a>
								</li>
								<li class="menu-item">
									<a href="#sobre" data-menu="true">Sobre</a>
								</li>
								<li class="menu-item">
									<a href="#servicos" data-menu="true">Serviços</a>
								</li>
								<li class="menu-item">
									<a href="#depoimentos" data-menu="true">Depoimentos</a>
								</li>
								<li class="menu-item">
									<a href="#contato" data-menu="true">Contato</a>
								</li>
							</ul>
						</div>
					</nav>
					<nav class="menu-mobile bg-transparent bg-shared d-xs-block d-sm-block d-md-block d-lg-none">
						<div class="menu-container nav navbar-nav">
							<ul>
								<li class="menu-item">
									<a href="#apresentacao" data-menu="true">Apresentação</a>
								</li>
								<li class="menu-item">
									<a href="#sobre" data-menu="true">Sobre</a>
								</li>
								<li class="menu-item">
									<a href="#servicos" data-menu="true">Serviços</a>
								</li>
								<li class="menu-item">
									<a href="#depoimentos" data-menu="true">Depoimentos</a>
								</li>
								<li class="menu-item">
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