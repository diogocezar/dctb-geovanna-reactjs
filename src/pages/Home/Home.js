import React, { Component } from 'react'
import DocumentMeta         from 'react-document-meta'
import { MetaTag }          from '../../configs/'
import Menu                 from '../../components/Menu'
import Section              from '../../components/Section'
import Carousel             from '../../components/Carousel'
import Content              from '../../components/Content'
import ContentHome          from '../../components/Content/ContentHome'
import ContentPresentation  from '../../components/Content/ContentPresentation'
import ContentAbout         from '../../components/Content/ContentAbout'
import ContentServices      from '../../components/Content/ContentServices'
import ContentContact       from '../../components/Content/ContentContact'

class Home extends Component {
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