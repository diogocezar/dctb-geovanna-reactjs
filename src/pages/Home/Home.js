import React, { Component } from 'react'
import DocumentMeta         from 'react-document-meta'
import { MetaTag }          from '../../configs/'
import Menu                 from '../../components/Menu'
import Section              from '../../components/Section'

class Home extends Component {
	render() {
		return(
			<DocumentMeta {...MetaTag}>
				<Menu/>
				<Section id="home">
					<h1>Teste</h1>
				</Section>
				<Section id="apresentacao">
					<h1>Teste2</h1>
				</Section>
			</DocumentMeta>
		)
	}
}

export default Home