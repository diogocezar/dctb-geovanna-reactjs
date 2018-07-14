import React, { Component } from 'react'
import DocumentMeta         from 'react-document-meta'

// Configs
import { MetaTag }          from '../../configs/'

//Components
import Menu                 from '../../components/Menu'
import Section              from '../../components/Section'
import Carousel             from '../../components/Carousel'
import Content              from '../../components/Content'
import ContentHome          from '../../components/Content/ContentHome'
import ContentPresentation  from '../../components/Content/ContentPresentation'
import ContentAbout         from '../../components/Content/ContentAbout'
import ContentServices      from '../../components/Content/ContentServices'
import ContentContact       from '../../components/Content/ContentContact'

//Plugins
import 'jquery.mousewheel'
import { PluginNiceScroll }     from '../../plugins/plugin-nice-scroll'
import { PluginScrollReveal }   from '../../plugins/plugin-scroll-reveal'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const $ = window.$;

class Home extends Component {
	componentDidMount(){
		this.pluginNiceScroll   = new PluginNiceScroll()
		this.pluginScrollReveal = new PluginScrollReveal()
		$(document).ready(function () {
			$('.owl-carousel').owlCarousel();
		});
	}
	render() {
		return(
			<DocumentMeta {...MetaTag}>
				<Menu/>
				<Section id="home">
					<Content id="content-home" container="false">
						<ContentHome></ContentHome>
					</Content>
				</Section>
				<Section id="presentation">
					<Content id="content-presentation" container="false">
						<ContentPresentation></ContentPresentation>
					</Content>
				</Section>
				<Section id="about">
					<Content id="content-about">
						<ContentAbout></ContentAbout>
					</Content>
				</Section>
				<Section id="services">
					<Content id="content-services">
						<ContentServices></ContentServices>
					</Content>
				</Section>
				<Section id="testmonials">
					<Content id="content-testmonials">
						<Carousel></Carousel>
						<div class="owl-carousel owl-theme">
							<div> Your Content </div>
							<div> Your Content </div>
							<div> Your Content </div>
							<div> Your Content </div>
							<div> Your Content </div>
							<div> Your Content </div>
							<div> Your Content </div>
						</div>
					</Content>
				</Section>
				<Section id="contact">
					<Content id="content-contact" container="false">
						<ContentContact></ContentContact>
					</Content>
				</Section>
			</DocumentMeta>
		)
	}
}

export default Home